const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");

// Get all tasks
router.get("/showAll", taskController.getAllTasks);

// Get a specific task by ID
router.get("/:id", taskController.getTaskById);

// Add a new task
router.post("/addtask", taskController.createTask);

// Update a task by ID
router.put("/update/:id", taskController.updateTask);

// Delete a task by ID
router.delete("/delete/:id", taskController.deleteTask);

// Update the status of a task by ID
// Update the status of a task by ID
router.patch("/updateStatus/:id", taskController.updateTaskStatus);


module.exports = router;
