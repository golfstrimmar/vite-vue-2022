import "virtual:svg-icons-register";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import { createApp } from "vue";

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
