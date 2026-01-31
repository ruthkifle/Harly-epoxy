const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    customer: {
        fullName: { type: String, required: true, trim: true },
        phone: { type: String, required: true },
        city: { type: String, required: true },
        address: { type: String, required: true }
    },

    items: [
        {
            productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
            name: String,
            price: Number,
            quantity: { type: Number, default: 1 }
        }
    ],
    total: {
        type: Number,
        required: true,
        min: [ 0, 'Total cannot be negative' ]
    },
    status: {
        type: String,
        enum: [ "Pending", "Processing", "Shipped", "Delivered", "Cancelled" ],
        default: "Pending"
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});


OrderSchema.index({ "customer.fullName": 1 });

module.exports = mongoose.model("Order", OrderSchema);