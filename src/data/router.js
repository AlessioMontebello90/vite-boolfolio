import { createRouter, createWebHistory } from "vue-router";

import Homepage from "../pages/Homepage.vue";
import Pagina1 from "../pages/Pagina1.vue";
import Portfolio from "../pages/Portfolio.vue";
import ProjectDetail from "../pages/ProjectDetail.vue";

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: "/",
      name: "home",
      component: Homepage,
    },
    {
      path: "/Pagina1",
      name: "Pagina1",
      component: Pagina1,
    },
    {
      path: "/portfolio",
      name: "portfolio",
      component: Portfolio,
    },
    {
      path: "/project-detail",
      name: "project-detail",
      component: ProjectDetail,
    },
  ],
});

export { router };
