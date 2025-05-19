import mongoose from "mongoose";

const tripSchema = new mongoose.Schema({
  riderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Rider", // Refers to the Rider collection
    required: true,
  },
  driverId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Driver", // Refers to the Driver collection
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  currentLocation: {
    type: String,
    required: true,
  },
  startTime: {
    type: Date,
    default: Date.now,
  },
  endTime: {
    type: Date,
  },
  emergencyContactId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "EmergencyContact", // Refers to the EmergencyContact collection
    required: true,
  },
  status: {
    type: String,
    enum: ["Pending", "In Progress", "Completed", "Cancelled"],
    default: "Pending",
  },
});

//Export the module
export default mongoose.model("Trip", tripSchema);
