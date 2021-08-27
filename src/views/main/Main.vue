<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside :width="menuFold ? '65px' : '210px'">
        <nav-menu :menu-fold="menuFold" />
      </el-aside>
      <el-container class="page">
        <el-header class="page-header">
          <nav-header @changeMenuFold="changeMenuFold" />
        </el-header>
        <el-main class="page-content">
          <el-config-provider :locale="zhCn">
            <router-view v-slot="{ Component }">
              <transition>
                <keep-alive include="chat">
                  <component :is="Component"></component>
                </keep-alive>
              </transition>
            </router-view>
          </el-config-provider>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import NavMenu from "@/components/nav-menu";
import NavHeader from "@/components/nav-header";

import { ElConfigProvider } from "element-plus";

import zhCn from "element-plus/lib/locale/lang/zh-cn";

export default defineComponent({
  name: "Main",
  components: {
    NavMenu,
    NavHeader,
    [ElConfigProvider.name]: ElConfigProvider
  },
  setup() {
    const menuFold = ref(false);
    const changeMenuFold = (isFold: boolean) => {
      menuFold.value = isFold;
    };
    return {
      changeMenuFold,
      menuFold,
      zhCn
    };
  }
});
</script>

<style lang="less" scoped>
.main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.main-content,
.page {
  height: 100%;
}
.page-header {
  padding: 0px;
}
.page-content {
  height: calc(100% - 48px);
}

.el-header,
.el-footer {
  display: flex;
  color: #333;
  text-align: center;
  align-items: center;
}

.el-header {
  height: 48px !important;
}

.el-aside {
  overflow-x: hidden;
  overflow-y: auto;
  line-height: 200px;
  text-align: left;
  cursor: pointer;
  background-color: #001529;
  transition: width 0.3s linear;
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */

  &::-webkit-scrollbar {
    display: none;
  }
}

.el-main {
  color: #333;
  background-color: #f0f2f5;
}
</style>
