import { createRouter, createWebHistory } from 'vue-router'

import { routes } from '@/app/providers/router/routes'

export const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})
