module.exports = {
  apps: [
    {
      name: 'nuxt-deploy-test',
      script: './server/index.js',
      env: {
        NODE_ENV: 'production',
        MY_ENV: 'test',
        PORT: 3001
      }
    },
    {
      name: 'nuxt-deploy-prod',
      script: './server/index.js',
      env: {
        NODE_ENV: 'production',
        MY_ENV: 'prod',
        PORT: 3002
      }
    }
  ]
}
