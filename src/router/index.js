import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '平台预警',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/business',
    name: '商圈展示',
    component: () => import(/* webpackChunkName: "about" */ '../views/Business.vue')
  },
  {
    path: '/equipment',
    name: '智慧设备管理',
    component: () => import(/* webpackChunkName: "about" */ '../views/Equipment.vue')
  },
  {
    path: '/jingdianguanli',
    name: '景区景点管理',
    component: () => import(/* webpackChunkName: "about" */ '../views/jingdianguanli.vue')
  },
  {
    path: '/shangpuguanli',
    name: '街区商铺管理',
    component: () => import(/* webpackChunkName: "about" */ '../views/shangPuGuanLi.vue')
  },
  {
    path: '/renliufenxi',
    name: '动态人流分析',
    component: () => import(/* webpackChunkName: "about" */ '../views/renLiuFenXi.vue')
  },



]

const router = new VueRouter({
  // mode: 'history',
  routes
})

export default router
