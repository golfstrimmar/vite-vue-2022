import { createRouter, createWebHistory } from "vue-router";
import Index from "@/views/index.vue";
import Hero from "@/views/hero.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Index", component: Index },
    { path: "/hero", name: "Hero", component: Hero },
  ],
});

export default router;
