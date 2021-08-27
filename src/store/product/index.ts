import type { Module } from "vuex";
import { RootStateType } from "../types";
import { ProductStateType } from "./types";
const productModule: Module<ProductStateType, RootStateType> = {
  namespaced: true,
  state: () => {
    return {
      goodsList: [],
      goodsCount: 0
    };
  },
  getters: {},
  mutations: {},
  actions: {}
};

export default productModule;
