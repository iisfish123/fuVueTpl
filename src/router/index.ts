import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/detail',
      component: () => import('../page/Detail/index.vue')
    },
    {
      path: '/',
      component: () => import('../page/Home/index.vue')
    },
    {
      path: '/home',
      component: () => import('../page/Home/index.vue')
    }
  ]
})

export default router
