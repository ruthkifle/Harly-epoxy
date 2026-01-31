require('dotenv').config();
const http = require("http");
const fs = require("fs");
const path = require("path");
const connectDB = require("./db");
const Product = require("./models/Product");
const Order = require("./models/Order");

connectDB();
const PORT = process.env.PORT || 4000;


const getRequestBody = (req) => {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", chunk => (body += chunk));
    req.on("error", (err) => reject(err));
    req.on("end", () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (e) {
        reject(new Error("Invalid JSON"));
      }
    });
  });
};


const server = http.createServer(async (req, res) => {
  console.log(`${req.method} request for ${req.url}`);


  const origin = process.env.FRONTEND_URL || "http://localhost:5173";
  res.setHeader("Access-Control-Allow-Origin", origin);
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  if (req.url === "/api/products" && req.method === "GET") {
    try {
      const products = await Product.find({});
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(products));
    } catch (err) {
      res.writeHead(500);
      res.end(JSON.stringify({ error: "Database Error" }));
    }
    return;
  }


  if (req.url === "/api/products/filter" && req.method === "POST") {
    try {
      const f = await getRequestBody(req);
      let query = {};


      const fields = [ 'category', 'color', 'flake', 'glitter', 'chain', 'handle', 'tassle' ];
      fields.forEach(field => {
        if (f[ field ] && f[ field ].toLowerCase() !== "all") {
          query[ field ] = { $regex: new RegExp(`^${f[ field ]}$`, "i") };
        }
      });


      if (f.maxPrice) {
        query.price = { $lte: Number(f.maxPrice) };
      }

      const filtered = await Product.find(query);
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(filtered));
    } catch (err) {
      res.writeHead(500);
      res.end(JSON.stringify({ error: "Filter failed" }));
    }
    return;
  }


  if (req.url === "/api/orders" && req.method === "POST") {
    try {
      const orderData = await getRequestBody(req);
      const newOrder = new Order({
        customer: orderData.customer,
        items: orderData.items,
        total: orderData.total
      });

      await newOrder.save();
      console.log("✅ Order Saved:", newOrder._id);

      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(JSON.stringify({
        success: true,
        message: "Order received!",
        orderId: newOrder._id
      }));
    } catch (err) {
      console.error("Order Error:", err);
      res.writeHead(400);
      res.end(JSON.stringify({ error: "Failed to save order" }));
    }
    return;
  }


  if (req.url.startsWith("/images/")) {
    const filePath = path.join(__dirname, req.url);

    fs.access(filePath, fs.constants.F_OK, (err) => {
      if (err) {
        res.writeHead(404);
        return res.end(JSON.stringify({ error: "Image not found" }));
      }

      const ext = path.extname(filePath).toLowerCase();
      const mimeTypes = {
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.jpeg': 'image/jpeg',
        '.webp': 'image/webp'
      };

      res.writeHead(200, { "Content-Type": mimeTypes[ ext ] || "application/octet-stream" });
      fs.createReadStream(filePath).pipe(res);
    });
    return;
  }


  res.writeHead(404);
  res.end(JSON.stringify({ error: "Route not found" }));
});


server.listen(PORT, () => {
  console.log(`Harly Backend running on http://localhost:${PORT}`);
  console.log(`Harly Backend running on http://localhost:${PORT}`);
});