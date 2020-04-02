module.exports = {
    devServer: {
      proxy: {
        '/api': {
          pathRewrite: { '^/api': '' },
          target: 'http://localhost:3000'
        }
      }
    }
  }