import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    name: "404page",
    component: () => import("../views/404.vue"),
  },
  {
    path: "/HomeView",
    name: "HomeView",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/",
    name: "Login",
    component: () => import("../views/login.vue"),
  },
  {
    path: "/personalCenter",
    name: "personalCenter",
    component: () => import("../views/personalCenter.vue"),
  },
  {
    path: "/modify",
    name: "modify",
    component: () => import("@/components/modify.vue"),
  },
  {
    path: "/demo",
    name: "demo",
    component: () => import("@/components/demo.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
