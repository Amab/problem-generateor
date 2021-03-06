module.exports = {
  configureWebpack: {
    devtool: 'source-map'
  },
  devServer: {
    proxy: {
      '^/api': {
        host: 'localhost',
        target: 'https://math.vpv.io',
        ws: true,
        changeOrigin: true,
        headers: {
          host: 'math.vpv.io'
        }
      },
      '/login': {
        target: 'https://math.vpv.io',
        host: 'localhost',
        changeOrigin: false,
        headers: {
          host: 'math.vpv.io'
        },
        pathRewrite: {
          '/login': '/login'
        }
      },
      '/swagger-ui.html': {
        target: 'https://math.vpv.io',
        host: 'localhost',
        changeOrigin: false,
        headers: {
          host: 'math.vpv.io'
        },
        pathRewrite: {
          '/swagger-ui.html': '/swagger-ui.html'
        }
      },
      '/webjars': {
        target: 'https://math.vpv.io',
        host: 'localhost',
        changeOrigin: false,
        headers: {
          host: 'math.vpv.io'
        },
        pathRewrite: {
          '/webjars': '/webjars'
        }
      },
      '/swagger-resources': {
        target: 'https://math.vpv.io',
        host: 'localhost',
        changeOrigin: false,
        headers: {
          host: 'math.vpv.io'
        },
        pathRewrite: {
          '/swagger-resources': '/swagger-resources'
        }
      },
      '/v2': {
        target: 'https://math.vpv.io',
        host: 'localhost',
        changeOrigin: false,
        headers: {
          host: 'math.vpv.io'
        },
        pathRewrite: {
          '/v2': '/v2'
        }
      },

      '/signin': {
        target: 'https://math.vpv.io',
        host: 'localhost',
        changeOrigin: false,
        headers: {
          host: 'math.vpv.io'
        },
        logLevel: 'debug',
        pathRewrite: function (path, req) {
          let resultPath = path + '?key=local'
          console.log('Path returned', resultPath)
          return resultPath
        }
      },
      '/logout': {
        target: 'https://math.vpv.io',
        host: 'localhost',
        changeOrigin: false,
        headers: {
          host: 'math.vpv.io'
        },
        pathRewrite: function (path, req) {
          let resultPath = path + '?key=local'
          console.log('Path returned', resultPath)
          return resultPath
        }
      }
    }
  }
}
