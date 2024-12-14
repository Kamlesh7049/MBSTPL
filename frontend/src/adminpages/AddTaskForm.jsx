import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
const AddTaskForm = ({ onTaskAdded }) => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    dueDate: "",
    priority: "Low",
  });
// const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post("http://localhost:8000/tasks/addtask", task);
      // onTaskAdded(response.data); 
      if (response.status === 201) {
        toast.success("Task added successfully!");
        setTask({
          title: "",
          description: "",
          dueDate: "",
          priority: "Low",
        });
        // navigate("/dashboard/adminhome");
      }
    } catch (err) {
      setError("Failed to add task. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: "400px",
        margin: "auto",
        backgroundColor: "#f9f9f9",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <ToastContainer />
      <h4 style={{ textAlign: "center", marginBottom: "1rem", color: "#333" }}>
        Add New Task
      </h4>
      {error && (
        <div
          style={{
            color: "red",
            marginBottom: "1rem",
            textAlign: "center",
          }}
        >
          {error}
        </div>
      )}
      <div style={{ marginBottom: "1rem" }}>
        <label style={{ display: "block", marginBottom: "0.5rem" }}>Title:</label>
        <input
          type="text"
          name="title"
          value={task.title}
          onChange={handleChange}
          required
          placeholder="Enter task title"
          style={{
            width: "100%",
            padding: "0.5rem",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
      </div>
      <div style={{ marginBottom: "1rem" }}>
        <label style={{ display: "block", marginBottom: "0.5rem" }}>Description:</label>
        <textarea
          name="description"
          value={task.description}
          onChange={handleChange}
          required
          placeholder="Enter task description"
          style={{
            width: "100%",
            padding: "0.5rem",
            borderRadius: "4px",
            border: "1px solid #ccc",
            resize: "vertical",
          }}
        />
      </div>
      <div style={{ marginBottom: "1rem" }}>
        <label style={{ display: "block", marginBottom: "0.5rem" }}>Due Date:</label>
        <input
          type="date"
          name="dueDate"
          value={task.dueDate}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: "0.5rem",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
      </div>
      <div style={{ marginBottom: "1rem" }}>
        <label style={{ display: "block", marginBottom: "0.5rem" }}>Priority:</label>
        <select
          name="priority"
          value={task.priority}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: "0.5rem",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>
      <button
        type="submit"
        disabled={loading}
        style={{
          display: "block",
          width: "100%",
          padding: "0.75rem",
          borderRadius: "4px",
          border: "none",
          backgroundColor: "#007bff",
          color: "white",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        {loading ? "Adding..." : "Add Task"}
      </button>
    </form>
  );
};

export default AddTaskForm;
