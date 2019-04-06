const path = require('path')

const resolve = dir => path.join(__dirname, dir)

const BASE_URL = process.env.NODE_ENV === 'production' ? '/' : '/'

module.exports = {
  lintOnSave: false,
  baseUrl: BASE_URL,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
    config.module
      .rule('vue')
      .use('iview')
      .loader('iview-loader')
      .options({ prefix: false })
  },
  // 打包时不生成.map文件
  productionSourceMap: false,
  // 配置代理
  devServer: {
    // proxy: 'http://localhost:3000'
     proxy: 'http://172.30.95.247:9090'
  }

}
