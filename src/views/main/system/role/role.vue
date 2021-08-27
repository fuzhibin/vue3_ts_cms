<template>
  <div class="role">
    <page-search
      :formConfig="FormConfig"
      @searchKeyValue="searchBtnClic"
      @searchReset="resetBtnClic"
    />
    <div class="page-role">
      <page-tabel
        pageName="role"
        :tabelConfig="TabelConfig"
        @editorBtnClic="handleEditorBtnClic"
        @createBtnClic="handleCreateBtnClic"
        ref="pageTabelRef"
      />
    </div>
    <page-dialog
      :pageDialogConfig="DialogConfig"
      ref="pageDialogRef"
      pageName="role"
      :defaultValue="defaultValue"
      :otherInfo="checkedList"
    >
      <el-tree
        style="padding: 0px 20px"
        :data="entireMenuList"
        show-checkbox
        node-key="id"
        ref="treeRef"
        @check="checkBoxChange"
        highlight-current
        :props="{ label: 'name', children: 'children' }"
      >
      </el-tree>
    </page-dialog>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, nextTick } from "vue";
import { useStore } from "@/store";

import ElTree from "element-plus/lib/el-tree";
import PageSearch from "@/components/page-search";
import PageTabel from "@/components/page-tabel";
import PageDialog from "@/components/page-dialog";

import FormConfig from "./config/form.config";
import TabelConfig from "./config/tabel.config";
import DialogConfig from "./config/dialog.config";

import { searchLinkage, operationLinkage } from "@/hooks/pageLinkage";
import { mapHalfCheckedKeys } from "@/utils/menuToRoute";
export default defineComponent({
  name: "role",
  components: {
    PageSearch,
    PageTabel,
    PageDialog
  },
  setup() {
    const [pageTabelRef, resetBtnClic, searchBtnClic] = searchLinkage();

    // 本身是响应式，但是赋值之后，就不在是响应式的范畴了
    const store = useStore();
    const entireMenuList = computed(() => store.state.menuList);

    const checkedList = ref({});
    const checkBoxChange = (data1: any, data2: any) => {
      const { checkedKeys, halfCheckedKeys } = data2;
      const menuList = [...checkedKeys, ...halfCheckedKeys];
      checkedList.value = { menuList };
    };
    const treeRef = ref<InstanceType<typeof ElTree>>();
    const editorCallback = (payload: any) => {
      const menuList = mapHalfCheckedKeys(payload.menuList);

      nextTick(() => {
        treeRef.value!.setCheckedKeys(menuList, false);
      });
    };
    const [
      pageDialogRef,
      defaultValue,
      handleEditorBtnClic,
      handleCreateBtnClic
    ] = operationLinkage(editorCallback);
    return {
      FormConfig,
      TabelConfig,
      searchBtnClic,
      resetBtnClic,
      pageTabelRef,
      DialogConfig,
      pageDialogRef,
      defaultValue,
      handleEditorBtnClic,
      handleCreateBtnClic,
      entireMenuList,
      treeRef,
      checkedList,
      checkBoxChange
    };
  }
});
</script>

<style scoped lang="less">
.role {
  .page-role {
    background-color: #fff;
    padding: 20px;
    margin-top: 20px;
    border-radius: 10px;
  }
}
</style>
