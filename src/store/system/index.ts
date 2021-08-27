import { Module } from "vuex";
import { RootStateType } from "../types";
import { SystemStateType, DataListEnum } from "./types";

import {
  getDataList,
  deleteDataList,
  editorPageData,
  createPageData
} from "@/service/main/system";
import { firstCapitalLetter } from "@/utils/handleString";
const systemModule: Module<SystemStateType, RootStateType> = {
  namespaced: true,
  state: () => ({
    usersList: [],
    usersCount: 0,
    roleList: [],
    roleCount: 0,
    menuList: [],
    menuCount: 0,
    goodsList: [],
    goodsCount: 0,
    departmentList: [],
    departmentCount: 0,
    categoryList: [],
    categoryCount: 0,
    storyList: [],
    storyCount: 0
  }),
  getters: {
    getDataCount(state) {
      return function (pageName: string) {
        return (state as any)[`${pageName}Count`];
      };
    }
  },
  mutations: {
    changeUsersList(state, payload) {
      state.usersList = payload;
    },
    changeUsersCount(state, payload: number) {
      state.usersCount = payload;
    },
    changeRoleList(state, payload) {
      state.roleList = payload;
    },
    changeRoleCount(state, payload: number) {
      state.roleCount = payload;
    },
    changeMenuList(state, payload) {
      state.menuList = payload;
    },
    changeMenuCount(state, payload: number) {
      state.menuCount = payload;
    },
    changeGoodsList(state, payload) {
      state.goodsList = payload;
    },
    changeGoodsCount(state, payload: number) {
      state.goodsCount = payload;
    },
    changeDepartmentList(state, payload) {
      state.departmentList = payload;
    },
    changeDepartmentCount(state, payload: number) {
      state.departmentCount = payload;
    },
    changeCategoryList(state, list: any[]) {
      state.categoryList = list;
    },
    changeCategoryCount(state, payload: number) {
      state.categoryCount = payload;
    },
    changeStoryList(state, list: any[]) {
      state.storyList = list;
    },
    changeStoryCount(state, count: number) {
      state.storyCount = count;
    }
  },
  actions: {
    async dataListAction({ commit }, payload) {
      let dataUrl = "";
      switch (payload.pageName) {
        case "users":
          dataUrl = DataListEnum.USER_LIST_URL;
          break;
        case "role":
          dataUrl = DataListEnum.ROLE_LIST_URL;
          break;
        case "menu":
          dataUrl = DataListEnum.MENU_LIST_URL;
          break;
        case "goods":
          dataUrl = DataListEnum.GOODS_LIST_URL;
          break;
        case "department":
          dataUrl = DataListEnum.DEPAERTMENT_LIST_URL;
          break;
        case "category":
          dataUrl = DataListEnum.CATEGORY_LIST_URL;
          break;
        case "story":
          dataUrl = DataListEnum.STORY_LIST_URL;
          break;
      }

      const result = await getDataList(dataUrl, payload.queryInfo);

      const pageName = firstCapitalLetter(payload.pageName);

      commit(`change${pageName}List`, result.data.list);
      commit(`change${pageName}Count`, result.data.totalCount);
    },
    async deleteDataAction(context, payload) {
      const { pageName, id } = payload;
      const url = `/${pageName}/${id}`;
      await deleteDataList(url);
      context.dispatch("dataListAction", {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      });
    },
    async editorPageDataAction(context, payload: any) {
      const { pageName, userId, queryInfo } = payload;
      const url = `/${pageName}/${userId}`;
      console.log(payload);
      await editorPageData(url, queryInfo);
      context.dispatch("dataListAction", {
        pageName,
        offset: 0,
        size: 10
      });
    },
    async createPageDataAction(context, payload: any) {
      const { pageName, queryInfo } = payload;
      const url = `/${pageName}`;
      await createPageData(url, queryInfo);
      context.dispatch("dataListAction", {
        pageName,
        offset: 0,
        size: 10
      });
    }
  }
};
export default systemModule;
