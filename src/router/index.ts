import { createRouter, createWebHashHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import localCache from "@/utils/cache";
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: "/main",
    component: () => import("@/views/main/Main.vue")
  },
  {
    path: "/login",
    component: () => import("@/views/login/Login.vue")
  }
];

const router = createRouter({
  routes,
  history: createWebHashHistory()
});
router.beforeEach((to, from) => {
  if (to.path !== "/login") {
    if (localCache.getCache("token")) {
      return;
    } else {
      return "/login";
    }
  }
});
export default router;
