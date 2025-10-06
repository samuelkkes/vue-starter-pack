import AppLayout from '@/layout/app-layout.vue'
import AuthLayout from '@/layout/auth-layout.vue'
import LoginPage from '@/module/auth/loginPage.vue'
import HomePage from '@/views/HomePage.vue'
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: AppLayout,
    children: [
      {
        path: '',
        name: 'backoffice-home',
        component: HomePage
      },
    ]
  },
  {
    path: "/",
    name: "auth",
    component: () => AuthLayout,
    children: [
      {
        path: '/login',
        name: 'login',
        component: LoginPage
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
