import { RouteRecordRaw } from 'vue-router'

import MainPage from '@/pages/main/main.vue'
import ProfilePage from '@/pages/profile/profile.vue'

const routeNames = {
  homePage: 'homePage',
  mainPage: 'mainPage',
  profilePage: 'profilePage',
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
]

export { routes, routeNames }
