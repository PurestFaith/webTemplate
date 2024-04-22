import axios from "axios";

const request = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API,
  baseURL: "http://192.168.6.198:8000/",
});

// 请求
request.interceptors.request.use(
  function (config) {
    // const token = store.state.user.token;
    // if (token) {
    //   config.headers.Authorization = `${token}`;
    // }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// 响应
request.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default request;
