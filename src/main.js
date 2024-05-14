import Vue from "vue";
import App from "./App.vue";
import router from "./router"; //跳转路由
import store from "./store"; //vuex
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "normalize.css/normalize.css"; // 清除浏览器默认样式
import components from "./components"; // 注册组件
import i18n from "./language/index"; //国际化
import "animate.css"; //动画
import "@/permission"; //全局路由守卫
import globalFullScreen from "@/utils/globalFullScreen"; //全屏方法
Vue.prototype.$globalFullScreen = globalFullScreen;

// 注册自定义指令
import * as directives from "@/directives/index";
Object.keys(directives).forEach((key) => {
  Vue.directive(key, directives[key]);
});
// 改变"en","zh"实现中英文切换
i18n.locale = "zh";

// import remjs from "./rem";

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(components);

new Vue({
  i18n,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
