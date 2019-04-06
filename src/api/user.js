// 调用自定义的axios方法
import axios from './index'

export const getUserInfo = ({ userId }) => {
  return axios.request({
    url: '/getUserInfo',
    method: 'get',
    data: {
      userId
    }
  })
}
export const login = ({ userName, password }) => {
  return axios.request({
    url: '/index/login',
    method: 'post',
    data: {
      userName,
      password
    }
  })
}
export const authorization = () => {
  return axios.request({
    url: '/users/authorization'
  })
}

export const postData = (data) => {
  return axios.request({
    url: '/formData',
    method: 'post',
    data: data
  })
}
