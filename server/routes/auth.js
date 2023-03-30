import express from "express";
import { login, getAddress } from "../controllers/auth.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.post("/login", login);
router.get("/getAddress", verifyToken, getAddress);

export default router;
