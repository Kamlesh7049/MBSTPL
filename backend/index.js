const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

// Import routes
const UserRoute = require("./routes/userRoute");
const TaskRoute = require("./routes/taskRoute"); // New Task Route

// Load environment variables
require("dotenv").config();

const Port = process.env.PORT || 8000;

// Connect to MongoDB
mongoose
  .connect(process.env.DBCONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("DB connected!!!");
  })
  .catch((err) => {
    console.error("DB connection error:", err.message);
  });

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use("/users", UserRoute);
app.use("/tasks", TaskRoute); // Route for task-related operations

// Start the server
app.listen(Port, () => {
  console.log(`Server running on http://localhost:${Port}`);
});
