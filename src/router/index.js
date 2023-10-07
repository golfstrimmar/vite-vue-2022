import { createRouter, createWebHistory } from "vue-router";
import Home from "@/viewes/Home.vue";
import Artikel from "@/viewes/Artikel.vue";
import NewWordForm from "@/viewes/NewWordForm.vue";
import Todo from "@/viewes/Todo.vue";
import Login from "@/viewes/Login.vue";
import { auth } from "./../firebase";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/artikel", name: "Home", component: Artikel },
  { path: "/todo", name: "Wörterbuch", component: Todo },
  {
    path: "/NewWordForm",
    name: "Neue Wortform",
    component: NewWordForm,
    meta: {
      requiresAuth: true,
    },
  },
  { path: "/Login", name: "Login", component: Login },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.path === "/login" && auth.currentUser) {
    next("/todo");
    return;
  }
  if (
    to.matched.some((record) => record.meta.requiresAuth) &&
    !auth.currentUser
  ) {
    next("/login");
    return;
  }
  next();
});

export default router;
