const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    id: Number,
    category: String,
    code: String,
    description: String,
    image: String,
    price: { type: Number, required: true },
    color: { type: String, required: true }, // Not optional
    flake: { type: String, default: "No flakes" }, // Optional
    glitter: { type: String, default: "No glitter" }, // Optional
    chain: String,   // Logic will handle this for keychains
    handle: String,  // Logic will handle this for trays
    tassle: String   // Logic will handle this for bookmarks
});

module.exports = mongoose.model("Product", ProductSchema);