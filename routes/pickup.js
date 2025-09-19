const express = require('express');
const Pickup = require('../models/Pickup');
const auth = require('../middleware/auth');

const router = express.Router();

// create pickup (protected)
router.post('/', auth, async (req, res) => {
  const { date, time, location } = req.body;
  // simple dummy worker assign (you can later implement real assignment)
  const workers = [
    { name: 'Ravi Kumar', phone: '+91-9876543210' },
    { name: 'Sita Devi', phone: '+91-9123456780' },
    { name: 'Hari Singh', phone: '+91-9012345678' }
  ];
  const randomWorker = workers[Math.floor(Math.random()*workers.length)];
  const pickup = new Pickup({
    userId: req.user.id,
    date, time, location,
    assignedWorker: randomWorker
  });
  await pickup.save();
  res.json({ message: "Pickup scheduled", pickup });
});

// get pickups for logged-in user
router.get('/me', auth, async (req, res) => {
  const pickups = await Pickup.find({ userId: req.user.id }).sort({ createdAt: -1 });
  res.json(pickups);
});

module.exports = router;
