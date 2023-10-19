import "./style.css";
import "virtual:svg-icons-register";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";

import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyAmo_0Q4sIuRQkBNp3F5_bStKK8LoHVwes",
  authDomain: "dtraining.firebaseapp.com",
  projectId: "dtraining",
  storageBucket: "dtraining.appspot.com",
  messagingSenderId: "499479318579",
  appId: "1:499479318579:web:e66990da02456fffcad346",
};

initializeApp(firebaseConfig);

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.mount("#app");
