import express from "express";
import {
  addToCart,
  getCart,
  updateCartItem,
  removeCartItem,
  clearCart,
} from "../controllers/cartController.js";
import { authenticateUser } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Add item to cart
router.post("/add", authenticateUser, addToCart);

// Get user cart
router.get("/", authenticateUser, getCart);

// Update cart item quantity
router.put("/update/:id", authenticateUser, updateCartItem);

// Remove item from cart
router.delete("/remove/:id", authenticateUser, removeCartItem);

// Clear entire cart
router.delete("/clear", authenticateUser, clearCart);

export default router;

