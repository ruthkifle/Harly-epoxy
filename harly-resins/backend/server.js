const http = require("http");
const fs = require("fs");
const path = require("path");
const connectDB = require("./db");
const Product = require("./models/product");
const Order = require("./models/Order");

// Connect to MongoDB
connectDB();

const PORT = 4000;

const server = http.createServer(async (req, res) => {
  console.log(`${req.method} request for ${req.url}`);

  // CORS Headers
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  //GET ALL PRODUCT
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

  //FILTER PRODUCTS
  if (req.url === "/api/products/filter" && req.method === "POST") {
    let body = "";
    req.on("data", chunk => (body += chunk));
    req.on("end", async () => {
      try {
        const f = JSON.parse(body);
        let query = {};

        const fields = [ 'category', 'color', 'flake', 'glitter', 'chain', 'handle', 'tassle' ];
        fields.forEach(field => {
          if (f[ field ] && f[ field ] !== "All" && f[ field ] !== "all") {
            query[ field ] = f[ field ];
          }
        });

        if (f.maxPrice) {
          query.price = { $lte: Number(f.maxPrice) }; // Less than or equal to
        }

        const filtered = await Product.find(query);
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(filtered));
      } catch (err) {
        res.writeHead(500);
        res.end(JSON.stringify({ error: "Filter failed" }));
      }
    });
    return;
  }

  //SUBMIT ORDER
  if (req.url === "/api/orders" && req.method === "POST") {
    let body = "";
    req.on("data", chunk => (body += chunk));
    req.on("end", async () => {
      try {
        const orderData = JSON.parse(body);
        const newOrder = new Order({
          customer: orderData.customer,
          items: orderData.items,
          total: orderData.total
        });

        await newOrder.save();
        console.log("✅ Order Saved to MongoDB:", newOrder._id);

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
    });
    return;
  }

  //SERVE IMAGES
  if (req.url.startsWith("/images/")) {
    const filePath = path.join(__dirname, req.url);
    if (fs.existsSync(filePath)) {
      const ext = path.extname(filePath).toLowerCase();
      const contentType = ext === ".png" ? "image/png" : "image/jpeg";
      res.writeHead(200, { "Content-Type": contentType });
      return fs.createReadStream(filePath).pipe(res);
    }
    res.writeHead(404);
    return res.end();
  }

  res.writeHead(404);
  res.end(JSON.stringify({ error: "Route not found" }));
});

server.listen(PORT, () => {
  console.log(`Harly Backend running on http://localhost:${PORT}`);
});