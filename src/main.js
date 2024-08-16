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
  .directive("tool", {
    mounted(el) {
      let add = document.createElement("div");

      el.addEventListener("mouseover", (e) => {
        add.innerText = el.getAttribute("data");
        add.classList.add("add");
        document.querySelector("body").appendChild(add);
        // var xPosition = el.offsetLeft;
        // var yPosition = el.offsetTop;
        // console.log(xPosition, yPosition);
        // add.style.left = 0 + "px";
        // add.style.top = 0 + "px";
      });

      el.addEventListener("mouseleave", (e) => {
        add.remove();
      });
    },
  })
  .use(pinia)
  .mount("#app");
