<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        nuxt-deploy
      </h1>
      <h2 class="subtitle">
        nuxt deploy bash script
      </h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub lfy 1
        </a>
        <ul>
          <li>NODE_ENV:{{ NODE_ENV }}</li>
          <li>MY_ENV:{{ MY_ENV }}</li>
          <li>API_BASE:{{ API_BASE }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  data() {
    return {
      NODE_ENV: process.env.NODE_ENV,
      MY_ENV: process.env.MY_ENV,
      API_BASE: process.env.API_BASE
    }
  },
  beforeCreate() {
    // eslint-disable-next-line no-console
    console.log('beforeCreate', process.env.API_BASE)
  },
  mounted() {
    // eslint-disable-next-line no-console
    console.log('mounted', process.env.API_BASE)
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
