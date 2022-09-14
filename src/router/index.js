import { createRouter, createWebHistory } from "vue-router";
import Home from '@/viewes/Home.vue'
import KitTest from "@/viewes/KitTest.vue";
import Cards from "@/viewes/Cards.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/kit", name: "UI Kit", component: KitTest },
  { path: "/cards", name: "Cards", component: Cards },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
