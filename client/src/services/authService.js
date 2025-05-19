import axiosInstance from "../utils/axios";

export const loginUser = async (userData) => {
  try {
    const response = await axiosInstance.post("api/users/login", userData);
    return response.data;
  } catch (error) {
    throw error.response?.data || "Login failed";
  }
};

export const registerUser = async (userData) => {
  try {
    const response = await axiosInstance.post("api/users/register", userData);
    return response.data; //Return the data from the API response
  } catch (error) {
    throw error.response?.data || "Registration failed"; //Handle error
  }
};
