import { createApp } from 'vue'
import { Quasar } from "quasar";
import './style.css'
import App from './App.vue'
import router from "./router";

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// A few examples for animations from Animate.css:
// import @quasar/extras/animate/fadeIn.css
// import @quasar/extras/animate/fadeOut.css

// Import Quasar css
import "./../node_modules/quasar/dist/quasar.css";

import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCTr_tR1MbYjHurQgAfdgEntqZQ150rZyA",
  authDomain: "deutsch-d26e4.firebaseapp.com",
  projectId: "deutsch-d26e4",
  storageBucket: "deutsch-d26e4.appspot.com",
  messagingSenderId: "1002823720200",
  appId: "1:1002823720200:web:c70fc15791d9ed502520bd",
};

const app = initializeApp(firebaseConfig);

const myApp = createApp(App)

myApp.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
})

// Assumes you have a <div id="app"></div> in your index.html
myApp.use(router).mount("#app");



// =========================================

// var playersRef = firebase.database().ref("players/");

// playersRef.set({
//   John: {
//     number: 1,
//     age: 30,
//   },

//   Amanda: {
//     number: 2,
//     age: 20,
//   },
// });

// import { getDatabase } from "firebase/database";

// const database = getDatabase();

// console.log(database);

// var ref = firebase.database().ref("players");

// console.log(ref);

import { doc, setDoc } from "firebase/firestore";

// Add a new document in collection "cities"
await setDoc(doc(db, "cities", "LA"), {
  name: "Los Angeles",
  state: "CA",
  country: "USA",
});