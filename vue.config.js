const path = require("path");
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        view: "@/view",
        router: "@/router",
        components: "@/components",
        assets: "@/assets"
      }
    }
  },
  devServer: {
    proxy: {
      "/api": {
        target: "http://152.136.185.210:4000",
        pathRewrite: {
          "^/api": ""
        },
        changeOrigin: true
      }
    }
  },
  publicPath: "./", // 注意 这里使用 /  如果不行的话  就 ./
  outputDir: "dist", // 包名
  assetsDir: "static"
};
