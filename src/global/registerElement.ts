import type { App } from "vue";

import {
  ElAside,
  ElButton,
  ElCheckbox,
  ElContainer,
  ElForm,
  ElFormItem,
  ElHeader,
  ElInput,
  ElLink,
  ElMain,
  ElMenu,
  ElMenuItem,
  ElSubmenu,
  ElTabPane,
  ElTabs
} from "element-plus";

import "element-plus/lib/theme-chalk/base.css";
const components = [
  ElButton,
  ElTabs,
  ElTabPane,
  ElForm,
  ElFormItem,
  ElInput,
  ElCheckbox,
  ElLink,
  ElContainer,
  ElAside,
  ElHeader,
  ElMain,
  ElMenu,
  ElSubmenu,
  ElMenuItem
];

export default function (app: App): void {
  for (const cpn of components) {
    app.component(cpn.name, cpn);
  }
}
