import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import IndexArticle from "../views/IndexArticle.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/article",
    name: "Article",
    component: IndexArticle,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
