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
  function findRouteFun(useMenus: any[]): void {
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

export function breadCrumbMapToMenu(
  useMenus: any[],
  path: string
): BreadCrumbItemType[] {
  const breadCrumbList: BreadCrumbItemType[] = [];
  pathMapToMenu(useMenus, path, breadCrumbList);
  return breadCrumbList;
}

export function jurisdictionList(useMenus: any[]): any {
  const permissionList = [];
  for (const menu of useMenus) {
    if (menu.children) {
      const permission = jurisdictionList(menu.children);
      permissionList.push(...permission);
    } else {
      if (menu.permission) {
        permissionList.push(menu.permission);
      }
    }
  }
  return permissionList;
}

export function mapFirstMenuList(useMenus: any[]): {
  value: any;
  title: any;
}[] {
  const menuList = [];
  for (const menu of useMenus) {
    if (menu.type === 1) {
      menuList.push({
        value: menu.id,
        title: menu.name
      });
    }
  }
  menuList.push({
    value: "",
    title: "创建一级菜单"
  });
  return menuList;
}

export function mapHalfCheckedKeys(menuList: any[]): number[] {
  const keyList: number[] = [];
  const _recursionMapKeys = (menuList: any[]) => {
    for (const item of menuList) {
      if (item.children) {
        _recursionMapKeys(item.children);
      } else {
        keyList.push(item.id);
      }
    }
  };
  _recursionMapKeys(menuList);
  return keyList;
}
export { firstMenu };
