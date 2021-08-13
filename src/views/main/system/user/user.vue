<template>
  <div class="user">
    <msi-form :="formInfo" v-model="formValue" />
    <div class="user-tabel">
      <msi-tabel :propList="propList" :tableData="dataList">
        <template v-slot:status="scope">
          <el-button type="info">{{
            scope.row.enabel === 1 ? "启用" : "停用"
          }}</el-button>
        </template>
        <template #createAt="scope">
          <b>{{ scope.row.createAt }}</b>
        </template>
        <template #updateAt="scope">
          <b>{{ scope.row.updateAt }}</b>
        </template>
      </msi-tabel>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { useStore } from "@/store";

import MsiForm from "@/common-ui/msi-form";
import MsiTabel from "@/common-ui/msi-tabel";

import formInfo from "./configs/form.config";
export default defineComponent({
  name: "user",
  components: {
    MsiForm,
    MsiTabel
  },
  setup() {
    const formValue = ref({
      id: "",
      name: "",
      realName: "",
      roles: "",
      createTime: ""
    });
    const store = useStore();
    store.dispatch("system/userListAction", {
      url: "/users/list",
      queryInfo: {
        offset: 0,
        size: 100
      }
    });
    const propList = [
      { prop: "name", label: "用户名", minWidth: "100" },
      { prop: "realname", label: "真实性名", minWidth: "100" },
      { prop: "cellphone", label: "手机号码", minWidth: "100" },
      { prop: "enable", label: "状态", minWidth: "100", slotName: "status" },
      {
        prop: "createAt",
        label: "创建时间",
        minWidth: "250",
        slotName: "createAt"
      },
      {
        prop: "updateAt",
        label: "更新时间",
        minWidth: "250",
        slotName: "createAt"
      }
    ];
    const dataList = computed(() => store.state.system.userList);
    return { formInfo, formValue, propList, dataList };
  }
});
</script>

<style scoped lang="less">
.main {
  .user-tabel {
    background-color: #fff;
    padding: 20px;
    margin-top: 20px;
    border-radius: 10px;
  }
}
</style>
