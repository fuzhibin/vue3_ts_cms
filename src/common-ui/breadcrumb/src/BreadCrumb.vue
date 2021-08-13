<template>
  <div class="bread-crumb">
    <el-breadcrumb separator="/">
      <template v-for="item in breadCrumbInfo" :key="item.name">
        <el-breadcrumb-item :to="{ path: item.path }">{{
          item.name
        }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { BreadCrumbItemType } from "../types/types";
export default defineComponent({
  name: "BreadCrumb",
  props: {
    breadCrumbInfo: {
      type: Array as PropType<BreadCrumbItemType[]>,
      default: () => []
    }
  },
  setup() {
    return {};
  }
});
</script>

<style lang="less" scoped></style>
