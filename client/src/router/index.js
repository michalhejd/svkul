import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'
import database from '../views/database.vue'
import item from '../views/item.vue'
import admin from '../views/admin.vue'
import account from '../views/admin/account.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/databaze',
    name: 'database',
    component: database
  },
  {
    path: '/admin',
    name: 'admin',
    component: admin,
    children: [
      {
        path: 'ucet',
        name: 'account',
        component: account
      }
    ]
  },
  {
    path: '/:id',
    name: 'item',
    component: item
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
