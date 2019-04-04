import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import saveData from './plugin/saveData'

// 引入用户模块
import user from './module/user'
Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env_NODE_ENV === 'development',
  state,
  mutations,
  actions,
  getters,
  modules: {
    user
  },
  plugins: [ saveData ]
})
