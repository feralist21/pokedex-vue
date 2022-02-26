import Vue from "vue";
import VueRouter from "vue-router";
import MainPage from "../pages/MainPage.vue";
import AboutPage from "../pages/AboutPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: MainPage,
  },
  {
    path: "/:id",
    name: "about",
    component: AboutPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
