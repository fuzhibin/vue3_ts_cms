<template>
  <div class="user">
    <page-search
      :formConfig="formConfigList"
      @searchKeyValue="searchBtnClic"
      @searchReset="resetBtnClic"
    ></page-search>
    <div class="user-tabel">
      <page-tabel
        :tabelConfig="tableConfigList"
        pageName="users"
        ref="pageTabelRef"
        @editorBtnClic="handleEditorBtnClic"
        @createBtnClic="handleCreateBtnClic"
      >
        <template v-slot:status="scope">
          <el-button
            :type="scope.row.status === 2 ? 'danger' : 'success'"
            size="small"
            plain
            >{{ scope.row.enabel === 2 ? "启用" : "停用" }}</el-button
          >
        </template>
      </page-tabel>
    </div>
    <page-dialog
      ref="pageDialogRef"
      pageName="users"
      :pageDialogConfig="dialogConfigRef"
      :defaultValue="defaultValue"
    >
    </page-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "@/store";

import PageSearch from "@/components/page-search";
import PageTabel from "@/components/page-tabel";
import PageDialog from "@/components/page-dialog";

import formConfigList from "./configs/form.config";
import tableConfigList from "./configs/tabel.config";
import dialogConfig from "./configs/dialog.config";

import { searchLinkage, operationLinkage } from "@/hooks/pageLinkage";
export default defineComponent({
  name: "user",
  components: {
    PageSearch,
    PageTabel,
    PageDialog
  },
  setup() {
    const store = useStore();
    // 搜索联动
    const [pageTabelRef, resetBtnClic, searchBtnClic] = searchLinkage();
    // 操作联动
    const formItem = dialogConfig.formItem.find((item) => {
      return item.field === "password";
    });
    const editorCallback = () => {
      formItem!.isHidden = true;
    };
    const createCallback = () => {
      formItem!.isHidden = false;
    };
    const [
      pageDialogRef,
      defaultValue,
      handleEditorBtnClic,
      handleCreateBtnClic
    ] = operationLinkage(editorCallback, createCallback);
    // 对配置文件进行操作

    const dialogConfigRef = computed(() => {
      const departmentItem = dialogConfig.formItem.find((item) => {
        return item.field === "departmentId";
      });
      const departmentList = store.state.departmentList.map((item) => {
        return {
          title: item.name,
          value: item.id
        };
      });
      const roleItem = dialogConfig.formItem.find((item) => {
        return item.field === "roleId";
      });
      const roleList = store.state.roleList.map((item) => {
        return {
          title: item.name,
          value: item.id
        };
      });
      departmentItem!.options = departmentList;
      roleItem!.options = roleList;
      return dialogConfig;
    });

    // 编辑 新建按钮的点击

    return {
      pageTabelRef,
      formConfigList,
      tableConfigList,
      searchBtnClic,
      resetBtnClic,
      dialogConfigRef,
      handleEditorBtnClic,
      handleCreateBtnClic,
      pageDialogRef,
      defaultValue
    };
  }
});
</script>

<style scoped lang="less">
.main {
  .user-tabel {
    margin-top: 20px;
    border-radius: 10px;
  }
}
</style>
