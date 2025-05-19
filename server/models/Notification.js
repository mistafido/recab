import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema({
  tripId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Trip", // Refers to the Trip collection
    required: true,
  },
  emergencyContactId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "EmergencyContact", // Refers to the EmergencyContact collection
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  sentAt: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ["Sent", "Failed", "Pending"],
    default: "Pending",
  },
});

//Export the module
export default mongoose.model("Notification", notificationSchema);
