import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

// new path 最好定义为统一字符串，方便跳转传参数用
const routes = [
  {
    path: "/",
    name: "/",
    component: Home,
  },
  {
    path: "/news",
    name: "/news",
    component: () => import("../views/News.vue"),
  },
  {
    path: "/video",
    name: "/video",
    component: () => import("../views/Video.vue"),
  },
  {
    path: "/member",
    name: "/member",
    component: () => import("../views/Member.vue"),
  },
  {
    path: "/about",
    name: "/about",
    component: () => import("../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
