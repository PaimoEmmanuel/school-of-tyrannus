import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import getUser from "../utils/get-user";
import removeUser from "../utils/remove-user";

const conf: AxiosRequestConfig = {
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  withCredentials: true,
  timeout: 60000,
};

const requestinstance: AxiosInstance = axios.create(conf);

const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
  if (!config.headers) {
    config.headers = {};
  }
  config.headers["Authorization"] = `Bearer ${getUser().token}`;
  return config;
};

requestinstance.interceptors.request.use(onRequest);

// Redirect unauthorized requests to login
requestinstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response.status === 401) {
      // LOGOUT
      removeUser();
      window.location.href = "/signin";
    }
  }
);

export const request = requestinstance;
