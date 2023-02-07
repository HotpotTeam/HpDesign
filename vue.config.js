const path = require('path')
const NODE_ENV = 'development' // 开发环境 打包doc
// const NODE_ENV = 'lib' // 组件库 上传npm

const devConfig = {
  lintOnSave: false,
  // 扩展webpack配置，使packages加入编译
  // 高版本js语法转为低版本
  chainWebpack: config => {
    config.module
      .rule('js')
      .include.add(path.resolve(__dirname, 'packages'))
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        return options
      })
  },
  configureWebpack: {
    resolve:{
      alias:{
        '@pack': path.resolve(__dirname, 'packages'),
      }
    }
  }
}

const buildConfig = {
  configureWebpack: {
    entry: 'packages/index.js',
    output: {
      filename: '[name].js',
      libraryTarget: 'commonjs2',
    },
  },
  outputDir: 'lib',
  productionSourceMap: false,
  ...devConfig
}

module.exports = NODE_ENV === 'development' ? devConfig : buildConfig;