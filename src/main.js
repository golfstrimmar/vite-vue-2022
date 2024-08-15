import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import "virtual:svg-icons-register";
import { createPinia } from "pinia";

const pinia = createPinia();

createApp(App)
  .use(router)
  .directive("copy", {
    mounted(el) {
      el.addEventListener("click", (e) => {
        let add = document.createElement("textarea");
        add.style.cssText =
          "position: absolute;z-index: -2;max-height: 0; border: none;";
        document.querySelector("body").appendChild(add);
        add.textContent = el.value;
        add.select();
        navigator.clipboard.writeText(add.textContent);
        el.classList.add("_is-active");
        setTimeout(function () {
          add.remove();
          el.classList.remove("_is-active");
        }, 200);
      });
    },
  })
  .use(pinia)
  .mount("#app");
