import { createApp } from "vue";
import App from "./App.vue";

import router from "./router";
import store from "./store";
import { uploadCache } from "@/store";
import "normalize.css";

import "./assets/css/index.less";
import register from "./global";

const app = createApp(App);

app.use(store);
uploadCache();
app.use(router);

app.use(register);
app.mount("#app");
