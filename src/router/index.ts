import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  // @ts-ignore
  base: import.meta.env.BASE_URL,
  routes,
});

export default router;
