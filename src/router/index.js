import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../pages/HomePage.vue";
import PokemonList from "../pages/PokemonList.vue";
import AboutPage from "../pages/AboutPage.vue";
import FavoritePage from "../pages/FavoritePage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/list/",
    name: "list",
    component: PokemonList,
  },
  {
    path: "/list/:name",
    name: "about",
    component: AboutPage,
  },
  {
    path: "/favorite/",
    name: "favorite",
    component: FavoritePage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
