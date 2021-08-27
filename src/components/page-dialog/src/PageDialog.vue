<template>
  <div class="page-dialog">
    <el-dialog
      title="数据"
      destroy-on-close
      v-model="centerDialogVisible"
      width="30%"
      center
    >
      <div class="dialog-content">
        <msi-form v-bind="pageDialogConfig" v-model="dialogInfo"></msi-form>
        <slot></slot>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="centerDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="submitBtnClic">确 定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";

import { useStore } from "@/store";
import MsiForm from "@/common-ui/msi-form";

export default defineComponent({
  name: "PageDialog",
  props: {
    pageDialogConfig: {
      type: Object,
      require: true
    },
    defaultValue: {
      type: Object,
      default: () => ({})
    },
    pageName: {
      type: String,
      require: true
    },
    otherInfo: {
      type: Object,
      default: () => ({})
    }
  },
  components: {
    MsiForm
  },
  setup(props) {
    // dialog弹窗
    const centerDialogVisible = ref(false);
    const dialogInfo = ref<any>({});
    watch(
      () => props.defaultValue,
      (newValue) => {
        for (const item of props.pageDialogConfig!.formItem) {
          dialogInfo.value[`${item.field}`] = newValue[`${item.field}`];
        }
      }
    );
    const store = useStore();
    const submitBtnClic = () => {
      centerDialogVisible.value = false;
      if (Object.keys(props.defaultValue).length === 0) {
        console.log({
          pageName: props.pageName,
          queryInfo: { ...dialogInfo.value, ...props.otherInfo }
        });

        store.dispatch("system/createPageDataAction", {
          pageName: props.pageName,
          queryInfo: { ...dialogInfo.value, ...props.otherInfo }
        });
      } else {
        store.dispatch("system/editorPageDataAction", {
          pageName: props.pageName,
          userId: props.defaultValue.id,
          queryInfo: { ...dialogInfo.value, ...props.otherInfo }
        });
      }
    };
    return { centerDialogVisible, dialogInfo, submitBtnClic };
  }
});
</script>

<style lang="less" scoped>
.dialog-content {
  transform: translateY(-20px);
}
</style>
