<template>
  <div class="page-china-chart">
    <msi-echarts :options="option" :zoom="1.176471"></msi-echarts>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

import MsiEcharts from "@/common-ui/msi-echarts";
import mapCityToMap from "@/common-ui/msi-echarts/hooks/mapCityToMap";

export default defineComponent({
  name: "PageChinaChart",
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
        backgroundColor: "#fff",
        title: {
          text: "全国销量统计",
          left: "center",
          textStyle: {
            color: "#fff"
          }
        },
        tooltip: {
          trigger: "item"
        },
        visualMap: {
          min: 0,
          max: 60000,
          left: 20,
          bottom: 20,
          calculable: true,
          text: ["高", "低"],
          inRange: {
            color: [
              "rgb(70, 240, 252)",
              "rgb(250, 220, 46)",
              "rgb(245, 38, 186)"
            ]
          },
          textStyle: {
            color: "#000"
          }
        },
        geo: {
          map: "china",
          roam: "scale",
          emphasis: {
            areaColor: "#f4cccc",
            borderColor: "rgb(9, 54, 95)",
            itemStyle: {
              areaColor: "#f4cccc"
            }
          }
        },
        series: [
          {
            name: "销量",
            type: "scatter",
            coordinateSystem: "geo",
            data: mapCityToMap(props.optionData.dataList),
            symbolSize: 12,
            emphasis: {
              itemStyle: {
                borderColor: "#fff",
                borderWidth: 1
              }
            }
          },
          {
            type: "map",
            map: "china",
            geoIndex: 0,
            aspectScale: 1,
            tooltip: {
              show: false
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
