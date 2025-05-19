import express from "express";
const router = express.Router();
import connectMongoDB from "../database.js";
import Trip from "../models/Trip.js";

//connect database
connectMongoDB.connectMongoDB();

//Base URL
router.get("/", (req, res) => {
    res.status(200).json({ message: "Welcome to the Trips API" });
})

//Create Trip URL
router.post("/create_trip", async (req, res) => {
    try {
      const { riderId, driverId, destination, currentLocation, startTime, endTime, emergencyContactId, status  } = req.body;

      console.log({
        riderId,
        driverId,
        destination,
        currentLocation,
        startTime,
        endTime,
        emergencyContactId,
        status,
      });
      // Check if all fields are provided
      if (!riderId || !driverId || !destination || !currentLocation || !startTime || !endTime || !emergencyContactId || !status) {
        return res.status(400).json({ message: "All fields are required." });
      }

      // Create and save the trip
      const newTrip = new Trip({
        riderId,
        driverId,
        destination,
        currentLocation,
        startTime,
        endTime,
        emergencyContactId,
        status,
      });
      await newTrip.save();

      res.status(201).json({ message: "Trip registered successfully!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error registering trip.", error });
    }
})

//Get Single Trip Details
router.post("/get_trip/:id", async (req, res) => {
  try {
    const { id } = req.body;
    console.log({ id });

    // Find the user
    const trip = await Trip.findOne({ id });
    if (!trip) {
      return res.status(404).json({ message: "Trip not found." });
    }
    res.status(200).json({ message: "Trip Found!", trip });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error retrieving trip:", error });
  }
});

//Get Multiple Trips Details
router.get("/get_trips", async (req, res) => {
    res.status(200).json({ message: "Trips Fetched Successfully"})
})

//Update Single Trip Details
router.put("/update_trip/:id", async (req, res) => {
    res.status(200).json({ message: "Trip Details Updated Successfully!" });
})

//Delete Single Trip Details
router.delete("/delete_trip/:id", async (req, res) => {
    res.status(200).json({ message: "Trip Details Deleted Successfully!"})
})


export default router;