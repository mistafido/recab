import express from "express";
const router = express.Router();
import connectMongoDB from "../database.js";
import Rider from "../models/Rider.js";

//connect database
connectMongoDB.connectMongoDB();

//Base URL
router.get("/", (req, res) => {
    res.status(200).json({ message: "Welcome to the rider URL"})
})

//Registration URL
router.post("/register", async (req, res) => {
  try {
    const { name, phonenumber, email, password } = req.body;

    console.log({ name, phonenumber, email, password });
    // Check if all fields are provided
    if (!name || !phonenumber || !email || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Create and save the user
    const newRider = new User({ name, phonenumber, email, password });
    await newRider.save();

    res.status(201).json({ message: "Rider registered successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error registering rider.", error });
  }
});

//Login URL
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log({ email, password });

    // Check if email and password are provided
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Find the user
    const rider = await Rider.findOne({ email });
    if (!rider) {
      return res.status(404).json({ message: "Rider not found." });
    }

    // Compare passwords
    const isMatch = await rider.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials." });
    }

    res.status(200).json({ message: "Login successful!", rider });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error logging in.", error });
  }
});

//Update Rider URL
router.put("/update_rider", async (req, res) => {
    res.status(200).json({ message: "Updated Rider Successfully!" })
});

//Delete Rider URL
router.delete("/delete_rider", async (req, res) => {
    res.status(200).json({ message: "Deleted Rider Successfully!"})
})
export default router;
