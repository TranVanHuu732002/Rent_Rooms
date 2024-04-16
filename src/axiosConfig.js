import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});
// add a requets interceptor
instance.interceptors.request.use(
  function (config) {
    // Do something before requet is sent
    // Gan token vao Header
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
// add a response interceptor
instance.interceptors.response.use(
  function (response) {
    // refesh token
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;
