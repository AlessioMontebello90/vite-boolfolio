import Homepage from "../pages/Homepage.vue";
import Pagina1 from "../pages/Pagina1.vue";
import Portfolio from "../pages/Portfolio.vue";
import PortfolioByType from "../pages/PortfolioByType.vue";
import ProjectDetail from "../pages/ProjectDetail.vue";
import NotFound from "../pages/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: "/",
      name: "home",
      component: Homepage,
    },
    {
      path: "/altro",
      name: "altro",
      component: Altro,
    },
    {
      path: "/portfolio",
      name: "portfolio",
      component: Portfolio,
    },

    {
      path: "/portfolio/type/:type_id",
      name: "portfolio-by-type",
      component: PortfolioByType,
    },
    {
      path: "/project-detail/:slug",
      name: "project-detail",
      component: ProjectDetail,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: NotFound,
    },
  ],
});

export { router };
