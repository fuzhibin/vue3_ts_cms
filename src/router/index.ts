import { createRouter, createWebHashHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import localCache from "@/utils/cache";

import { firstMenu } from "@/utils/menuToRoute";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: "/main",
    name: "main",
    component: () => import("@/views/main/Main.vue")
  },
  {
    path: "/login",
    component: () => import("@/views/login/Login.vue")
  },
  {
    path: "/:pathMatch(.*)*",
    component: () => import("@/views/not-found/NotFound.vue")
  }
];

const router = createRouter({
  routes,
  history: createWebHashHistory()
});
router.beforeEach((to, from) => {
  if (to.path !== "/login") {
    if (!localCache.getCache("token")) {
      return "/login";
    }
  }
  if (to.path === "/main") {
    return firstMenu.url;
  }
});
export default router;
