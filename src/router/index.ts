import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Store from "../store/index";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "index",
    component: () => import("../views/Index/IndexView.vue"),
    children: [
      {
        path: "",
        name: "home",
        component: () => import("@/views/home/homeView.vue"),
      },
      {
        path: "datacenter",
        name: "datacenter",
        component: () => import("@/views/datacenter/datacenterView.vue"),
      },
      {
        path: "article",
        name: "article",
        component: () => import("@/views/article/articleView.vue"),
      },
      {
        path: "col",
        name: "col",
        component: () => import("@/views/col/colView.vue"),
      },
      {
        path: "user",
        name: "user",
        component: () => import("@/views/user/userView.vue"),
      },
      {
        path: "self",
        name: "self",
        component: () => import("@/views/self/selfView.vue"),
      },
    ],
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
  const user = Store.getters.user;
  if (!user.token || !user.info?.name) return { name: "login" };
});

export default router;
