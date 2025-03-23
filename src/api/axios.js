import axios from "axios";

var BASE_URL = "http://localhost:3500";

if (process.env.REACT_APP_BACKEND) {
  BASE_URL = process.env.REACT_APP_BACKEND;
}

export default axios.create({
  baseURL: BASE_URL,
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});
