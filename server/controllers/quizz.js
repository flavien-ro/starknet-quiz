import Quizz from "../models/Quizz.js";

export const getAllQuizz = async (req, res) => {
  try {
    const allQuizz = await Quizz.find();

    res.status(200).json({ allQuizz });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const createQuizz = async (req, res) => {
  try {
    const { title, description, questions } = req.body;
    const reqUser = req.user;

    const newQuizz = new Quizz({
      userId: reqUser.id,
      title: title,
      description: description,
      questions: questions,
    });

    const savedQuizz = await newQuizz.save();

    res.status(201).json(savedQuizz);
  } catch (error) {
    res.status(409).json({ msg: error.message });
  }
};

export const getMyQuizz = async (req, res) => {
  try {
    const reqUser = req.user;
    const quizz = await Quizz.find({ userId: reqUser.id });

    res.status(200).json({ quizz });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const deleteMyQuizz = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Quizz.deleteOne({ _id: id });

    if (result.deletedCount === 1) {
      res.status(200).json({ msg: "Quiz successfully deleted !" });
    } else {
      res.status(500).json({ msg: "An error occured !" });
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getQuiz = async (req, res) => {
  try {
    const { id } = req.params;

    const quizz = await Quizz.findOne({ _id: id });

    res.status(200).json({ quizz });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
