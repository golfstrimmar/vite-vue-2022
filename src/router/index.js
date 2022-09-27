import { createRouter, createWebHistory } from "vue-router";
import Home from '@/viewes/Home.vue'
import NewWordForm from "@/viewes/NewWordForm.vue";
import Todo from "@/viewes/Todo.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/todo", name: "Wörterbuch", component: Todo },
  { path: "/NewWordForm", name: "Neue Wortform", component: NewWordForm },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
