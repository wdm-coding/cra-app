const path = require('path')
const CracoLessPlugin = require('craco-less')
module.exports = {
  // 开发环境配置
  devServer: {
    proxy: {
      '/api': {
        target: 'http://172.19.5.39:3001',
        changeOrigin: true,
        logLevel: 'debug',
        pathRewrite: { '^/api': '/api' }
      }
    }
  },
  // 配置别名
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
    configure: (webpackConfig) => {
      // 找到ReactRefreshWebpackPlugin并修改配置
      const plugin = webpackConfig.plugins.find((plugin) => plugin.constructor.name === 'ReactRefreshWebpackPlugin')
      if (plugin) {
        plugin.options.overlay = false
      }
      return webpackConfig
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
