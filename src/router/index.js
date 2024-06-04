import { createRouter, createWebHistory } from "vue-router";

import commonRoutes from "./commonPages";
import knlRoutes from "./knlPages";

const routes = [
  {
    path: "/",
    redirect: "/portMain",
  },
  ...knlRoutes,
  ...commonRoutes,
  {
    path: "/:pathMatch(.*)*",
    redirect: "/notFound",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// router.beforeEach((to, from, next) => {
//   // 로그인 된 상태일 때,
//     // 관리자 계정이 어드민 로그인 페이지로 이동하려 할 시
//     if (to.fullPath === "/admin/login") {
//       // 어드민 메인 페이지로 이동
//       next(adminRoutes[0]);
//     } 
//     next();
  
// });

// router.afterEach((to, from) => {
//     if(to.fullPath.includes("/admin/"))
//         document.title = "KNL Learning Administrator";
//     else
//         document.title = "KNL Learning Space";
// });

export default router;
