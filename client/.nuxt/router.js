import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _fc27f5f2 = () => interopDefault(import('..\\pages\\admin.vue' /* webpackChunkName: "pages/admin" */))
const _08222cca = () => interopDefault(import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages/admin/index" */))
const _164591c3 = () => interopDefault(import('..\\pages\\admin\\profil.vue' /* webpackChunkName: "pages/admin/profil" */))
const _28fe3d17 = () => interopDefault(import('..\\pages\\admin\\spravainstanci.vue' /* webpackChunkName: "pages/admin/spravainstanci" */))
const _50051e7b = () => interopDefault(import('..\\pages\\admin\\spravamist.vue' /* webpackChunkName: "pages/admin/spravamist" */))
const _40671d74 = () => interopDefault(import('..\\pages\\admin\\spravapomucek.vue' /* webpackChunkName: "pages/admin/spravapomucek" */))
const _536c120d = () => interopDefault(import('..\\pages\\admin\\spravauctu.vue' /* webpackChunkName: "pages/admin/spravauctu" */))
const _b4178726 = () => interopDefault(import('..\\pages\\admin\\zmenahesla.vue' /* webpackChunkName: "pages/admin/zmenahesla" */))
const _3e4ce84c = () => interopDefault(import('..\\pages\\databaze.vue' /* webpackChunkName: "pages/databaze" */))
const _6b9cef50 = () => interopDefault(import('..\\pages\\kontakt.vue' /* webpackChunkName: "pages/kontakt" */))
const _507cb10a = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _04b2e0eb = () => interopDefault(import('..\\pages\\_pomucka.vue' /* webpackChunkName: "pages/_pomucka" */))

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
    component: _fc27f5f2,
    children: [{
      path: "",
      component: _08222cca,
      name: "admin"
    }, {
      path: "profil",
      component: _164591c3,
      name: "admin-profil"
    }, {
      path: "spravainstanci",
      component: _28fe3d17,
      name: "admin-spravainstanci"
    }, {
      path: "spravamist",
      component: _50051e7b,
      name: "admin-spravamist"
    }, {
      path: "spravapomucek",
      component: _40671d74,
      name: "admin-spravapomucek"
    }, {
      path: "spravauctu",
      component: _536c120d,
      name: "admin-spravauctu"
    }, {
      path: "zmenahesla",
      component: _b4178726,
      name: "admin-zmenahesla"
    }]
  }, {
    path: "/databaze",
    component: _3e4ce84c,
    name: "databaze"
  }, {
    path: "/kontakt",
    component: _6b9cef50,
    name: "kontakt"
  }, {
    path: "/",
    component: _507cb10a,
    name: "index"
  }, {
    path: "/:pomucka",
    component: _04b2e0eb,
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
