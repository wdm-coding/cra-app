const path = require('path')
const CracoLessPlugin = require('craco-less')
module.exports = {
  // 开发环境配置
  devServer: {
    // 不立即打开浏览器
    open: false,
    // 端口号
    port: 3000,
    // 跨域配置
    proxy: {
      '/api': {
        target: 'http://172.19.5.39:3001',
        changeOrigin: true,
        logLevel: 'info',
        pathRewrite: { '^/api': '/api' }
      },
      '/registerApi': {
        target: 'https://118.183.58.131:8180',
        changeOrigin: true,
        secure: false,
        logLevel: 'info',
        pathRewrite: { '^/registerApi': '' }
      }
    },
    client: {
      overlay: {
        // 关闭错误提示遮罩层
        errors: false,
        warnings: false,
        runtimeErrors: false
      }
    }
  },
  // 配置别名
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {},
            javascriptEnabled: true
          }
        },
        // 启用 CSS Modules
        cssLoaderOptions: {
          modules: {
            auto: (resourcePath) => {
              // 所有 .less 文件默认使用 CSS Modules
              // 排除 .global.less 文件和 node_modules 和 styles 文件夹下的文件
              return (
                !resourcePath.includes('.global.') &&
                !resourcePath.includes('styles') &&
                !resourcePath.includes('node_modules')
              )
            },
            localIdentName: '[name]__[local]--[hash:base64:5]',
            exportLocalsConvention: 'camelCase'
          }
        }
      }
    }
  ]
}
