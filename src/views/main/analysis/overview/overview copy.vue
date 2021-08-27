<template>
  <div class="overview">
    <msi-card title="关于">
      <p>
        Vue3Admin 是基于 Vue3、Vuex、VueRouter、Vite、 ElementPlus
        、TypeScript、Echart5 等后台系统解决方案。
      </p>
    </msi-card>
    <msi-card title="技术栈">
      <ul>
        <li>开发工具 : Visual Studio Code</li>
        <li>编程语言 : TypeScript 4.x + JavaScript</li>
        <li>构建工具 : Vite 2.x / Webpack5.x</li>
        <li>前端框架 : Vue 3.x</li>
        <li>路由工具 : Vue Router 4.x</li>
        <li>状态管理 : Vuex 4.x</li>
        <li>UI 框架 : Element Plus</li>
        <li>可视化 : Echart5.x</li>
        <li>富文本 : WangEditor</li>
        <li>工具库 : @vueuse/core + dayjs + countup.js</li>
        <li>CSS 预编译 : Sass / Less</li>
        <li>HTTP 工具 : Axios</li>
        <li>Git Hook 工具 : husky</li>
        <li>代码规范 : EditorConfig + Prettier + ESLint</li>
        <li>提交规范 : Commitizen + Commitlint</li>
        <li>自动部署 : Centos + Jenkins + Nginx</li>
      </ul>
      <p>生产环境依赖</p>
      <table>
        <tr>
          <td>vue</td>
          <td>^3.0.5</td>
          <td>vue-router</td>
          <td>^4.0.6</td>
        </tr>
        <tr>
          <td>vuex</td>
          <td>^4.0.0</td>
          <td>axios</td>
          <td>^0.21.1</td>
        </tr>
        <tr>
          <td>vuex</td>
          <td>^4.0.0</td>
          <td>axios</td>
          <td>^0.21.1</td>
        </tr>
      </table>
    </msi-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MsiCard from "@/common-ui/msi-card";

export default defineComponent({
  name: "overview",
  components: { MsiCard },
  setup() {
    return {};
  }
});
</script>

<style scoped></style>
