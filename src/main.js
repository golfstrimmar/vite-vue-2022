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
  .directive("tool", {
    mounted(el) {
      let add = document.createElement("div");

      el.addEventListener("mouseover", (e) => {
        add.innerText = el.getAttribute("data").split(",").join(" ");
        add.classList.add("add");
        el.appendChild(add);
        var xPosition = el.offsetLeft;
        var yPosition = el.offsetTop;
        console.log(xPosition, yPosition);
        add.style.left = 0 + "px";
        add.style.top = 0 + "px";
      });

      el.addEventListener("mouseleave", (e) => {
        add.remove();
      });
    },
  })
  .use(router)
  .use(createPinia())
  .mount("#app");
