// 封装 axios
import axios from 'axios'
import baseUrl from '@/config/'

class HttpRequest {
  constructor (baseURl = baseUrl) {
    this.baseURl = baseUrl
    // 设置队列
    this.queue = {}
  }
  // 设置全局配置
  getInsideConfig () {
    const config = {
      baseUrl: this.baseURl,
      headers: {}
    }
    return config
  }
  // 定义全局拦截器
  interceptors (instance, url) {
  // 请求拦截器
    instance.interceptors.request.use(config => {
      if (Object.keys(this.queue).length) {}
      this.queue[url] = true
      return config
    }, error => {
      return Promise.reject(error)
    })
    //  响应拦截器
    instance.interceptors.response.use(res => {
      delete this.queue[url]
      const { data, status } = res
      return { data, status }
    }, error => {
      delete this.queue[url]
      return Promise.reject(error)
    })
  }
  request (options) {
    const instance = axios.create()
    options = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance, options.url)
    return instance(options)
  }
}
export default HttpRequest
