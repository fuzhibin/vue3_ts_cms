<template>
  <div class="msi-descriptions">
    <el-descriptions border :column="options.column" :title="options.title">
      <template v-for="(item, index) in options.itemList" :key="index">
        <el-descriptions-item
          :label="item.name"
          label-align="left"
          align="left"
          width="1"
        >
          <template #label>
            <b> {{ item.name }}</b>
          </template>
          <el-tag>{{ item.description }}</el-tag>
        </el-descriptions-item>
      </template>
    </el-descriptions>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MsiDescriptions",
  props: {
    options: {
      type: Object,
      default: () => ({})
    }
  },
  setup() {
    return {};
  }
});
</script>

<style lang="less" scoped>
.msi-descriptions {
  padding: 5px;
  margin-bottom: 15px;
}
</style>
