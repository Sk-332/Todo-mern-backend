const express = require("express");
const router = express.Router();

const {
  createTask,
  getTasks,
  deleteTask,
  updateTask,
  updateTaskTitle
} = require("../controllers/taskController");

const authMiddleware = require("../middleware/authMiddleware");

// create task route
router.post("/", authMiddleware, createTask);

// get task route
router.get("/", authMiddleware, getTasks);

// delete task route
router.delete("/:id", authMiddleware, deleteTask);

// update task route
router.put("/:id", authMiddleware, updateTask);

// update task title route
router.put("/edit/:id", authMiddleware, updateTaskTitle);

module.exports = router;
