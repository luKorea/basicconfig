import axios from './index'

export const getDateData = () => {
  return axios.request({
    url: '/getDateData',
    method: 'get'
  })
}
export const getFolderData = () => {
  return axios.request({
    url: '/getFolderData',
    method: 'get'
  })
}

export const getFileData = () => {
  return axios.request({
    url: '/getFileData',
    method: 'get'
  })
}

