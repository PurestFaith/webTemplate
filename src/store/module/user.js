import { login } from "@/api/userInfo";
import { setToken } from "@/utils/auth";
export default {
  namespaced: true,
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

    clearMSG(state) {
      state.userInfo = {};
      state.token = null;
      localStorage.clear();
    },
  },
  actions: {
    // 登录
    async handleLogin({ commit }, payload) {
      const res = await login(payload);
      if (res.data.code === 1) {
        commit("setUserInfo", res.data.data);
        commit("setToken", res.data.data.apiAuth);
      }
    },

    // 获取用户相关信息
    getUserInfo() {},

    // 退出登录
    handleLogOut({ commit }) {
      commit("setToken", "");
      commit("setUserInfo", {});
      commit("sx_system/setTreeData", [], { root: true });
    },
  },
};
