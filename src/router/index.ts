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
        meta: {
          keepAlive: true,
        },
        component: () => import("@/views/home/homeView.vue"),
      },
      {
        path: "datacenter/:id?",
        name: "datacenter",
        component: () => import("@/views/datacenter/datacenterView.vue"),
      },
      {
        path: "articles",
        name: "articles",
        component: () =>
          import("@/views/article/ArticleManage/ArticleManage.vue"),
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
      {
        path: "article/edit/:articleId?",
        name: "article_edit",
        component: () => import("@/views/article/ArticleEdit/ArticleEdit.vue"),
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
