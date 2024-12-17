import { createRouter, createWebHistory } from 'vue-router';
import Home from "../views/Home.vue";
import welcome from "../views/Welcome.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: welcome,
    },
    {
      path: '/wish',
      name: 'Home',
      component: Home,
    },
  ],
});

export default router;
