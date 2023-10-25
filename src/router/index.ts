import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/advantages',
      name: 'advantages',
      component: HomeView
    },
    {
      path: '/tariffs',
      name: 'tariffs',
      component: HomeView
    },
    {
      path: '/shares',
      name: 'shares',
      component: HomeView
    },
    {
      path: '/promo',
      name: 'promo',
      component: HomeView
    },
    {
      path: '/tech',
      name: 'tech',
      component: HomeView
    },
    {
      path: '/new',
      name: 'new',
      component: HomeView
    },
  ]
})

export default router
