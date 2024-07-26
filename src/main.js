import "./style.css";
import "virtual:svg-icons-register";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import { createApp } from "vue";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

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

// .directive("focus", function (el, binding) {
//   // el.focus();
//   if (binding.value == "foo") {
//     el.value = "succsess";
//   }
// })
// .directive(
//   "test",
//   {
//     mounted(el, binding) {
//       if (binding.value) {
//         el.focus();
//         el.classList.add("_is-light");
//       }
//     },
//   }
//   // function (el, binding) {
//   //   // el.focus();
//   //   if (binding.value == "foo") {
//   //     el.value = "succsess";
//   //   }
//   // }
// )
// .directive("focus", {
//   mounted(el, binding) {
//     if (binding.value) {
//       el.focus();
//       el.classList.add("_is-light");
//     }
//   },
// })
app
  .directive("blur", {
    updated(el, binding) {
      if (binding.value) {
        el.blur();
        el.classList.remove("_is-light");
      }
    },
  })
  .use(router)
  .use(createPinia())
  .mount("#app");
const db = getFirestore(app);
