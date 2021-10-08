import express from "express";
import {
  createOrder,
  deleteOrder,
  getAllOrders,
  getUserOrder,
  updateOrder,
} from "../controllers/order.js";
import { verifyToken, verifyTokenAndAdmin } from "../middleware/verifyToken.js";

const router = express.Router();

router.post("/", verifyToken, createOrder);
router.put("/:id", verifyTokenAndAdmin, updateOrder);
router.delete("/:id", verifyTokenAndAdmin, deleteOrder);
router.get("/find/:userId", verifyTokenAndAdmin, getUserOrder);
router.get("/", verifyTokenAndAdmin, getAllOrders);

export default router;
