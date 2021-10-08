import express from "express";

import { getUsers, signin, signup } from "../controllers/users.js";
import { verifyTokenAndAdmin } from "../middleware/verifyToken.js";

const router = express.Router();

router.post("/auth/signin", signin);
router.post("/auth/signup", signup);
router.get("/", verifyTokenAndAdmin, getUsers);

export default router;
