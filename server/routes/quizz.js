import express from "express";
import { createQuizz, getAllQuizz } from "../controllers/quizz.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.post("/create-quizz", verifyToken, createQuizz);
router.get("/get-all-quizz", verifyToken, getAllQuizz);

export default router;
