import type { App } from "vue";

import {
  ElAside,
  ElButton,
  ElCheckbox,
  ElCol,
  ElContainer,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
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
  ElTabs,
  ElRow,
  ElSelect,
  ElDatePicker,
  ElOption,
  ElBreadcrumbItem,
  ElBreadcrumb,
  ElTable,
  ElTableColumn
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
  ElCol,
  ElMenuItem,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElRow,
  ElSelect,
  ElOption,
  ElDatePicker,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElTable,
  ElTableColumn
];

export default function (app: App): void {
  for (const cpn of components) {
    app.component(cpn.name, cpn);
  }
}
