import express from "express";
const router = express.Router();
import connectMongoDB from "../database.js";
import Driver from "../models/Driver.js";

//connect database
connectMongoDB.connectMongoDB();

//Base URL 
router.get("/", (req, res) => {
    res.status(200).json({ message: "Welcome to Driver URL"})
})

//Create Driver URL
router.post("/create_driver", async (req, res) => {
  try {
    const { driverName, phoneNumber, cabNumber, address } = req.body;

    console.log({ driverName, phoneNumber, cabNumber, address });
    // Check if all fields are provided
    if (!driverName || !phoneNumber || !cabNumber || !address) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Create and save the user
    const newDriver = new Driver({
      driverName,
      phoneNumber,
      cabNumber,
      address,
    });
    await newDriver.save();

    res.status(201).json({ message: "Driver registered successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error registering driver.", error });
  }
});

//Get Single Driver Details
// router.post("/get_driver/:id", async (req, res) => {
//   try {
//     const { id } = req.body;
//     console.log({ id });

//     // Find the user
//     const driver = await Driver.findOne({ id });
//     if (!driver) {
//       return res.status(404).json({ message: "Driver not found." });
//     }
//     res.status(200).json({ message: "Driver Found!", driver });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Error retrieving driver details.", error });
//   }
// });

router.post("/get_driver/:cabNumber", async (req, res) => {
  try {
    // const { cabNumber } = req.body;
    // console.log({ cabNumber });

    // Find the user
    // const driver = await Driver.findOne({ cabNumber });


    const { cabNumber } = req.params;
    console.log({ cabNumber })
    const driver = await Driver.findOne({ cabNumber })
    if (!driver) {
      return res.status(404).json({ message: "Driver not found." });
    }
    res.status(200).json({ message: "Driver Found!", driver });
    console.log(driver)
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error retrieving driver details.", error });
  }
})
//Get Multiple Drivers Details
router.get("/get_drivers", async (req, res) => {
    res.status(200).json({ message: "Drivers Fetched Successfully"})
})

//Update Single Driver Details
router.put("/update_driver/:id", async (req, res) => {
    res.status(200).json({ message: "Driver Details Updated Successfully!"})
})

//Delete Single Driver Details
router.delete("/delete_driver/:id", async (req, res) => {
    res.status(200).json({ message: "Driver Details Deleted Successfully!"})
})

export default router;
