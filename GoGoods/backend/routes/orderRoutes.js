 
import express from "express";
import {
  createOrder,
  getOrders,
  getOrderById,
  updateOrderStatus,
  deleteOrder,
} from "../controllers/orderController.js";
import { authenticateUser } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Create a new order
router.post("/", authenticateUser, createOrder);

// Get all orders (Admin only)
router.get("/", authenticateUser, getOrders);

// Get a single order by ID
router.get("/:id", authenticateUser, getOrderById);

// Update order status (Admin only)
router.put("/:id", authenticateUser, updateOrderStatus);

// Delete an order (Admin only)
router.delete("/:id", authenticateUser, deleteOrder);

export default router;
