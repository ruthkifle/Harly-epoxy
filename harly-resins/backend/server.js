const http = require("http");
const fs = require("fs");
const path = require("path");
const products = require("./products.json");
const connectDB = require("./db");
connectDB();

const PORT = 4000;

const server = http.createServer((req, res) => {
  // 1. Logger - See what's happening in your terminal
  console.log(`${req.method} request for ${req.url}`);

  // 2. Enable CORS for React (Port 5173)
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle Pre-flight request
  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  // ========= GET ALL PRODUCTS =========
  if (req.url === "/api/products" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(products));
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

  // ========= SERVE IMAGES STATICALLY =========
  if (req.url.startsWith("/images/")) {
    const filePath = path.join(__dirname, req.url);

    if (fs.existsSync(filePath)) {
      // Basic logic to detect extension
      const ext = path.extname(filePath).toLowerCase();
      const contentType = ext === ".png" ? "image/png" : "image/jpeg";

      res.writeHead(200, { "Content-Type": contentType });
      return fs.createReadStream(filePath).pipe(res);
    }

    res.writeHead(404);
    return res.end();
  }

  // ========= SUBMIT ORDER (The New Part!) =========
  if (req.url === "/api/orders" && req.method === "POST") {
    let body = "";
    req.on("data", chunk => (body += chunk));

    req.on("end", () => {
      try {
        const orderData = JSON.parse(body);

        // This will show up in your TERMINAL (Command Prompt)
        console.log("\n✨ NEW ORDER RECEIVED ✨");
        console.log("Customer:", orderData.customer.fullName);
        console.log("Phone:", orderData.customer.phone);
        console.log("Items:", orderData.items.length);
        console.log("Total:", orderData.total, "ETB");
        console.log("---------------------------\n");

        // Send success response back to React
        res.writeHead(201, { "Content-Type": "application/json" });
        res.end(JSON.stringify({
          success: true,
          message: "Order captured by Harly Backend!",
          orderId: Math.floor(1000 + Math.random() * 9000)
        }));
      } catch (err) {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Invalid JSON" }));
      }
    });
    return;
  }

  // ========= PLACEHOLDER ENDPOINTS =========
  if ((req.url === "/api/products/filter" || req.url === "/api/cart") && req.method === "POST") {
    let body = "";
    req.on("data", chunk => (body += chunk));
    req.on("end", () => {
      const data = JSON.parse(body);
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ success: true, received: data }));
    });
    return;
  }

  // ========= DEFAULT NOT FOUND =========
  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ error: "Route not found" }));
});

server.listen(PORT, () => {
  console.log(`Harly Backend running on http://localhost:${PORT}`);
});