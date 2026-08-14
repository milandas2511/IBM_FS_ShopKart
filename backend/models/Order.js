const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  items: [{
    product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
    title: String,
    image: String,
    price: Number,
    quantity: Number
  }],
  shippingAddress: {
    name: String,
    phone: String,
    address: String,
    city: String,
    pincode: String
  },
  totalAmount: { type: Number, required: true },
  status: { type: String, enum: ["Placed", "Processing", "Shipped", "Delivered"], default: "Placed" }
}, { timestamps: true });

module.exports = mongoose.model("Order", orderSchema);
