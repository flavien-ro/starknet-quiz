import express from "express";
import {
  createQuizz,
  getAllQuizz,
  getMyQuizz,
  deleteMyQuizz,
  getQuiz,
} from "../controllers/quizz.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.post("/create-quizz", verifyToken, createQuizz);
router.get("/get-all-quizz", verifyToken, getAllQuizz);
router.get("/get-my-quizz", verifyToken, getMyQuizz);
router.get("/:id", verifyToken, getQuiz);
router.delete("/delete-quizz/:id", verifyToken, deleteMyQuizz);

export default router;
