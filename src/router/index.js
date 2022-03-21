import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/main/Home.vue";
import Article from "../views/main/Article.vue";
import Register from "../views/Auth/Register.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/article",
    name: "Article",
    component: Article,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
