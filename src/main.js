import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/index'
import Bus from './bus'
// 判断不是生产环境下才使用mock数据
if (process.env_NODE_ENV !== 'production') require('./mock/index')

Vue.config.productionTip = false
Vue.prototype.$bus = Bus

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
