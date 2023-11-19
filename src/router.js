import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Artikel from "@/views/Artikel.vue";
import Personal from "@/views/Personal.vue";
import Interrogativ from "@/views/Interrogativ.vue";
import Reflexiv from "@/views/Reflexiv.vue";
import Possessiv from "@/views/Possessiv.vue";
import Demonstrativ from "@/views/Demonstrativ.vue";
import Modal from "@/views/Modal.vue";
import Passiv from "@/views/Passiv.vue";
import Konjunktiv from "@/views/Konjunktiv-II.vue";
import Rektion from "@/views/Rektion.vue";
import SignUp from "@/views/SignUp.vue";
import SignIn from "@/views/SignIn.vue";
import Tasks from "@/components/Tasks.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Home", component: Home },
    { path: "/artikel", name: "Artikel", component: Artikel },
    { path: "/personal", name: "Personal", component: Personal },
    { path: "/interrogativ", name: "Interrogativ", component: Interrogativ },
    { path: "/reflexiv", name: "Reflexiv", component: Reflexiv },
    { path: "/possessiv", name: "Possessiv", component: Possessiv },
    { path: "/demonstrativ", name: "Demonstrativ", component: Demonstrativ },
    { path: "/modal", name: "Modal", component: Modal },
    { path: "/passiv", name: "Passiv", component: Passiv },
    { path: "/konjunktiv", name: "Konjunktiv", component: Konjunktiv },
    { path: "/rektion", name: "Rektion", component: Rektion },
    { path: "/signup", name: "SignUp", component: SignUp },
    { path: "/signin", name: "SignIn", component: SignIn },
    { path: "/tasks", name: "Tasks", component: Tasks },
  ],
});

export default router;
