<template>
  <div class="msi-tabel">
    <div class="header">
      <slot name="title">
        <div class="title">
          <h2>{{ title }}</h2>
        </div>
        <div class="operation">
          <slot name="headerHandler"></slot>
        </div>
      </slot>
    </div>
    <el-table
      :data="tableData"
      border
      style="width: 100%"
      :="childrenProps"
      @selection-change="handleSelectionChange"
    >
      <el-table-column
        label="序号"
        align="center"
        width="60"
        type="index"
        v-if="showTabelIndex"
      />
      <el-table-column
        type="selection"
        width="55"
        align="center"
        v-if="showTabelSelect"
      />
      <template v-for="title in propList" :key="title.prop">
        <el-table-column
          :label="title.label"
          align="center"
          show-overflow-tooltip
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
    <div class="footer" v-if="showPagination">
      <slot name="footer">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="page.currentPage"
          :page-sizes="[10, 20, 30]"
          :page-size="page.pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="dataCount"
        >
        </el-pagination>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { ITabelTitle } from "../types/types";
export default defineComponent({
  name: "MsiTabel",
  props: {
    title: {
      type: String,
      default: ""
    },
    tableData: {
      type: Array,
      default: () => []
    },
    dataCount: {
      type: Number,
      default: 0
    },
    propList: {
      type: Array as PropType<ITabelTitle[]>,
      default: () => []
    },
    showTabelIndex: {
      type: Boolean,
      default: false
    },
    showTabelSelect: {
      type: Boolean,
      default: false
    },
    page: {
      type: Object,
      default: () => ({})
    },
    showPagination: {
      type: Boolean,
      default: true
    },
    childrenProps: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:page", "handleMultipleChoice"],
  setup(props, { emit }) {
    // 判断是否全部选中
    const handleSelectionChange = (value: any) => {
      emit("handleMultipleChoice", value);
    };
    const handleSizeChange = (val: number) => {
      emit("update:page", { ...props.page, pageSize: val });
    };
    const handleCurrentChange = (val: number) => {
      emit("update:page", { ...props.page, currentPage: val });
    };
    return { handleSelectionChange, handleSizeChange, handleCurrentChange };
  }
});
</script>

<style lang="less" scoped>
.msi-tabel {
  background-color: #fff;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }
  .footer {
    margin-top: 20px;
    text-align: center;
  }
}
</style>
