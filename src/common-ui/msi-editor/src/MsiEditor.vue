<template>
  <div class="msi-editor">
    <div ref="editorRef" class="editor"></div>
    <div :innerHTML="content.html" class="content" ref="contentRef"></div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  onBeforeUnmount,
  ref,
  reactive,
  nextTick
} from "vue";
import WangEditor from "wangeditor";

export default defineComponent({
  name: "MsiEditor",
  setup() {
    const editorRef = ref<HTMLDivElement>();
    const content = reactive({
      html: "",
      text: ""
    });
    let instance: any;
    onMounted(() => {
      instance = new WangEditor(editorRef.value);
      Object.assign(instance.config, {
        onchange() {
          syncHTML();
        }
      });
      instance.config.menuTooltipPosition = "down";
      instance.config.showFullScreen = true;
      instance.create();
      // 监听屏幕大小时间
      window.onresize = () => {
        setEditorBoxSize();
      };
    });

    onBeforeUnmount(() => {
      instance.destroy();
      instance = null;
    });

    const syncHTML = () => {
      content.html = instance.txt.html();
    };
    // 设置高度
    const contentRef = ref<HTMLDivElement>();
    contentRef.value?.setAttribute;
    function setEditorBoxSize() {
      const [navMenu, bodyContent]: any = editorRef.value!.children;
      const height = contentRef.value!.offsetHeight - navMenu.offsetHeight;
      bodyContent.style.height = height + "px";
    }

    nextTick(() => {
      setEditorBoxSize();
    });
    return {
      editorRef,
      contentRef,
      content
    };
  }
});
</script>

<style lang="less" scoped>
.msi-editor {
  display: flex;
  width: 100%;
  height: 100%;

  .editor {
    flex: 1;
    margin-right: 10px;
    height: 100%;
  }
  .content {
    flex: 1;
    padding: 10px 15px;
    background-color: #fff;
    border: 1px solid #c9d8db;
  }
}
</style>
