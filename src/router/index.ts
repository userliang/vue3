import { createRouter, createWebHashHistory, Router, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/layout',
    name: 'Layout',
    component: () => import('@/layout/Layout.vue'),
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/Home.vue')
      },
      {
        path: '/vuex',
        name: 'Vuex',
        component: () => import('@/views/Vuex.vue')
      },
      {
        path: '/axios',
        name: 'Axios',
        component: () => import('@/views/Axios.vue')
      },
      {
        path: '/test',
        name: 'Test',
        component: () => import('@/views/Test.vue')
      },
      {
        path: '/404',
        name: '404',
        component: () => import('@/views/404.vue')
      },
      {
        path: '/403',
        name: '403',
        component: () => import('@/views/403.vue')
      }
    ]
  }
]

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
