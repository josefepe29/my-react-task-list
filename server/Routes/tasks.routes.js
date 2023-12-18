const express = require("express");
const router = express.Router();
const {
  getTasks,
  getTasksById,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasks.controller.js");
const { validateCredentials } = require("../auth/authentication.js");

router.get("/tasks", validateCredentials, getTasks);

router.get("/tasks/:id", validateCredentials, getTasksById);

router.post("/tasks", validateCredentials, createTask);

router.put("/tasks/:id", validateCredentials, updateTask);

router.delete("/tasks/:id", validateCredentials, deleteTask);

module.exports = router;
