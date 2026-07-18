const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const testimonialRoutes = require("./routes/testimonialRoutes");


dotenv.config();

const enquiryRoutes = require("./routes/enquiryRoutes");
const projectRoutes = require("./routes/projectRoutes");
const connectDB = require("./Config/db");





const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/enquiry", enquiryRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/testimonials", testimonialRoutes);

// Test Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "BuildAbo Backend Running 🚀",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});