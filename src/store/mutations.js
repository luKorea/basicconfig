import vue from 'vue'
const mutations = {
  SET_APP_NAME (state, params) {
    state.appName = params
  },
  SET_APP_VERSION (state) {
    vue.set(state, 'appVersion', 'V3.0.1')
  }
}
export default mutations
