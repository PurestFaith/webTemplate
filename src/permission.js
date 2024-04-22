import router from "./router/index";
import store from "./store";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
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
