import axios from "axios";
import NProgress from "nprogress";

export const service = axios.create({
  baseURL: "/api",
  timeout: 5000,
});

service.interceptors.request.use(
  (config) => {
    NProgress.start();

    config.headers = {
      Accept: "*/*",
      // "Content-Type": "application/json",
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
service.interceptors.response.use(
  (response) => {
    NProgress.done();
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
