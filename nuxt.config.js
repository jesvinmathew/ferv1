
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/assets/images/favicon.ico' },

      // { rel: "stylesheet", href: "/assets/css/bootstrap.min.css" },
      { rel: "stylesheet", href: "/assets/css/font-awesome.min.css" },
      { rel: "stylesheet", href: "/assets/css/fontello.css" },
      { rel: "stylesheet", href: "/assets/css/owl-carousel.min.css" },
      { rel: "stylesheet", href: "/assets/css/magnific.min.css" },
      { rel: "stylesheet", href: "/assets/css/animate.css" },
      { rel: "stylesheet", href: "/assets/source/jquery.fancybox.css" },
      { rel: "stylesheet", href: "/assets/css/style.css" },
      { rel: "stylesheet", href: "/assets/css/menu.css" },
      { rel: "stylesheet", href: "/assets/css/responsive.css" },
    ],

    script: [
      { src: "/assets/js/jquery.min.js", type: "text/javascript", body: true },
      { src: "/assets/source/jquery.fancybox.pack.js", type: "text/javascript", body: true },
      // { src: "/assets/js/bootstrap.min.js", type: "text/javascript", body: true },
      { src: "/assets/js/owl.carousel.min.js", type: "text/javascript", body: true },
      { src: "/assets/js/waypoint.js", type: "text/javascript", body: true },
      { src: "/assets/js/custom_googlemap.js", type: "text/javascript", body: true },
      { src: "https://maps.googleapis.com/maps/api/js?key=AIzaSyA_Agsvf36du-7l_mp8iu1a-rXoKcWfs2I", type: "text/javascript", body: true },
      { src: "/assets/js/jquery.counter.min.js", type: "text/javascript", body: true },
      { src: "/assets/js/magnific.min.js", type: "text/javascript", body: true },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#0eb3d6',
    height: '4px'
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv'
  ],
  axios: {
    // proxy: true // Can be also an object with default options
    baseURL: 'http://api.luxmill.nl/api',
    proxy: false
  },

  proxy: {
    '/api/': 'http://api.luxmill.nl/api',
    '/api2/': 'http://admin.luxmill.nl'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
