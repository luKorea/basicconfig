import Cookies from 'js-cookie'
export const setTitle = (title) => {
  window.document.title = title || 'admin'
}
// 设置token
export const setToken = (token, tokenName = 'token') => {
  Cookies.set(tokenName, token)
}
// 获取token
export const getToken = (tokenName = 'token') => {
  return Cookies.get(tokenName)
}
