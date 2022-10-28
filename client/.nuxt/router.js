import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _260f1b72 = () => interopDefault(import('..\\pages\\admin.vue' /* webpackChunkName: "pages/admin" */))
const _81365660 = () => interopDefault(import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages/admin/index" */))
const _7ce5e5a4 = () => interopDefault(import('..\\pages\\admin\\profil.vue' /* webpackChunkName: "pages/admin/profil" */))
const _77351d82 = () => interopDefault(import('..\\pages\\admin\\spravainstanci.vue' /* webpackChunkName: "pages/admin/spravainstanci" */))
const _6a0a2734 = () => interopDefault(import('..\\pages\\admin\\spravamist.vue' /* webpackChunkName: "pages/admin/spravamist" */))
const _42ed03a9 = () => interopDefault(import('..\\pages\\admin\\spravapomucek.vue' /* webpackChunkName: "pages/admin/spravapomucek" */))
const _633c4010 = () => interopDefault(import('..\\pages\\admin\\spravauctu.vue' /* webpackChunkName: "pages/admin/spravauctu" */))
const _20ea0a58 = () => interopDefault(import('..\\pages\\admin\\zmenahesla.vue' /* webpackChunkName: "pages/admin/zmenahesla" */))
const _0d7ab601 = () => interopDefault(import('..\\pages\\databaze.vue' /* webpackChunkName: "pages/databaze" */))
const _1c2e9ffa = () => interopDefault(import('..\\pages\\kontakt.vue' /* webpackChunkName: "pages/kontakt" */))
const _16c07116 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _583ea2c0 = () => interopDefault(import('..\\pages\\_pomucka.vue' /* webpackChunkName: "pages/_pomucka" */))

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
    component: _260f1b72,
    children: [{
      path: "",
      component: _81365660,
      name: "admin"
    }, {
      path: "profil",
      component: _7ce5e5a4,
      name: "admin-profil"
    }, {
      path: "spravainstanci",
      component: _77351d82,
      name: "admin-spravainstanci"
    }, {
      path: "spravamist",
      component: _6a0a2734,
      name: "admin-spravamist"
    }, {
      path: "spravapomucek",
      component: _42ed03a9,
      name: "admin-spravapomucek"
    }, {
      path: "spravauctu",
      component: _633c4010,
      name: "admin-spravauctu"
    }, {
      path: "zmenahesla",
      component: _20ea0a58,
      name: "admin-zmenahesla"
    }]
  }, {
    path: "/databaze",
    component: _0d7ab601,
    name: "databaze"
  }, {
    path: "/kontakt",
    component: _1c2e9ffa,
    name: "kontakt"
  }, {
    path: "/",
    component: _16c07116,
    name: "index"
  }, {
    path: "/:pomucka",
    component: _583ea2c0,
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
