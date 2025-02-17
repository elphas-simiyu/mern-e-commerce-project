 
import express from "express";
import { initiateSTKPush, mpesaCallback } from "../controllers/mpesaController.js";
import { authenticateUser } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Initiate M-Pesa STK Push payment
router.post("/stk-push", authenticateUser, initiateSTKPush);

// Handle M-Pesa callback
router.post("/callback", mpesaCallback);

export default router;
