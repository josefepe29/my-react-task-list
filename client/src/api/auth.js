import axios from "axios";

export const Axios = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true,
});

export const registerPost = (user) => {
  return Axios.post("/register", user);
};

export const loginPost = (user) => {
  return Axios.post("/login", user);
};

export const verifyToken = (token) => {
  return Axios.post("/verify", token);
};

export const logoutPost = () => {
  return Axios.post("/logout");
};
