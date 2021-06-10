import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const DEFAULT_TITLE = 'OpenNotes'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: `${DEFAULT_TITLE} | Home` },
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('@/views/Dashboard.vue'),
    meta: { title: `${DEFAULT_TITLE} | Dashboard` },
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/About.vue'),
    meta: { title: `${DEFAULT_TITLE} | About us` },
  },
  {
    path: '/:catchAll(.*)*',
    name: 'PageNotFound',
    component: () => import('@/views/PageNotFound.vue'),
    meta: { title: `${DEFAULT_TITLE} | 404` },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((toRoute, fromRoute, next) => {
  window.document.title = toRoute.meta && toRoute.meta.title ? toRoute.meta.title : 'OpenNotes';
  next();
})

export default router
