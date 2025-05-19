import express from "express";
const router = express.Router();
import connectMongoDB from "../database.js";
import User from '../models/User.js'

//connect database
connectMongoDB.connectMongoDB();

router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

      console.log({username, email, password})
    // Check if all fields are provided
    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Create and save the user
    const newUser = new User({ username, email, password });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error registering user.", error });
  }
});

router.post('/login', async (req, res) => {
   try {
     const { email, password } = req.body;
     console.log({email, password})

    // Check if email and password are provided
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Find the user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    // Compare passwords
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials." });
    }

    res.status(200).json({ message: "Login successful!", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error logging in.", error });
  }
})

export default router;
