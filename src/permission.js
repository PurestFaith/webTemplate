import router from "./router/index";
import store from "./store";
import NProgress from "nprogress";
//全局进度条
import "nprogress/nprogress.css";
//白名单
const whiteList = ["/login", "/404"];

router.beforeEach(async (to, from, next) => {
  NProgress.start();
  if (store.state.user.token) {
    if (to.path === "/login") {
      next("/");
    } else {
      next();
    }
  } else {
    if (whiteList.includes(to.path)) {
      next();
    } else {
      next(`/login`);
    }
  }
  NProgress.done();
});
