import { RouteRecordRaw } from 'vue-router'

import Landing from '@/pages/landing/landing.vue'
import MainPage from '@/pages/main/main.vue'
import ProfilePage from '@/pages/profile/profile.vue'

const routeNames = {
  profilePage: 'profilePage',
  mainPage: 'mainPage',
  landing: 'landing',
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: routeNames.mainPage,
    component: MainPage,
  },
  {
    path: '/profile',
    name: routeNames.profilePage,
    redirect: '/profile:',
    children: [
      {
        path: ':id',
        name: routeNames.profilePage,
        component: ProfilePage,
      },
    ],
  },
  {
    path: '/landing',
    name: routeNames.landing,
    component: Landing,
  },
]

export { routes, routeNames }
