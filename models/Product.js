// models/Product.js
const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    category: { type: String, enum: ["Compost Kits", "Segregation Bins", "Recycled Products"], required: true },
    price: { type: Number, required: true },
    image: { type: String, default: "https://via.placeholder.com/150" }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
