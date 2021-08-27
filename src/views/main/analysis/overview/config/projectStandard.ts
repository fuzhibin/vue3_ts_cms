export const filenameStandard = {
  itemList: [
    { name: "文件夹", description: "统一小写, 多个单词使用-分割" },
    {
      name: "文件(.ts .vue .json .d.ts)",
      description: "统一小写, 多个单词使用-分割"
    }
  ],
  column: 1,

  title: "文件名称规范"
};

export const componentStandard = {
  itemList: [
    { name: "组件的文件", description: "统一小写, 多个单词使用-分割" },
    {
      name: "组件的目录结构",
      description:
        "例如 button 组件：button/src/index.vue, 统一在button/index.ts导出"
    },
    {
      name: "组件导包顺序",
      description:
        "导vue技术栈的包 , 导第三方的工具函数 , 导本地的组件, 导本地的工具函数"
    },
    { name: "组件的名称", description: "统一大写开头，驼峰命名" },
    {
      name: "组件属性顺序",
      description: "name, components, props, emits, setup ..."
    },
    { name: "template标签", description: "小写加 - ( 例如：<case-panel/> )" },
    {
      name: "template标签属性顺序",
      description: "v-if , v-for , ref, class, style, ... ,事件"
    },
    {
      name: "组件的props",
      description: "小写开头，驼峰命名，必须编写类型默认值"
    },
    {
      name: "组件的样式",
      description:
        "作用域：scoped, lang = scss / less  ; 类名：统一小写, 多个单词使用-分割"
    }
  ],
  column: 1,
  title: "组件编写规范"
};

export const commitStandard = {
  itemList: [
    { name: "add 操作", description: "git add " },
    { name: "commit 操作", description: "yarn commit " },
    { name: "pull 操作", description: "git pull " },
    { name: "push 操作", description: "git push " }
  ],
  column: 1,

  title: "Git提交规范"
};
