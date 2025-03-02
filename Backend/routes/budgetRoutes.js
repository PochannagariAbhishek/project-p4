const express = require("express");
const router = express.Router();
const {
  getBudgets,
  createBudget,
  updateBudget,
  deleteBudget,
} = require("../controllers/budgetController");
const authMiddleware = require("../middlewares/authMiddleware");

// Get all budgets for the authenticated user
router.get("/", authMiddleware, getBudgets);

// Create a new budget
router.post("/", authMiddleware, createBudget);

// Update a budget by ID
router.put("/:id", authMiddleware, updateBudget);

// Delete a budget by ID
router.delete("/:id", authMiddleware, deleteBudget);

module.exports = router;
