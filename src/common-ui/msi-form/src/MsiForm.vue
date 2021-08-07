<template>
  <div class="msi-form">
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in formItem" :key="item.label">
          <el-col :="colLayout">
            <el-form-item :label="item.label" :style="itemStyle">
              <template v-if="item.type === 'input'">
                <el-input
                  :placeholder="item.placeholder"
                  v-bind="item.otherOptions"
              /></template>
              <template v-else-if="item.type === 'password'">
                <el-input
                  show-password
                  :placeholder="item.placeholder"
                  v-bind="item.otherOptions"
              /></template>
              <template v-else-if="item.type === 'select'">
                <el-select
                  v-bind="item.otherOptions"
                  :placeholder="
                    item.placeholder ? item.placeholder : '请选择..'
                  "
                >
                  <el-option
                    v-for="option in item.options"
                    :key="option.value"
                    :value="option.value"
                    >{{ option.title }}</el-option
                  >
                </el-select>
              </template>
              <template v-else-if="item.type === 'datapicker'">
                <el-date-picker v-bind="item.otherOptions"
              /></template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import type { IFormItemType } from "../types";

export default defineComponent({
  name: "index",
  props: {
    formItem: {
      type: Array as PropType<IFormItemType[]>,
      default: () => []
    },
    labelWidth: {
      type: String,
      default: "80px"
    },
    itemStyle: {
      type: Object,
      default: () => ({ padding: "10px 20px" })
    },
    colLayout: {
      type: Object,
      default: () => ({
        xs: 24,
        sm: 24,
        md: 12,
        lg: 8,
        xl: 6
      })
    }
  },
  setup() {
    return {};
  }
});
</script>

<style lang="less" scoped>
.msi-form {
  padding-top: 20px;
  width: 100%;
  background-color: #fff;
  border-radius: 10px;
}
</style>
