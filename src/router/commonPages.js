
const commonRoutes = [
  {
    path: "/notFound",
    name: "notFound",
    component: () => import("@/views/pages/common/NotFound.vue"),
  },
  {
    path: "/portMain",
    name: "Shjo_MainPage",
    component: () => import("@/views/pages/MainLayout.vue"),
  }
];
export default commonRoutes;
