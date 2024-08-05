import { createRouter, createWebHistory } from "vue-router";
import Index from "@/views/index.vue";
import Something from "@/views/Something.vue";

const routes = [
  { path: "/", name: "Index", component: Index },
  { path: "/something", name: "Something", component: Something },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
