<template>
  <div class="nav-header">
    <i
      class="fold-menu"
      :class="isFold ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
      @click="menuFoldAction"
    ></i>
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
  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }
}
</style>
