<template>
  <div class="msi-form">
    <div class="title">
      <slot name="title"></slot>
    </div>
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in formItem" :key="item.label">
          <el-col :="colLayout" v-if="!item.isHidden">
            <el-form-item :label="item.label" :style="itemStyle">
              <template v-if="item.type === 'input'">
                <el-input
                  :placeholder="item.placeholder"
                  :rules="item.rules"
                  v-model="formData[item.field]"
                  v-bind="item.otherOptions"
              /></template>
              <template v-else-if="item.type === 'password'">
                <el-input
                  show-password
                  :rules="item.rules"
                  :placeholder="item.placeholder"
                  v-model="formData[item.field]"
                  v-bind="item.otherOptions"
              /></template>
              <template v-else-if="item.type === 'select'">
                <el-select
                  :placeholder="
                    item.placeholder ? item.placeholder : '请选择..'
                  "
                  style="width: 100%"
                  v-bind="item.otherOptions"
                  :rules="item.rules"
                  v-model="formData[item.field]"
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
                <el-date-picker
                  v-bind="item.otherOptions"
                  style="width: 100%"
                  v-model="formData[item.field]"
                  :rules="item.rules"
                />
              </template>
              <template v-else-if="item.type === 'upload'">
                <msi-upload v-model="formData[item.field]"></msi-upload>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, watch } from "vue";
import type { IFormItemType } from "../types/types";

import MsiUpload from "@/common-ui/msi-upload";

export default defineComponent({
  name: "MsiForm",
  emits: ["update:modelValue"],
  components: { MsiUpload },
  props: {
    modelValue: {
      type: Object,
      default: () => ({})
    },
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
  setup(props, { emit }) {
    const formData = ref({ ...props.modelValue });

    watch(
      formData,
      (newValue) => {
        emit("update:modelValue", newValue);
      },
      { deep: true }
    );
    return { formData };
  }
});
</script>

<style lang="less" scoped>
.msi-form {
  padding-top: 20px;
  padding-bottom: 20px;
  width: 100%;
  background-color: #fff;
  border-radius: 10px;
  .title {
    text-align: center;
    margin-top: 0;
    margin-bottom: 10px;
  }
  .footer {
    margin-right: 100px;
    text-align: right;
  }
  .upload-box {
    display: flex;
    button {
      text-align: center;
      width: 100px;
    }
  }
}
</style>
