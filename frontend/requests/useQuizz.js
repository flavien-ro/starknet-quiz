import axios from "axios";
import useSwr from "swr";
import { fetcher } from "./fetcher";

export const createQuizz = async (title, description, questions) => {
  try {
    const response = await axios.post(
      process.env.API_NODE_URL + "quizz/create-quizz",
      { title: title, description: description, questions: questions },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    return { error };
  }
};

export const getAllQuizz = () => {
  const url = process.env.API_NODE_URL + "quizz/get-all-quizz";

  const { data, mutate, error, isLoading } = useSwr(url, fetcher);

  return {
    data: data?.allQuizz,
    mutateQuizz: mutate,
    error: error,
    isLoading: isLoading,
  };
};

export const getMyQuizzes = () => {
  const url = process.env.API_NODE_URL + "quizz/get-my-quizz";

  const { data, mutate, error, isLoading } = useSwr(url, fetcher);

  return {
    data: data?.quizz,
    mutateMyQuizz: mutate,
    isLoading: isLoading,
  };
};

export const deleteQuiz = async (id) => {
  try {
    const response = await axios.delete(
      process.env.API_NODE_URL + "quizz/delete-quizz/" + id,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    return { error };
  }
};

export const getQuiz = (id) => {
  const url = process.env.API_NODE_URL + "quizz/" + id;

  const { data, mutate, error, isLoading } = useSwr(url, fetcher);

  return {
    data: data?.quizz,
    mutate: mutate,
    isLoading: isLoading,
    error: error,
  };
};
