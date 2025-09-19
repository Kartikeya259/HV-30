const mongoose = require("mongoose");

const PickupSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  location: { type: String, required: true },
  date: { type: Date, required: true },
  wasteType: { type: String, enum: ["Wet", "Dry", "Hazardous"], default: "Dry" }
});

module.exports = mongoose.model("Pickup", PickupSchema);
