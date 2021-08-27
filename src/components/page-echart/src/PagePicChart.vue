<template>
  <div class="page-pic-chart">
    <msi-echarts :options="option" :zoom="1.176471"></msi-echarts>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

import MsiEcharts from "@/common-ui/msi-echarts";

export default defineComponent({
  name: "PagePicChart",
  props: {
    optionData: {
      type: Object,
      default: () => ({})
    }
  },
  components: { MsiEcharts },
  setup(props) {
    var option = computed(() => {
      return {
        title: {
          left: "center"
        },
        tooltip: {
          trigger: "item"
        },
        legend: {
          orient: "vertical",
          left: "left"
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "50%",
            data: props.optionData,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      };
    });
    return { option };
  }
});
</script>

<style lang="less" scoped></style>
