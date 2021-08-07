import type { RouteRecordRaw } from "vue-router";
export default function (useMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = [];
  // 加入全部路由
  const allRoutes: RouteRecordRaw[] = [];
  const routeFiles = require.context("@/router/main", true, /\.ts$/);
  routeFiles.keys().forEach((filePath) => {
    const routeModule = require("@/router/main" + filePath.split(".")[1]);
    allRoutes.push(routeModule.default);
  });
  console.log(useMenus);
  // 递归函数 获取可点击部分的url，并进行筛选
  function findRouteFun(useMenus: any[]) {
    for (const menu of useMenus) {
      if (menu.type === 1) {
        findRouteFun(menu.children);
      } else if (menu.type === 2) {
        const route = allRoutes.find((item) => item.path === menu.url);
        if (route) {
          routes.push(route);
        }
      }
    }
  }
  findRouteFun(useMenus);
  console.log(routes);

  return routes;
}
