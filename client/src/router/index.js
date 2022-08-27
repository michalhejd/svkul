import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'
import database from '../views/database.vue'
import item from '../views/item.vue'
import admin from '../views/admin.vue'
import account from '../views/admin/account.vue'
import accmanage from '../views/admin/accmanage.vue'
import aidsmanage from '../views/admin/aidsmanage.vue'
import eventmanage from '../views/admin/eventmanage.vue'
import notFound from '../views/notFound.vue'
import placemanage from '../views/admin/placemanage.vue'
import changePassword from '../views/admin/changePassword.vue'
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
    path: '/databaze/:key',
    name: 'databaseKeyed',
    component: database
  },
  {
    path: '/admin',
    name: 'admin',
    component: admin,
    children: [
      {
        path: 'mujucet',
        name: 'account',
        component: account,
      },
      {
        path: 'mujucet/changePassword',
        name: 'changePassword',
        component: changePassword
      },
      {
        path: 'spravauctu',
        name: 'accounts',
        component: accmanage
      },
      {
        path: 'spravapomucek',
        name: 'products',
        component: aidsmanage
      },
      {
        path: 'spravaakci',
        name: 'events',
        component: eventmanage
      },
      {
        path: 'spravamista',
        name: 'places',
        component: placemanage
      }
    ]
  },
  {
    path: '/:id',
    name: 'item',
    component: item
  },
  {
    path: '/:key',
    name: 'notFound',
    component: notFound
  },
  {
    path: '*',
    component: notFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
})

export default router
