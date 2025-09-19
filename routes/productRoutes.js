// routes/productRoutes.js
const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// Get all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ msg: "Server error", error: err.message });
  }
});

// Add a new product
router.post("/", async (req, res) => {
  try {
    const { name, description, category, price, image } = req.body;
    const product = new Product({ name, description, category, price, image });
    await product.save();
    res.json({ msg: "Product added successfully", product });
  } catch (err) {
    res.status(500).json({ msg: "Server error", error: err.message });
  }
});

module.exports = router;
