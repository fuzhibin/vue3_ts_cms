const prodPlugins = [];
// 如果是发布模式则启用的插件
if (process.env.NODE_ENV === "production") {
  prodPlugins.push("transform-remove-console");
}

module.exports = {
  plugins: [
    [
      "import",
      {
        libraryName: "element-plus",
        customStyleName: (name) => {
          return `element-plus/lib/theme-chalk/${name}.css`;
        }
      }
    ]
  ],
  presets: ["@vue/cli-plugin-babel/preset", ...prodPlugins]
};
