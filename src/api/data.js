import axios from './index'

export const getDateData = () => {
  return axios.request({
    url: '/getDateData',
    method: 'get'
  })
}
