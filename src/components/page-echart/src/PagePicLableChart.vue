<template>
  <div class="page-pic-label-chart">
    <msi-echarts
      :options="option"
      :zoom="1.176471"
      :contentStyle="{ width: '800px', height: '420px' }"
    ></msi-echarts>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import MsiEcharts from "@/common-ui/msi-echarts";

export default defineComponent({
  name: "PagePicLableChart",
  props: {
    optionData: {
      type: Array,
      default: () => []
    }
  },
  components: { MsiEcharts },
  setup(props) {
    const option = computed(() => {
      return {
        title: {
          text: "销量前10的商品数量",
          left: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          bottom: 10,
          left: "center",
          textStyle: {
            fontSize: 15,
            width: 50,
            overflow: "truncate",
            ellipsis: "..."
          }
        },
        series: [
          {
            type: "pie",
            radius: "50%",
            center: ["50%", "40%"],
            selectedMode: "single",
            data: props.optionData,
            label: {
              fontSize: 15
            },
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

<style lang="less" scoped>
.page-pic-label-chart {
  display: flex;
  justify-content: center;
}
</style>
