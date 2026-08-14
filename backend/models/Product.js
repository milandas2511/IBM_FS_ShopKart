const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true, min: 0 },
  mrp: { type: Number, min: 0 },
  features: [{ type: String }],
  category: { type: String, required: true, index: true },
  rating: { type: Number, default: 4.2 },
  reviewsCount: { type: Number, default: 120 }
}, { timestamps: true });

productSchema.index({ title: "text", description: "text" });

module.exports = mongoose.model("Product", productSchema);
