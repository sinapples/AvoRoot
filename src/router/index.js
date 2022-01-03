import Vue from 'vue'
import Router from 'vue-router'
import Head from 'vue-head'
import Josh from '@/views/Josh'
import Trang from '@/views/Trang'
import { isNil } from 'lodash'
import store from '@/store'

Vue.use(Router)

/* If you don't know about VueHead, please refer to https://github.com/ktquez/vue-head */

Vue.use(Head, {
  complement: process.env.VUE_APP_TITLE
})

/* If you don't know about VueRouter, please refer to https://router.vuejs.org/ */

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/josh',
      name: 'josh',
      component: Josh,
      meta: {
        authNotRequired: true
      }
    },
    {
      path: '/trang',
      name: 'trang',
      component: Trang,
      meta: {
        authNotRequired: true
      }
    },

    { path: '*', redirect: '/josh' }
  ]
})

/**
 * Handle user redirections
 */
// eslint-disable-next-line consistent-return
router.beforeEach((to, from, next) => {
  if (
    !(to.meta && to.meta.authNotRequired) &&
    isNil(store.state.authentication.user)
  ) {
    const path =
      store.state.authentication.user === null ? '/login' : '/check-login'
    return next(`${path}?redirectUrl=${to.path}`)
  }
  next()
})

export default router
