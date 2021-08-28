<template>
  <div class="goods">
    <page-tabel
      :tabelConfig="TabelConfig"
      pageName="goods"
      @createBtnClic="handleCreateBtnClic"
      @editorBtnClic="handleEditorBtnClic"
    >
      <template #imgUrl="scope">
        <el-image
          style="width: 65px; height: 65px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
        >
        </el-image>
      </template>
      <template v-slot:status="scope">
        <el-button
          :type="scope.row.status === 2 ? 'danger' : 'success'"
          size="small"
          plain
          >{{ scope.row.status === 2 ? "启用" : "停用" }}</el-button
        >
      </template>
    </page-tabel>
    <page-dialog
      :pageDialogConfig="DialogConfig"
      pageName="goods"
      ref="pageDialogRef"
      :defaultValue="defaultValue"
    ></page-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import PageTabel from "@/components/page-tabel";
import PageDialog from "@/components/page-dialog";

import TabelConfig from "./configs/tabel.config";
import DialogConfig from "./configs/dialog.config";

import { operationLinkage } from "@/hooks/pageLinkage";
export default defineComponent({
  name: "goods",
  components: { PageTabel, PageDialog },
  setup() {
    const [
      pageDialogRef,
      defaultValue,
      handleEditorBtnClic,
      handleCreateBtnClic
    ] = operationLinkage();
    return {
      TabelConfig,
      DialogConfig,
      pageDialogRef,
      defaultValue,
      handleEditorBtnClic,
      handleCreateBtnClic
    };
  }
});
</script>

<style scoped lang="less"></style>
