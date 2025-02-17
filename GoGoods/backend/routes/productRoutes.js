 
import express from "express";
import {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";
import { authenticateUser } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Create a new product (Admin only)
router.post("/", authenticateUser, createProduct);

// Get all products
router.get("/", getProducts);

// Get a single product by ID
router.get("/:id", getProductById);

// Update a product (Admin only)
router.put("/:id", authenticateUser, updateProduct);

// Delete a product (Admin only)
router.delete("/:id", authenticateUser, deleteProduct);

export default router;