import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', component: () => import('./views/Home.vue')},
  { path: '/about', component: () => import('./views/About.vue') },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('./views/404.vue')  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export { router }