import { login } from '@/api/user'
import { setToken } from '@/lib/util'
const state = {
  userName: 'korea_demo'
}
const mutations = {

}
const actions = {
  login ({ commit }, { userName, password }) {
    return new Promise((resolve, reject) => {
      login({ userName, password })
        .then(res => {
          if (res.code === 200 && res.data.token) {
            setToken(res.data.token)
            resolve()
          } else {
            reject(new Error('你好帅啊'))
          }
        }).catch(error => {
          reject(error)
        })
    })
  }
}
export default {
  state,
  mutations,
  actions
}
