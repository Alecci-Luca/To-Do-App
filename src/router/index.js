import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../components/HomeView.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/home/:idNom',
    name: 'home',
    component: HomeView,
    props: true,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/AboutView.vue')
  },
  
]

const router = new VueRouter({
  routes
})

export default router

