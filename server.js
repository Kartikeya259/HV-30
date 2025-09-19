// server.js
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

// env config
dotenv.config();

const app = express();

// middleware
// Serve static files from public folder
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(express.json());

// MongoDB connect
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error(err));

// ------------------- ROUTES -------------------

// Root test route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "login.html"));
});


// Auth routes
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

// Pickup routes
const pickupRoutes = require("./routes/pickupRoutes");
app.use("/api/pickups", pickupRoutes);

// Product routes
const productRoutes = require("./routes/productRoutes");
app.use("/api/products", productRoutes);

// ----------------------------------------------

// Server listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);



// Serve static frontend files
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "login.html"));
});


