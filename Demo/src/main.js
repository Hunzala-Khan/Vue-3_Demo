import { createApp } from "vue";
import { createPinia } from "pinia";
import axios from "axios";
import "./style.css";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);
const pinia = createPinia();
app.use(pinia);
app.use(router);
app.config.globalProperties.$axios = axios;

app.mount("#app");
