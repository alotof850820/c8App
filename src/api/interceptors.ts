import axios, { InternalAxiosRequestConfig } from "axios";

const https = axios.create({
  baseURL: "http://api.example.com", // Replace with your API base URL
});

https.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  return config;
});

https.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default https;
