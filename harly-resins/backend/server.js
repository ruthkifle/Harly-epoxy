const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 4000;

// Read products.json
const productsPath = path.join(__dirname, "products.json");
const productsData = JSON.parse(fs.readFileSync(productsPath, "utf-8"));

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.url === "/api/products" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify(productsData));
  }

  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ error: "Not Found" }));
});

server.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
