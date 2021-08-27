<template>
  <div class="overview">
    <msi-card title="关于">
      <span>
        VueTsCMS 是基于 Vue3、Vuex、VueRouter、Vite、 ElementPlus
        、TypeScript、Echart5 等后台系统解决方案。
      </span>
    </msi-card>
    <msi-card title="技术栈">
      <ul class="technology-stacks">
        <li v-for="(item, index) in technologyStacks" :key="index">
          {{ item.title }}:<a href="javascript:;">{{ item.desp }}</a>
        </li>
      </ul>
      <msi-descriptions :options="DependenciesOptions" />
      <msi-descriptions :options="DevDependenciesOptions" />
    </msi-card>
    <msi-card title="项目解构">
      <pre>{{ TreeOptions }}</pre>
    </msi-card>
    <msi-card title="项目规范">
      <msi-descriptions :options="filenameStandard" />
      <msi-descriptions :options="componentStandard" />
      <msi-descriptions :options="commitStandard" />
    </msi-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MsiCard from "@/common-ui/msi-card";
import MsiDescriptions from "@/common-ui/msi-descriptions";

import technologyStacks from "./config/technologyStacks";
import DependenciesOptions from "./config/dependencies";
import DevDependenciesOptions from "./config/devDependencies";
import TreeOptions from "./config/projectTree";
import {
  filenameStandard,
  componentStandard,
  commitStandard
} from "./config/projectStandard";
export default defineComponent({
  name: "overview",
  components: { MsiCard, MsiDescriptions },
  setup() {
    return {
      DependenciesOptions,
      DevDependenciesOptions,
      TreeOptions,
      technologyStacks,
      filenameStandard,
      componentStandard,
      commitStandard
    };
  }
});
</script>

<style scoped lang="less">
.technology-stacks {
  li {
    font-weight: 600;
    font-size: 16px;
    line-height: 30px;
    a {
      margin-left: 20px;
      font-weight: 500;
      text-decoration: none;
      color: #409eff;
    }
  }
  margin-bottom: 30px;
}
</style>
