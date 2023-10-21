import { createApp } from "vue";
import { Quasar } from "quasar";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import "virtual:svg-icons-register";
// Import icon libraries
import "@quasar/extras/material-icons/material-icons.css";
import { createPinia } from "pinia";
// A few examples for animations from Animate.css:
// import @quasar/extras/animate/fadeIn.css
// import @quasar/extras/animate/fadeOut.css

// Import Quasar css
import "./../node_modules/quasar/dist/quasar.css";
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

const myApp = createApp(App);

myApp.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
});

// Assumes you have a <div id="app"></div> in your index.html
myApp.use(router).use(createPinia()).mount("#app");
