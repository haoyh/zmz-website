import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// 清除所有默认样式
import "./assets/style/reset.css";
// 通用样式
import "./assets/style/common.css";

createApp(App)
  .use(router)
  .mount("#app");
