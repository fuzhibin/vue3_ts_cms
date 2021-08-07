<template>
  <div class="user">
    <msi-form :="formInfo" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MsiForm from "@/common-ui/msi-form";

import formInfo from "./configs/form.config";
export default defineComponent({
  name: "user",
  components: {
    MsiForm
  },
  setup() {
    return { formInfo };
  }
});
</script>

<style scoped></style>
