import { createApp } from "vue";
import { createPinia } from "pinia";
// import "./scss/main.scss";
import App from "./App.vue";
import router from "./router";
import "virtual:svg-icons-register";

createApp(App).use(router, createPinia()).mount("#app");

