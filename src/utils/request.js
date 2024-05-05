import axios from "axios";
import store from "@/store/index";
import router from "@/router";
import { Message } from "element-ui";

const request = axios.create({
  // baseURL: `http://192.168.1.28:8021/`, //测试
  // baseURL: `http://192.168.1.28:9381/`, //正式
  baseURL: process.env.VUE_APP_BASE_API,
});

// 请求
request.interceptors.request.use(
  function (config) {
    const token = store.state.user.token;
    if (token) {
      config.headers["Api-Auth"] = `${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// 响应
request.interceptors.response.use(
  (res) => {
    if (res.data.code < 0) {
      if (res.data.code === -14) {
        store.commit("user/clearMSG");
        router.push({ path: "/login" });
      } else {
        Message.error(res.data.msg);
      }
      throw new Error(res.data.msg);
    } else {
      return res;
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default request;
