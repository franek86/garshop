import axios from "axios";

const baseUrl = process.env.REACT_APP_BACKEND_URL;

const axiosInstance = axios.create({
  baseURL: baseUrl,
});

export default axiosInstance;
