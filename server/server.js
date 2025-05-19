import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// Initialize dotenv
dotenv.config();


const app = express();
app.use(cors());
app.use(express.json());


// Custom middleware
app.use((req, res, next) => {
  console.log(
    `[${new Date().toISOString()}] ${req.method} request to ${req.url}`
  );
  next();
});

// Import and use routes
import userRoutes from "./routes/userRoutes.js "
import riderRoutes from "./routes/riderRoutes.js"
import driverRoutes from "./routes/driverRoutes.js"
import tripRoutes from "./routes/tripRoutes.js"
import emergencyContactRoutes from "./routes/emergencyContactRoutes.js"
import notificationRoutes from "./routes/notificationRoutes.js"

app.get("/api", (req, res) => {
  res.status(200).json({ message: "Welcome to the API" });
});

app.use("/api/users", userRoutes);
app.use("/api/riders", riderRoutes);
app.use("/api/drivers", driverRoutes);
app.use("/api/trips", tripRoutes);
app.use("/api/emergencyContacts", emergencyContactRoutes);
app.use("/api/notifications", notificationRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.group(`Server is runnng on port ${PORT}`));
