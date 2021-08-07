<template>
  <div class="nav-header">
    <i
      class="fold-menu"
      :class="isFold ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
      @click="menuFoldAction"
    ></i>
    <div class="bread-crumb">面包屑</div>
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
import { defineComponent, ref } from "vue";

export default defineComponent({
  emits: ["changeMenuFold"],
  name: "NavHeader",
  setup(props, { emit }) {
    const isFold = ref(true);
    const menuFoldAction = () => {
      emit("changeMenuFold", isFold.value);
      isFold.value = !isFold.value;
    };
    return { menuFoldAction, isFold };
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
