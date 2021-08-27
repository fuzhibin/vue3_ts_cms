<template>
  <div class="show-count">
    <el-row :gutter="10">
      <template v-for="item in goodsAmountList" :key="item.amount">
        <el-col :span="6">
          <div class="content">
            <div class="content-title">
              {{ item.title }}
              <el-tooltip
                class="item"
                effect="dark"
                :content="item.tips"
                placement="left"
              >
                <i class="el-icon-question"></i>
              </el-tooltip>
            </div>
            <div class="content-body">
              <countup
                :delay="delay"
                :endVal="item.number1"
                :options="options[item.amount]"
              ></countup>
            </div>
            <div class="content-footer">
              {{ item.subtitle
              }}<span
                ><countup
                  :delay="delay"
                  :endVal="item.number2"
                  :options="options[item.amount]"
                ></countup
              ></span>
            </div>
          </div>
        </el-col>
      </template>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "@/store";

import countup from "vue-countup-v2/src/countup.vue";
export default defineComponent({
  name: "ShowCount",
  props: {
    delay: {
      type: Number,
      default: 0
    },
    options: {
      type: Object,
      default: () => ({})
    }
  },
  components: { countup },
  setup(props) {
    console.log(props.options);

    const store = useStore();
    const goodsAmountList = computed(() => {
      return store.state.analysis.goodsAmountList;
    });
    console.log(props.options);
    return { goodsAmountList };
  }
});
</script>

<style lang="less" scoped>
.show-count {
  margin-bottom: 10px;
  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 14px 16px;
    background-color: #fff;
    .content-title {
      display: flex;
      justify-content: space-between;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      color: #576171;
    }
    .content-body {
      font-size: 25px;
      padding: 10px 0;
      font-weight: 600;
      border-bottom: 1px solid #ccc;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .content-footer {
      font-size: 15px;
      margin-top: 5px;
      font-weight: 700;
      color: #606266;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      span {
        margin-left: 8px;
      }
    }
  }
}
</style>
