const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  products: [{ productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" }, qty: Number }],
  total: Number,
  status: { type: String, default: "Placed" }
}, { timestamps: true });

module.exports = mongoose.model('Order', OrderSchema);
