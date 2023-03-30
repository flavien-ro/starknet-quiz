import mongoose from "mongoose";

const QuizzSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },
    title: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    questions: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

const Quizz = mongoose.model("Quizz", QuizzSchema);

export default Quizz;
