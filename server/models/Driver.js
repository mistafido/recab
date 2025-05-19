import mongoose from "mongoose";

//Define the driver Schema
const driverSchema = new mongoose.Schema(
  {
    driverName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
      unique: true,
      length: 11,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please provide a valid email address"],
    },
    cabNumber: {
      type: String,
      required: true,
      unique: true,
    },
    address: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
  },
  { timestamps: true }
);

//Export the module 
export default mongoose.model("Driver", driverSchema)