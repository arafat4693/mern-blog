import axios from "axios"

const axiosInstance = axios.create({
  // baseURL: "http://localhost:5000",
  baseURL: "https://mern-blog-server.onrender.com",
  withCredentials: true,
})

export default axiosInstance
