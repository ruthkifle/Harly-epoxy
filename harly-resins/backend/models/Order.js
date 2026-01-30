const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    customer: {
        fullName: String,
        phone: String,
        city: String,
        address: String
    },
    items: Array,
    total: Number,
    status: { type: String, default: "Pending" },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Order", OrderSchema);