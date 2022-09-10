import { createRouter, createWebHistory } from "vue-router";
import Home from '@/viewes/Home.vue'
import KitTest from "@/viewes/KitTest.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/kit-test",name: 'UI Kit', component: KitTest },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
