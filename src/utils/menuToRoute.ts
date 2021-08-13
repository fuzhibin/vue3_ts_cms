import type { RouteRecordRaw } from "vue-router";
import { BreadCrumbItemType } from "@/common-ui/breadcrumb";

let firstMenu: any = null;
export default function (useMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = [];
  // 加入全部路由
  const allRoutes: RouteRecordRaw[] = [];
  const routeFiles = require.context("@/router/main", true, /\.ts$/);
  routeFiles.keys().forEach((filePath) => {
    const routeModule = require("@/router/main" + filePath.split(".")[1]);
    allRoutes.push(routeModule.default);
  });
  // 递归函数 获取可点击部分的url，并进行筛选
  function findRouteFun(useMenus: any[]) {
    for (const menu of useMenus) {
      if (menu.type === 1) {
        findRouteFun(menu.children);
      } else if (menu.type === 2) {
        const route = allRoutes.find((item) => item.path === menu.url);
        if (route) {
          if (!firstMenu) {
            firstMenu = menu;
          }
          routes.push(route);
        }
      }
    }
  }
  findRouteFun(useMenus);
  return routes;
}

export function pathMapToMenu(
  useMenus: any[],
  path: string,
  breadCrumbList?: BreadCrumbItemType[]
): any {
  for (const menu of useMenus) {
    if (menu.type === 1) {
      const findMenu = pathMapToMenu(menu.children ?? [], path);
      if (findMenu) {
        breadCrumbList?.push(menu);
        breadCrumbList?.push(findMenu);
        return findMenu;
      }
    } else if (menu.type === 2 && menu.url === path) {
      return menu;
    }
  }
}

export function breadCrumbMapToMenu(useMenus: any[], path: string) {
  const breadCrumbList: BreadCrumbItemType[] = [];
  pathMapToMenu(useMenus, path, breadCrumbList);
  return breadCrumbList;
}
export { firstMenu };
