import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Dashboard",
    component: () => import("../views/DashboardView.vue"),
    meta: { title: "Dashboard" },
  },
  {
    path: "/tasks",
    name: "Tasks",
    component: () => import("../views/TasksView.vue"),
    meta: { title: "Tasks" },
  },
];

const router = new VueRouter({
  mode: "history",
  // @ts-ignore
  base: import.meta.env.BASE_URL,
  routes,
});

export default router;
