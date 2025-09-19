const express = require('express');
const auth = require('../middleware/auth');
const User = require('../models/User');
const Pickup = require('../models/Pickup');
const Order = require('../models/Order');

const router = express.Router();

router.get('/me', auth, async (req, res) => {
  const user = await User.findById(req.user.id).select('-password');
  const pickups = await Pickup.find({ userId: req.user.id }).sort({ createdAt: -1 });
  const orders = await Order.find({ userId: req.user.id }).sort({ createdAt: -1 });
  res.json({ user, pickups, orders });
});

module.exports = router;
