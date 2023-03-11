import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

let routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  }
]

for (let docpage of [
  'clinical-applications',
  'introduction',
  'modelling-tools',
  'publishing',
  'reuse',
  'standards'
]) {
  routes.push({
    path: `/${docpage}`,
    name: docpage,
    component: () => import('../views/DocumentationView.vue')
  })
}

routes.push({
  path: '/:pathMatch(.*)*',
  name: 'NotFound',
  meta: { title: 'Tools for Credible Digital Twins: Not Found' },
  component: () => import('../views/NotFound.vue')
})

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
