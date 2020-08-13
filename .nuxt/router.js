import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5a79113e = () => interopDefault(import('..\\pages\\admin\\brands\\index.vue' /* webpackChunkName: "pages/admin/brands/index" */))
const _db4f28de = () => interopDefault(import('..\\pages\\admin\\categories\\index.vue' /* webpackChunkName: "pages/admin/categories/index" */))
const _4ea0232e = () => interopDefault(import('..\\pages\\admin\\home\\index.vue' /* webpackChunkName: "pages/admin/home/index" */))
const _135440a8 = () => interopDefault(import('..\\pages\\admin\\orders\\index.vue' /* webpackChunkName: "pages/admin/orders/index" */))
const _0a188fee = () => interopDefault(import('..\\pages\\admin\\products\\index.vue' /* webpackChunkName: "pages/admin/products/index" */))
const _7690efea = () => interopDefault(import('..\\pages\\admin\\settings\\index.vue' /* webpackChunkName: "pages/admin/settings/index" */))
const _6f076ac2 = () => interopDefault(import('..\\pages\\admin\\variants\\index.vue' /* webpackChunkName: "pages/admin/variants/index" */))
const _1fd083d9 = () => interopDefault(import('..\\pages\\admin\\user\\login.vue' /* webpackChunkName: "pages/admin/user/login" */))
const _08705a63 = () => interopDefault(import('..\\pages\\admin\\user\\register.vue' /* webpackChunkName: "pages/admin/user/register" */))
const _6d03c38e = () => interopDefault(import('..\\pages\\admin\\categories\\_id.vue' /* webpackChunkName: "pages/admin/categories/_id" */))
const _821bae9e = () => interopDefault(import('..\\pages\\admin\\products\\_id.vue' /* webpackChunkName: "pages/admin/products/_id" */))
const _765ad7b8 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/admin/brands",
    component: _5a79113e,
    name: "admin-brands"
  }, {
    path: "/admin/categories",
    component: _db4f28de,
    name: "admin-categories"
  }, {
    path: "/admin/home",
    component: _4ea0232e,
    name: "admin-home"
  }, {
    path: "/admin/orders",
    component: _135440a8,
    name: "admin-orders"
  }, {
    path: "/admin/products",
    component: _0a188fee,
    name: "admin-products"
  }, {
    path: "/admin/settings",
    component: _7690efea,
    name: "admin-settings"
  }, {
    path: "/admin/variants",
    component: _6f076ac2,
    name: "admin-variants"
  }, {
    path: "/admin/user/login",
    component: _1fd083d9,
    name: "admin-user-login"
  }, {
    path: "/admin/user/register",
    component: _08705a63,
    name: "admin-user-register"
  }, {
    path: "/admin/categories/:id",
    component: _6d03c38e,
    name: "admin-categories-id"
  }, {
    path: "/admin/products/:id",
    component: _821bae9e,
    name: "admin-products-id"
  }, {
    path: "/",
    component: _765ad7b8,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
