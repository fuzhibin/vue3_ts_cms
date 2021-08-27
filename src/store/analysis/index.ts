import { Module } from "vuex";
import type { AnalysisStateType } from "./types";
import type { RootStateType } from "../types";

import {
  getGoodsAddressSale,
  getGoodsCategoryCount,
  getGoodsCategoryFavor,
  getGoodsCategorySale,
  getGoodsAmountList,
  getGoodsSaleTop10
} from "@/service/main/analysis";
const analysisModule: Module<AnalysisStateType, RootStateType> = {
  namespaced: true,
  state() {
    return {
      goodsAddressSale: [],
      goodsCategoryCount: [],
      goodsCategoryFavor: [],
      goodsCategorySale: [],
      goodsAmountList: [],
      goodsSaleTop10: []
    };
  },
  getters: {},
  mutations: {
    changeGoodsCategoryCount(state, list: any[]) {
      state.goodsCategoryCount = list;
    },
    changeGoodsCategorySale(state, list: any[]) {
      state.goodsCategorySale = list;
    },
    changeGoodsCategoryFavor(state, list: any[]) {
      state.goodsCategoryFavor = list;
    },
    changeGoodsAddressSale(state, list: any[]) {
      state.goodsAddressSale = list;
    },
    changeGoodsAmountList(state, list: any[]) {
      state.goodsAmountList = list;
    },
    changeGoodsSaleTop10(state, list: any[]) {
      state.goodsSaleTop10 = list;
    }
  },
  actions: {
    async chartDataAction(context) {
      const goodsAmountListRes = await getGoodsAmountList();
      context.commit("changeGoodsAmountList", goodsAmountListRes.data);

      const goodsCateCountRes = await getGoodsCategoryCount();
      context.commit("changeGoodsCategoryCount", goodsCateCountRes.data);

      const goodsCateSaleRes = await getGoodsCategorySale();
      context.commit("changeGoodsCategorySale", goodsCateSaleRes.data);

      const goodsCateFavorRes = await getGoodsCategoryFavor();
      context.commit("changeGoodsCategoryFavor", goodsCateFavorRes.data);

      const goodsAddressSaleRes = await getGoodsAddressSale();
      context.commit("changeGoodsAddressSale", goodsAddressSaleRes.data);
    },
    async goodsSaleTop10Action(context) {
      const goodsSaleTop10Res = await getGoodsSaleTop10();
      context.commit("changeGoodsSaleTop10", goodsSaleTop10Res.data);
    }
  },
  modules: {}
};

export default analysisModule;
