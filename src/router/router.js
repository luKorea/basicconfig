import Vue from 'vue'
import Router from 'vue-router'
import routes from './index'
import { setTitle } from '@/lib/util'
// import { setToken, getToken } from '@/lib/util'
// import store from '@/store'

Vue.use(Router)

const router = new Router({ routes })

// 路由全局守卫
const USER_LOGIN = true
router.beforeEach((to, from, next) => {
  to.meta && setTitle(to.meta.title)
  // 当前访问的页面不是登录页面
  if (to.name !== 'login') {
    // 如果已经登陆
    if (USER_LOGIN) next()
    //  如果没有登录跳转到登录页面
    else next('/login')
  } else { // 当前访问的页面时登录页面
    // 用户已经登录，跳转到首页
    if (USER_LOGIN) next('/home')
    //  用户未登录，跳转到登录页面
    else next()
  }
  /* const token = getToken()
  if (token) {
    // 登录状态
    store.dispatch('authentication', token)
      .then(() => {
        if (to.name === 'login') next('/home')
        else next()
      }).catch(() => {
        setToken('')
        next('/login')
      })
  } else {
    // 未登录状态
    if (to.name === 'login') next()
    else next('/login')
  } */
})

export default router
