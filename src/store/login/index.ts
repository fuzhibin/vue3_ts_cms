import { Module } from "vuex";
import router from "@/router";

import {
  accountLoginRequest,
  userInfoRequest,
  userMenuRequest
} from "@/service/login";
import { AccountLoginType } from "@/service/login/types";
import localCache from "@/utils/cache";

import { RootStateType } from "../types";
import { LoginStateType } from "./types";

const loginModule: Module<LoginStateType, RootStateType> = {
  namespaced: true,
  state() {
    return {
      token: "",
      userInfo: {},
      userMenus: []
    };
  },
  getters: {},
  mutations: {
    changeToken(state, token: string) {
      state.token = token;
    },
    changeUserInfo(state, payload: any) {
      state.userInfo = payload;
    },
    changeUserMenus(state, payload: any) {
      state.userMenus = payload;
    }
  },
  actions: {
    async accountLoginAction(context, payload: AccountLoginType) {
      // 登陆信息
      const loginResult = await accountLoginRequest(payload);
      const { id, token } = loginResult.data;
      context.commit("changeToken", token);
      localCache.setCache("token", token);
      // 登陆后用户信息
      const userInfoResult = await userInfoRequest(id);
      context.commit("changeUserInfo", userInfoResult.data);
      localCache.setCache("userInfo", userInfoResult.data);
      //请求用户菜单
      const userMenuResult = await userMenuRequest(id);
      context.commit("changeUserMenus", userMenuResult.data);
      localCache.setCache("userMenus", userMenuResult.data);
      // 路由跳转
      router.push("/main");
    },
    uploadAction(context) {
      const token = localCache.getCache("token");
      if (token) {
        context.commit("changeToken", token);
      }
      const userInfo = localCache.getCache("userInfo");
      if (userInfo) {
        context.commit("changeUserInfo", userInfo);
      }
      const userMenus = localCache.getCache("userMenus");
      if (userMenus) {
        context.commit("changeUserMenus", userMenus);
      }
    }
  }
};

export default loginModule;
