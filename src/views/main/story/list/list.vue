<template>
  <div class="list">
    <page-tabel
      :tabelConfig="TabelConfig"
      pageName="story"
      :usePermission="false"
    ></page-tabel>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import { useStore } from "@/store";

import PageTabel from "@/components/page-tabel";

import TabelConfig from "./config/tabel.config";

export default defineComponent({
  name: "list",
  components: { PageTabel },
  setup() {
    // const store = useStore();

    return { TabelConfig };
  }
});
</script>

<style scoped lang="less">
.list {
  .vaberrage {
    height: 200px;
    width: 100%;
    .baberrage-box {
      height: 200px !important;
    }
  }
}
</style>
