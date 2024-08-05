import { createRouter, createWebHistory } from "vue-router";
import Index from "@/views/index.vue";
import Scss from "@/views/Scss.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Index", component: Index },
    { path: "/scss", name: "Scss", component: Scss },
  ],
});

export default router;
