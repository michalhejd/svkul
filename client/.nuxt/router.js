import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4ac20c7e = () => interopDefault(import('..\\pages\\admin.vue' /* webpackChunkName: "pages/admin" */))
const _283ede44 = () => interopDefault(import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages/admin/index" */))
const _73f4323a = () => interopDefault(import('..\\pages\\admin\\profil.vue' /* webpackChunkName: "pages/admin/profil" */))
const _ac4712e4 = () => interopDefault(import('..\\pages\\admin\\spravainstanci.vue' /* webpackChunkName: "pages/admin/spravainstanci" */))
const _081ea91c = () => interopDefault(import('..\\pages\\admin\\spravamist.vue' /* webpackChunkName: "pages/admin/spravamist" */))
const _6e9f4dc6 = () => interopDefault(import('..\\pages\\admin\\spravapomucek.vue' /* webpackChunkName: "pages/admin/spravapomucek" */))
const _0150c1f8 = () => interopDefault(import('..\\pages\\admin\\spravauctu.vue' /* webpackChunkName: "pages/admin/spravauctu" */))
const _51dfc964 = () => interopDefault(import('..\\pages\\admin\\zmenahesla.vue' /* webpackChunkName: "pages/admin/zmenahesla" */))
const _7dc8cd16 = () => interopDefault(import('..\\pages\\databaze.vue' /* webpackChunkName: "pages/databaze" */))
const _94b8e3e2 = () => interopDefault(import('..\\pages\\kontakt.vue' /* webpackChunkName: "pages/kontakt" */))
const _1952b881 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _f0fcdbd8 = () => interopDefault(import('..\\pages\\_pomucka.vue' /* webpackChunkName: "pages/_pomucka" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/admin",
    component: _4ac20c7e,
    children: [{
      path: "",
      component: _283ede44,
      name: "admin"
    }, {
      path: "profil",
      component: _73f4323a,
      name: "admin-profil"
    }, {
      path: "spravainstanci",
      component: _ac4712e4,
      name: "admin-spravainstanci"
    }, {
      path: "spravamist",
      component: _081ea91c,
      name: "admin-spravamist"
    }, {
      path: "spravapomucek",
      component: _6e9f4dc6,
      name: "admin-spravapomucek"
    }, {
      path: "spravauctu",
      component: _0150c1f8,
      name: "admin-spravauctu"
    }, {
      path: "zmenahesla",
      component: _51dfc964,
      name: "admin-zmenahesla"
    }]
  }, {
    path: "/databaze",
    component: _7dc8cd16,
    name: "databaze"
  }, {
    path: "/kontakt",
    component: _94b8e3e2,
    name: "kontakt"
  }, {
    path: "/",
    component: _1952b881,
    name: "index"
  }, {
    path: "/:pomucka",
    component: _f0fcdbd8,
    name: "pomucka"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
