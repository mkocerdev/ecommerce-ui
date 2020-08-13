export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&display=swap',
      },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {color: '#fff'},
  /*
   ** Global CSS
   */
  css: ['@/assets/styles/styles.scss', '@/assets/styles/app.scss'],
  /*
   ** Plugins to load before mounting the App
   */

  plugins: [
    '~/plugins/vue-i18n.js',
    '@/plugins/element-ui',
    '@/plugins/vuelidate',
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxt/typescript-build'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */

  axios: {
    baseURL: 'http://localhost:5000/api',
  },
  /* 
    Nuxt-auth
  */

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/auth/user/login',
            method: 'post',
            propertyName: 'token',
          },
          logout: {
            url: '/auth/logout',
            method: 'delete',
          },
          user: {
            url: '/auth/user/me',
            method: 'get',
            propertyName: 'user',
          },
        },
        // tokenRequired: true,
        tokenType: false,
        globalToken: true,
        // autoFetchUser: true
      },
    },
    redirect: {
      login: '/admin/user/login',
      logout: '/admin/user/login',
      callback: '/admin/user/login',
      home: '/',
    },
  },

  router: {
    middleware: ['auth'],
  },
  /*
   ** Build configuration
   */
  build: {
    vendor: ['vue-i18n'],
    // extractCSS: true,
    transpile: [/^element-ui/],
    /*
     ** You can extend webpack config here
     */

    extend() {},
  },
}
