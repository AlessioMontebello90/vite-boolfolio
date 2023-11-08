import { createRouter, createWebHistory } from "vue-router";

import AppHome from "../pages/AppHome.vue";
import Pagina1 from "../pages/Pagina1.vue";

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: "/",
      name: "home",
      component: AppHome,
    },
    {
      path: "/Pagina1",
      name: "Pagina1",
      component: Pagina1,
    },
  ],
});

export { router };
