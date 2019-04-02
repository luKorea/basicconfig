// 设置请求地址，根据不同环境设置不同地址
const baseUrl = process.env.NODE_ENV === 'production'
  ? 'http://www.korea.com'
  : 'http://localhost:3000'

export default baseUrl
