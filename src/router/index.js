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
    path: "/login",
    name: "login",
    component: () => import("../views/login.vue"),
  },
  {
    path: "/",
    name: "layout",
    component: () => import("../views/layout.vue"),
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
