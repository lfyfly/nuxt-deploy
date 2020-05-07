const { MY_ENV, NODE_ENV } = process.env

if (!MY_ENV) throw new Error('MY_ENV is undefined')

// eslint-disable-next-line no-console
console.log('===========envConfig=============', { MY_ENV, NODE_ENV })

const envCofig = {
  dev: {
    MY_ENV,
    API_BASE: 'http://dev-api.abc.com'
  },
  test: {
    MY_ENV,
    API_BASE: 'https://test-api.abc.com'
  },
  prod: {
    MY_ENV,
    API_BASE: 'https://api.abc.com'
    // PUBLIC_PATH:'https://you.cdn.com'  // 当启动nuxt build 完成后， 将.nuxt/dist/client目录的内容上传到您的CDN即可！
  }
}

module.exports = envCofig[MY_ENV]
