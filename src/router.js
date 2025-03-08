import { createRouter, createWebHistory } from "vue-router";
import Index from "@/views/index.vue";
import Scss from "@/views/Scss.vue";
import JS from "@/views/JS.vue";
import PVUE from "@/views/PVUE.vue";
import ReactComp from "@/views/ReactComp.vue";
import Wordpress from "@/views/Wordpress.vue";
import NodeComp from "@/views/NodeComp.vue";
import NextComp from "@/views/NextComp.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Index", component: Index },
    { path: "/scss", name: "Scss", component: Scss },
    { path: "/js", name: "JS", component: JS },
    { path: "/pvue", name: "PVUE", component: PVUE },
    { path: "/react", name: "ReactComp", component: ReactComp },
    { path: "/wordpress", name: "Wordpress", component: Wordpress },
    { path: "/node", name: "NodeComp", component: NodeComp },
    { path: "/next", name: "NextComp", component: NextComp },
  ],
});

export default router;
