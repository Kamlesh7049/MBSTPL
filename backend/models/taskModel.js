const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  dueDate: { type: String, required: true },
  priority: { type: String, required: true },
  status: { type: String, enum: ["pending", "finished"], default: "pending" }, // Added status field
});

module.exports = mongoose.model("Task", taskSchema);
