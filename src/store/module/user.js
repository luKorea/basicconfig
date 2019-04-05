import { login, authorization } from '@/api/user'
import { setToken } from '@/lib/util'
const state = {
  userName: 'korea_demo'
}
const mutations = {

}
const actions = {
  /* 登录 */
  login ({ commit }, { userName, password }) {
    return new Promise((resolve, reject) => {
      login({ userName, password }).then(res => {
        if (res.code === 200 && res.data.token) {
          setToken(res.data.token)
          resolve()
        } else {
          reject(new Error())
        }
      }).catch(error => {
        reject(error)
      })
    })
  },
  /* 验证 */
  authorization ({ commit }, token) {
    return new Promise((resolve, reject) => {
      authorization()
        .then(res => {
          if (parseInt(res.code) === 401) {
            reject(new Error(''))
          } else {
            setToken(res.data.token)
            resolve()
          }
        }).catch(error => {
          reject(error)
        })
    })
  },
  /* 退出登录 */
  logout () {
    setToken('')
  }
}
export default {
  state,
  mutations,
  actions
}
