import { createStore, useStore as useVuexStore, Store } from "vuex";

import { RootStateType, RootWithModule } from "./types";
import loginModule from "./login";
import systemModule from "./system";
import productModule from "./product";
import analysisModule from "./analysis";

import { getDataList } from "@/service/main/system";
const store = createStore<RootStateType>({
  state() {
    return {
      departmentList: [],
      departmentCount: 0,
      roleList: [],
      roleCount: 0,
      menuList: []
    };
  },
  getters: {},
  mutations: {
    changeDepartmentList(state, payload: any[]) {
      state.departmentList = payload;
    },
    changeDepartmentCount(state, payload: number) {
      state.departmentCount = payload;
    },
    changeRoleList(state, payload: any[]) {
      state.roleList = payload;
    },
    changeRoleCount(state, payload: number) {
      state.roleCount = payload;
    },
    changeMenuList(state, payload: any[]) {
      state.menuList = payload;
    }
  },
  actions: {
    async getInitDataAction({ commit }) {
      const departmentResult = await getDataList("/department/list", {
        offset: 0,
        size: 120
      });
      const { list: departmentList, totalCount: departmentCount } =
        departmentResult.data;
      commit("changeDepartmentList", departmentList);
      commit("changeDepartmentCount", departmentCount);

      const roleResult = await getDataList("/role/list", {
        offset: 0,
        size: 120
      });
      const { list: roleList, totalCount: roleCount } = roleResult.data;
      commit("changeRoleList", roleList);
      commit("changeRoleCount", roleCount);

      const menuResult = await getDataList("/menu/list");
      const { list: menuList } = menuResult.data;
      commit("changeMenuList", menuList);
    }
  },
  modules: {
    login: loginModule,
    system: systemModule,
    product: productModule,
    analysis: analysisModule
  }
});

export function uploadCache() {
  store.dispatch("login/uploadAction");
}
export function useStore(): Store<RootWithModule> {
  return useVuexStore();
}

export default store;
