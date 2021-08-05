const path = require("path");
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        view: "@/view",
        router: "@/router",
        components: "@/components"
      }
    }
  }
};
