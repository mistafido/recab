import express from "express";
const router = express.Router();
import connectMongoDB from "../database.js";
import Notification from "../models/Notification.js";

//connect database
connectMongoDB.connectMongoDB();

//Base URL
router.get("/", (req, res) => {
    res.status(200).json({ message: "Welcome to the Notifications API" });
})

//Create Notification URL
router.post("/create_notification", async (req, res) => {
    try {
      const {
        tripId,
        emergencyContactIdId,
        message,
        sentAt,
        status
      } = req.body;

      console.log({
        tripId,
        emergencyContactIdId,
        message,
        sentAt,
        status,
      });
      // Check if all fields are provided
      if (
        !tripId ||
        !emergencyContactIdId ||
        !message ||
        !sentAt ||
        !status 
      ) {
        return res.status(400).json({ message: "All fields are required." });
      }

      // Create and save the notification
      const newNotification = new Notification({
        tripId,
        emergencyContactIdId,
        message,
        sentAt,
        status,
      });
      await newNotification.save();

      res.status(201).json({ message: "Notification registered successfully!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error registering Notification.", error });
    }
})

//Get Single Notification Details URL
router.post("/get_notification/:id", async (req, res) => {
  try {
    const { id } = req.body;
    console.log({ id });

    // Find the user
    const notification = await Notification.findOne({ id });
    if (!notification) {
      return res.status(404).json({ message: "Notification not found." });
    }
    res.status(200).json({ message: "Notification Found!", notification });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error retrieving notification:", error });
  }
});

//Get Multiple Notification Details
router.get("/get_notifications", async (req, res) => {
  res.status(200).json({ message: "Notifications Fetched Successfully" });
});

//Update Single Notification Details
router.put("/update_notification/:id", async (req, res) => {
  res.status(200).json({ message: "Notification Details Updated Successfully!" });
});

//Delete Single Notification Details
router.delete("/delete_notification/:id", async (req, res) => {
  res.status(200).json({ message: "Notification Details Deleted Successfully!" });
});

export default router;