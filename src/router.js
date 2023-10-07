import { createRouter, createWebHistory } from "vue-router";
import Index from "@/views/Index.vue";
import Artikel from "@/views/Artikel.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Index", component: Index },
    { path: "/artikel", name: "Artikel", component: Artikel },
  ],
});

export default router;
