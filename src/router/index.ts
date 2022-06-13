import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Store from "../store/index";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/Index/IndexView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login/LoginView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to) => {
  if (to.name == "login") return true;
  if (!Store.getters.user) return { name: "login" };
});

export default router;
