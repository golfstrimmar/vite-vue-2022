import "./style.css";
import "virtual:svg-icons-register";
import { createPinia } from "pinia";
import { initializeApp } from "firebase/app";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const firebaseConfig = {
  apiKey: "AIzaSyBQOOBt08DlSiwjP-j14Xkq2QC_cFwjNGc",
  authDomain: "deutschnew-89a9a.firebaseapp.com",
  projectId: "deutschnew-89a9a",
  storageBucket: "deutschnew-89a9a.appspot.com",
  messagingSenderId: "801111998678",
  appId: "1:801111998678:web:2bf19b90884645d47c0977",
  measurementId: "G-VTXTG0M7DE",
};

initializeApp(firebaseConfig);
const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount("#app");
