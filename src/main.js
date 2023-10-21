import "./style.css";
import "virtual:svg-icons-register";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
// import { Quasar } from "quasar";
// import "@quasar/extras/material-icons/material-icons.css";
// import "./../node_modules/quasar/dist/quasar.css";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCTr_tR1MbYjHurQgAfdgEntqZQ150rZyA",
  authDomain: "deutsch-d26e4.firebaseapp.com",
  databaseURL:
    "https://deutsch-d26e4-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "deutsch-d26e4",
  storageBucket: "deutsch-d26e4.appspot.com",
  messagingSenderId: "1002823720200",
  appId: "1:1002823720200:web:c70fc15791d9ed502520bd",
};

initializeApp(firebaseConfig);

const app = createApp(App);
app.use(router).use(createPinia()).mount("#app");
// .use(Quasar, {
//   plugins: {},
// })
