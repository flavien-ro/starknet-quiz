import axios from "axios";
import useSwr from "swr";
import { fetcher } from "./fetcher";

export const loginUser = async (address) => {
  try {
    const response = await axios.post("http://localhost:5001/auth/login", {
      address,
    });
    localStorage.setItem("accessToken", response.data.token);
  } catch (error) {
    return { error };
  }
};

export const getAddress = () => {
  const url = "http://localhost:5001/auth/getAddress";

  const { data, mutate, error, isLoading } = useSwr(url, fetcher);

  return {
    userAddress: data?.user?.address,
    mutateAddress: mutate,
    error: error,
    isLoading: isLoading,
  };
};
