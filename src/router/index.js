import Home from '../views/Home'
export default [
  {
    path: '/',
    name: 'home',
    alias: '/main', // 设置别名
    component: Home
    // 独立守卫
    /* beforeEnter: (to, from, next) => {
      if (from.name === 'about') alert('这是从about页面跳转的')
      else alert('这不是从about页面来的')
      next()
    } */
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '@/views/About')
  },
  {
    path: '/store',
    name: 'store',
    component: () => import('@/views/vuex/store')
  },
  {
    path: '/count',
    name: 'count',
    component: () => import('@/views/Count')
  },
  {
    path: '/split',
    component: () => import('@/views/SplitPane')
  },
  {
    path: '/render_demo',
    component: () => import('@/views/demo/renderPage')
  },
  {
    path: '/menu',
    component: () => import('@/views/demo/menu')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login')
  },
  {
    path: '*',
    component: () => import('@/views/error')
  }
]
