import { Module } from "vuex";
import { RootStateType } from "../types";
import { SystemStateType } from "./types";

import { getUsersList } from "@/service/main/system";
const systemModule: Module<SystemStateType, RootStateType> = {
  namespaced: true,
  state: () => ({
    userList: [],
    totalCount: 0
  }),
  getters: {},
  mutations: {
    changeUserList(state, payload) {
      state.userList = payload;
    },
    changeTotalCount(state, payload: number) {
      state.totalCount = payload;
    }
  },
  actions: {
    async userListAction({ commit }, payload) {
      const result = await getUsersList(payload.url, payload.queryInfo);
      console.log(result);

      commit("changeTotalCount", result.data.totalCount);
      commit("changeUserList", result.data.list);
    }
  }
};
export default systemModule;
