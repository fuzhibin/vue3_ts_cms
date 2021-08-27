<template>
  <div class="category-header">
    <el-collapse class="category-box">
      <h3 class="category-title">销量前十</h3>
      <el-collapse-item name="1">
        <page-pic-lable-chart :optionData="chartsData" />
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { PagePicLableChart } from "@/components/page-echart";
export default defineComponent({
  name: "CategoryHeader",
  props: {
    chartsData: {
      type: Array,
      default: () => []
    }
  },
  components: { PagePicLableChart },
  setup() {
    return {};
  }
});
</script>

<style lang="less" scoped>
.category-box {
  position: relative;
  cursor: pointer;
  .category-title {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -5px);
    z-index: 10000;
  }
}
</style>
