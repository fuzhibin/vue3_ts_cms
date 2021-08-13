<template>
  <div class="msi-tabel">
    <el-table :data="tableData" border style="width: 100%">
      <template v-for="title in propList" :key="title.prop">
        <el-table-column
          :label="title.label"
          align="center"
          :min-width="title.minWidth"
        >
          <template #default="scope">
            <slot :name="title.slotName" :row="scope.row">{{
              scope.row[title.prop]
            }}</slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { ITabeleTitle } from "../types/types";
export default defineComponent({
  name: "MsiTabel",
  props: {
    tableData: {
      type: Array,
      default: () => []
    },
    propList: {
      type: Array as PropType<ITabeleTitle[]>,
      default: () => []
    }
  },
  setup() {
    return {};
  }
});
</script>

<style lang="less" scoped></style>
