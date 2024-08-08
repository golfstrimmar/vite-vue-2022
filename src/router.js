import { createRouter, createWebHistory } from "vue-router";
import Index from "@/views/index.vue";
import Scss from "@/views/Scss.vue";
import JS from "@/views/JS.vue";
import PVUE from "@/views/PVUE.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Index", component: Index },
    { path: "/scss", name: "Scss", component: Scss },
    { path: "/js", name: "JS", component: JS },
    { path: "/pvue", name: "PVUE", component: PVUE },
  ],
});

export default router;
