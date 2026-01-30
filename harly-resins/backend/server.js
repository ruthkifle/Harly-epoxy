const http = require("http");
const path = require("path");
const products = require("./products.json");
const connectDB = require("./db");
connectDB();
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/harlyDB")
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch(err => console.error("❌ MongoDB Connection Error:", err));

const PORT = 4000;

const server = http.createServer((req, res) => {
  // Enable CORS for React
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  const Product = require("./models/product");

  if (req.url === "/api/products" && req.method === "GET") {
    Product.find()
      .then(products => {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(products));
      })
      .catch(err => {
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Failed to fetch products" }));
      });
    return;
  }

  // ========= GET PRODUCT BY ID =========
  if (req.url.startsWith("/api/products/") && req.method === "GET") {
    const id = parseInt(req.url.split("/").pop());
    const product = products.find(p => p.id === id);

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(product || { error: "Not found" }));
    return;
  }
  // Serve images statically from backend/public
  if (req.url.startsWith("/images/")) {
    const fs = require("fs");
    const path = require("path");

    const filePath = path.join(__dirname, req.url);

    if (fs.existsSync(filePath)) {
      res.writeHead(200, { "Content-Type": "image/jpeg" });
      return fs.createReadStream(filePath).pipe(res);
    }

    res.writeHead(404);
    return res.end();
  }

  // ========= FILTER ENDPOINT (placeholder) =========
  if (req.url === "/api/products/filter" && req.method === "POST") {
    let body = "";
    req.on("data", chunk => (body += chunk));

    req.on("end", () => {
      const filters = JSON.parse(body);
      console.log("Filters received:", filters);

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ ok: true, received: filters }));
    });

    return;
  }

  // ========= ADD TO CART PLACEHOLDER =========
  if (req.url === "/api/cart" && req.method === "POST") {
    let body = "";
    req.on("data", chunk => (body += chunk));

    req.on("end", () => {
      const item = JSON.parse(body);
      console.log("Cart item received:", item);

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ success: true, added: item }));
    });

    return;
  }

  // ========= DEFAULT NOT FOUND =========
  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ error: "Route not found" }));
});

server.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
