import { login } from "@/api/userInfo";
import { setToken } from "@/utils/auth";
export default {
  state: {
    userInfo: {},
    token: null,
  },
  mutations: {
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo;
    },
    setToken(state, token) {
      state.token = token;
      setToken(token);
    },
  },
  actions: {
    // 登录
    async handleLogin({ commit }, payload) {
      const res = await login(payload);
      commit("setUserInfo", res.data.data);
      commit("setToken", res.data.data.apiAuth);
    },

    // 获取用户相关信息
    getUserInfo() {},

    // 退出登录
    handleLogOut({ commit }) {
      commit("setToken", "");
      commit("setUserInfo", {});
    },
  },
};
