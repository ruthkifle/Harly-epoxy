const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    id: Number,
    category: String,
    code: String,
    description: String,
    image: String,
    price: Number
});

module.exports = mongoose.model("Product", ProductSchema);
