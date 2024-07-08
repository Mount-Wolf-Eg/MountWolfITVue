import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
      meta: {
        title: "Mount Wolf",
      },
    },
    {
      path: "/services",
      name: "services",
      component: () => import("../views/ServicesView.vue"),
      meta: {
        title: "Services",
      },
    },
    {
      path: "/prjects",
      name: "projects",
      component: () => import("../views/ProjectsView.vue"),
      meta: {
        title: "projects",
      },
    },
    {
      path: "/:pathMatch(.*)*",
      name: "Not-found",
      component: () => import("../views/NotFound.vue"),
      meta: {
        title: "Not Found",
      },
    },
  ],
  scrollBehavior() {
    return { top: 0, behavior: "smooth" };
  },
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
