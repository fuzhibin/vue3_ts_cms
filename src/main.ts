import { createApp } from "vue";
import App from "./App.vue";

import router from "./router";
import store from "./store";
import { uploadCache } from "@/store";
import "normalize.css";

import "./assets/css/index.less";
import register from "./global";
import localCache from "@/utils/cache";
localCache.setCache("name", "coderbin");
localCache.setCache("password", "123456");
const app = createApp(App);
app.use(register);
app.use(store);
uploadCache();
app.use(router);

app.mount("#app");
