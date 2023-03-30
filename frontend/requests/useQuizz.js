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
