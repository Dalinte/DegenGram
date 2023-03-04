import { RouteRecordRaw } from 'vue-router'

import HomePage from '@/pages/HomePage.vue'

const routeNames = {
  homePage: 'homePage',
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: routeNames.homePage,
    component: HomePage,
  },
]

export { routes, routeNames }
