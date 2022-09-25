import { createRouter, createWebHistory } from "vue-router";
import Home from '@/viewes/Home.vue'
import KitTest from "@/viewes/KitTest.vue";
import Todo from "@/viewes/Todo.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/todo", name: "Wörterbuch", component: Todo },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
