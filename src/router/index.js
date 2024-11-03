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
      path: "/work-process",
      name: "work-process",
      component: () => import("../views/WorkProcess.vue"),
      meta: {
        title: "Work Process",
      },
    },
    {
      path: "/prjects",
      name: "projects",
      component: () => import("../views/ProjectsView.vue"),
      meta: {
        title: "Projects",
      },
    },
    {
      path: "/prjects/project",
      name: "project",
      component: () => import("../views/productInfo.vue"),
      meta: {
        title: "project",
      },
    },
    {
      path: "/products",
      name: "products",
      component: () => import("../views/ProductsView.vue"),
      meta: {
        title: "Products",
      },
    },
    {
      path: "/contact-us",
      name: "contact-us",
      component: () => import("../views/ContactUs.vue"),
      meta: {
        title: "contact-us",
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
