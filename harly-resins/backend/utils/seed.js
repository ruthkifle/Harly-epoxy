require('dotenv').config();
const mongoose = require("mongoose");
const Product = require("../models/Product");
const products = require("../products.json");


async function seedDB() {
    const dbURI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/harly_resin_db";

    try {
        await mongoose.connect(dbURI);
        console.log("Connected to MongoDB — starting seeding…");

        const deleteCount = await Product.deleteMany({});
        console.log(`Removed ${deleteCount.deletedCount} old products`);

        await Product.insertMany(products);
        console.log(`${products.length} Products inserted successfully!`);


        await mongoose.connection.close();
        console.log("🔌 MongoDB connection closed");

        process.exit(0);
    } catch (error) {
        console.error("Seed Error:", error.message);
        process.exit(1);
    }
}

seedDB();