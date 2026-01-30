const mongoose = require("mongoose");
const Product = require("./models/product");
const products = require("./products.json"); // Make sure the path is correct

async function seedDB() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/harly_resin_db");

        console.log("🌱 Connected to MongoDB — starting seeding…");

        // Clear old data
        await Product.deleteMany({});
        console.log("🗑️ Old products removed");

        // Insert new products
        await Product.insertMany(products);
        console.log("✅ Products inserted successfully!");

        mongoose.connection.close();
        console.log("🔌 MongoDB connection closed");
    } catch (error) {
        console.error("❌ Seed Error:", error);
    }
}

seedDB();
