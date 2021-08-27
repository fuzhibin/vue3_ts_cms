export interface SystemStateType {
  usersList: any[];
  usersCount: number;
  roleList: any[];
  roleCount: number;
  menuList: any[];
  menuCount: number;
  goodsList: any[];
  goodsCount: number;
  departmentList: any[];
  departmentCount: number;
  categoryList: any[];
  categoryCount: number;
  storyList: any[];
  storyCount: number;
}
export enum DataListEnum {
  USER_LIST_URL = "/users/list",
  ROLE_LIST_URL = "/role/list",
  MENU_LIST_URL = "/menu/list",
  GOODS_LIST_URL = "/goods/list",
  DEPAERTMENT_LIST_URL = "/department/list",
  CATEGORY_LIST_URL = "/category/list",
  STORY_LIST_URL = "/story/list"
}
