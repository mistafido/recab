import mongoose from "mongoose";

const emergencyContactSchema = new mongoose.Schema({
  riderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Rider", // Refers to the Rider collection
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  relationship: {
    type: String,
    enum: ["Family", "Friend", "Colleague", "Other"],
    required: true,
  },
  email: {
    type: String,
  },
});

//Export the module
export default mongoose.model("EmergencyContact", emergencyContactSchema);
