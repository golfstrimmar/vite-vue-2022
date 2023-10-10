import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Artikel from "@/views/Artikel.vue";
import Personal from "@/views/Personal.vue";
import Interrogativ from "@/views/Interrogativ.vue";
import Reflexiv from "@/views/Reflexiv.vue";
import Possesiv from "@/views/Possesiv.vue";
import Zeigepronomen from "@/views/Zeigepronomen.vue";
import Modal from "@/views/Modal.vue";
import Passiv from "@/views/Passiv.vue";
import Konjunktiv from "@/views/Konjunktiv-II.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Home", component: Home },
    { path: "/artikel", name: "Artikel", component: Artikel },
    { path: "/personal", name: "Personal", component: Personal },
    { path: "/interrogativ", name: "Interrogativ", component: Interrogativ },
    { path: "/reflexiv", name: "Reflexiv", component: Reflexiv },
    { path: "/possesiv", name: "Possesiv", component: Possesiv },
    { path: "/zeigepron", name: "Zeige", component: Zeigepronomen },
    { path: "/modal", name: "Modal", component: Modal },
    { path: "/passiv", name: "Passiv", component: Passiv },
    { path: "/konjunktiv", name: "Konjunktiv", component: Konjunktiv },
  ],
});

export default router;
