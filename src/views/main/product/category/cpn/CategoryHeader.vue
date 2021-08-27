<template>
  <div class="category-header">
    <el-collapse>
      <el-collapse-item title="销量前十" name="1">
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

<style lang="less" scoped></style>
