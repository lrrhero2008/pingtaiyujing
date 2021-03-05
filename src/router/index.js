import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/business',
    name: 'Business',
    component: () => import(/* webpackChunkName: "about" */ '../views/Business.vue')
  },


]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
