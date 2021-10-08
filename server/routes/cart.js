import express from "express";
import {
  createCart,
  getAllCart,
  getUserCart,
  removeProductFromCart,
  updateCart,
} from "../controllers/cart.js";

import { verifyToken, verifyTokenAndAdmin } from "../middleware/verifyToken.js";

const router = express.Router();

router.post("/", verifyToken, createCart);
router.put("/:id", verifyToken, updateCart);
router.delete("/:id", verifyToken, removeProductFromCart);
router.get("/find/:userId", verifyToken, getUserCart);
router.get("/", verifyTokenAndAdmin, getAllCart);

export default router;
