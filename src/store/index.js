import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters";
import user from "./module/user";
import createPersistedstate from "vuex-persistedstate";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
  },
  plugins: [
    createPersistedstate({
      key: "supplier", // 存数据的自定义key名
      paths: ["user"], // 要把那些模块加入缓存 假设不加需要缓存的模快，则缓存全部的模块数据
    }),
  ],
  getters,
});
