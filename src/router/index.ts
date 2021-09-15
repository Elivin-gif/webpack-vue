import { createRouter, /**createWebHistory*/ createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue"

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/home",
    component:() => import("../views/About/index.vue"),
  },
  {
    path: "/test",
    component:() => import("../views/testing/index.vue"),
  },
];
const rouer = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default rouer;
