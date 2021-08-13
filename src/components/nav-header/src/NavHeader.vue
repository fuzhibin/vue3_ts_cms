<template>
  <div class="nav-header">
    <i
      class="fold-menu"
      :class="isFold ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
      @click="menuFoldAction"
    ></i>
    <bread-crumb :breadCrumbInfo="breadCrumbInfo" />
    <div class="user-info">
      <el-dropdown>
        <span class="el-dropdown-link">
          下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item icon="el-icon-plus">我的信息</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-plus"
              >退出登陆</el-dropdown-item
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";

import BreadCrumb, { BreadCrumbItemType } from "@/common-ui/breadcrumb";
import { breadCrumbMapToMenu } from "@/utils/menuToRoute";
import { useStore } from "@/store";
import { useRoute } from "vue-router";
export default defineComponent({
  emits: ["changeMenuFold"],
  name: "NavHeader",
  components: {
    BreadCrumb
  },
  setup(props, { emit }) {
    const isFold = ref(true);

    const breadCrumbInfo = computed(() => {
      const route = useRoute();
      const store = useStore();
      const path = route.path;
      return breadCrumbMapToMenu(store.state.login.userMenus, path);
    });

    const menuFoldAction = () => {
      emit("changeMenuFold", isFold.value);
      isFold.value = !isFold.value;
    };
    return { menuFoldAction, isFold, breadCrumbInfo };
  }
});
</script>

<style lang="less" scoped>
.nav-header {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }
  .bread-crumb {
    flex: 1;
    text-align: left;
    margin-left: 10px;
  }
  .user-info {
  }
}
</style>
