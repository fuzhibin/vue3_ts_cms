<template>
  <div class="nav-dialog">
    <el-dialog v-model="isShow" width="30%">
      <div v-if="showImage">
        <h2>QQ</h2>
        <img src="~assets/images/qq.png" alt="" />
      </div>
      <div v-else>
        <h2>WeiChat</h2>
        <img src="~assets/images/weichat.png" alt="" />
      </div>

      <h3>和我一起来学习前端吧</h3>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "NavDialog",
  setup() {
    const isShow = ref(false);
    const showImage = ref(true);
    return { isShow, showImage };
  }
});
</script>

<style lang="less" scoped>
.nav-dialog {
  padding: 10px 10px;
  img {
    width: 100%;
  }
}
</style>
