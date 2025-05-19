import express from "express";
const router = express.Router();
import connectMongoDB from "../database.js";
import EmergencyContact from "../models/EmergencyContact.js";

//connect database
connectMongoDB.connectMongoDB();

//Base URL
router.get("/", (req, res) => {
    res.status(200).json({ message: "Welcome to the Emergency Contact API" });
})

//Create Single Emergency Contact URL
router.post("/create_emergency_contact", async (req, res) => {
    try {
      const { riderId, name, phoneNumber, relationship, email } = req.body;

      console.log({
        riderId,
        name,
        phoneNumber,
        relationship,
        email,
      });
      // Check if all fields are provided
      if (!riderId || !name || !phoneNumber || !relationship || !email ) {
        return res.status(400).json({ message: "All fields are required." });
      }

      // Create and save the trip
      const newEmergencyContact = new EmergencyContact({
        riderId,
        name,
        phoneNumber,
        relationship,
        email,
      });
      await newEmergencyContact.save();

      res.status(201).json({ message: "Emergency Contact registered successfully!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error registering emergency contact.", error });
    }
})

//Create Multiple Emergency Contacts URL
router.post("/create_emergency_contacts", async (req, res) => {
  try {

    const data = req.body;
    console.log(data)
    const insertedContacts = await EmergencyContact.insertMany(data)
    console.log(insertedContacts)
    res.status(201).json({ message: "Emergency Contacts have been created Successfully"})
  } catch (error) {
    console.error("Error adding emergency contact", error)
    res.status(500).json({error: "Internal server error"})
  }
    
})
//Get Single Emergency Contact Details
router.post("/get_emergency_contact/:id", async (req, res) => {
  try {
    const { id } = req.body;
    console.log({ id });

    // Find the user
    const emergencyContact = await EmergencyContact.findOne({ id });
    if (!emergencyContact) {
      return res.status(404).json({ message: "Emergency Contact not found." });
    }
    res
      .status(200)
      .json({ message: "Emergency Contact Found!", emergencyContact });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error retrieving emergency contact.", error });
  }
});

//Get Multiple Emergency Contacts Details
router.get("/get_emergency_contacts", async (req, res) => {
    res.status(200).json({ message: "Trips Fetched Successfully"})
})

//Update Single Emergency Contact Details
router.put("/update_emergency_contact/:id", async (req, res) => {
  res.status(200).json({ message: "Trip Details Updated Successfully!" });
});

//Delete Single Emergency Contact Details
router.delete("/delete_emergency_contact/:id", async (req, res) => {
  res.status(200).json({ message: "Trip Details Deleted Successfully!" });
});


export default router;