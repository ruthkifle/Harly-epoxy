const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({

    category: { type: String, required: true, index: true },
    code: { type: String, unique: true },
    description: String,
    image: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },

    color: { type: String, required: true, lowercase: true, trim: true },
    flake: { type: String, default: "none", lowercase: true },
    glitter: { type: String, default: "none", lowercase: true },


    chain: { type: String, default: null },
    handle: { type: String, default: null },
    tassle: { type: String, default: null }
}, {
    timestamps: true
});


ProductSchema.index({ description: 'text', code: 'text' });

module.exports = mongoose.model("Product", ProductSchema);