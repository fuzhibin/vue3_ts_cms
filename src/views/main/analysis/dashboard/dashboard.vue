<template>
  <div class="dashboard">
    <show-count :options="CountConfig"></show-count>
    <show-charts></show-charts>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "@/store";

import ShowCharts from "./cpn/ShowCharts.vue";
import ShowCount from "./cpn/ShowCount.vue";

import CountConfig from "./config/showCountConfig";
export default defineComponent({
  name: "dashboard",
  components: { ShowCharts, ShowCount },
  setup() {
    const store = useStore();
    store.dispatch("analysis/chartDataAction");

    return { CountConfig };
  }
});
</script>

<style lang="less" scoped></style>
