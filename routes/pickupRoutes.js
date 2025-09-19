// routes/pickupRoutes.js
const express = require("express");
const router = express.Router();
const Pickup = require("../models/Pickup");

// Create a new pickup
router.post("/", async (req, res) => {
  try {
    const { user, date, time, location } = req.body;
    const pickup = new Pickup({ user: user, date, time, location });
    await pickup.save();
    res.json({ msg: "Pickup scheduled successfully", pickup });
  } catch (err) {
    res.status(500).json({ msg: "Server error", error: err.message });
  }
});

// Get all pickups
router.get("/", async (req, res) => {
  try {
    const pickups = await Pickup.find().populate("user", "name email");
    res.json(pickups);
  } catch (err) {
    res.status(500).json({ msg: "Server error", error: err.message });
  }
});

module.exports = router;



