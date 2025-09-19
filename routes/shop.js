const express = require('express');
const Product = require('../models/Product');
const Order = require('../models/Order');
const auth = require('../middleware/auth');

const router = express.Router();

// get products
router.get('/products', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// place order (protected)
router.post('/order', auth, async (req, res) => {
  const { products, total } = req.body; // products: [{productId, qty}]
  if(!products || !products.length) return res.status(400).json({ error: "No products" });
  const order = new Order({ userId: req.user.id, products, total });
  await order.save();
  res.json({ message: "Order placed", order });
});

module.exports = router;
