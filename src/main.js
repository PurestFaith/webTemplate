import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "normalize.css/normalize.css"; // A modern alternative to CSS resets
import components from "./components"; // 注册组件
import i18n from "./language/index"; //国际化

import * as directives from "@/directives/index";
Object.keys(directives).forEach((key) => {
  Vue.directive(key, directives[key]);
});

i18n.locale = "zh";
Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.use(components);

new Vue({
  i18n,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
