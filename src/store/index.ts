import { createStore, useStore as useVuexStore, Store } from "vuex";

import { RootStateType, RootWithModule } from "./types";
import loginModule from "./login";

import systemModule from "./system";

const store = createStore<RootStateType>({
  state() {
    return {
      name: "付志斌"
    };
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: { login: loginModule, system: systemModule }
});

export function uploadCache() {
  store.dispatch("login/uploadAction");
}
export function useStore(): Store<RootWithModule> {
  return useVuexStore();
}

export default store;
