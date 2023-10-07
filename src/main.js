import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import "virtual:svg-icons-register";
import { Quasar } from "quasar";
// import "@quasar/extras/material-icons/material-icons.css";
import "./../node_modules/quasar/dist/quasar.css";

createApp(App)
  .use(Quasar, {
    plugins: {}, // import Quasar plugins and add here
  })
  .use(router)
  .mount("#app");
