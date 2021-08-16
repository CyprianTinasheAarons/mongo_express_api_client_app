import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import router from "../src/router/router";

createApp(App).use(router).mount("#app");
