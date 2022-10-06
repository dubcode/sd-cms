import axios from 'axios'
export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Paper Recycling - SD Waste',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        hid: 'description',
        name: 'description',
        content: 'SD Waste is family paper recycling centre serving NW England, Yorkshire &amp; North Wales. We will collect your recycling and also offer confidential document destruction.'
      },
      // open graph
      {
        hid: 'og:title',
        name: 'og:title',
        property: 'og:title',
        content: 'Paper Recycling - SD Waste'
      },
      {
        hid: 'og:description',
        name: 'og:description',
        property: 'og:description',
        content: 'SD Waste is family paper recycling centre serving NW England, Yorkshire &amp; North Wales. We will collect your recycling and also offer confidential document destruction.'
      }
    ],
    webfontloader: {
      google: {
        families: ['Montserrat:400,500,600,700', 'Open+Sans:300,400,800']
      }
    },
    link: [
      // add favicon
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },

      // defer non critical below the fold css
      { rel: 'preload', as: 'style', href: '/css/style.css', onload: 'this.rel="stylesheet"' }
    ]
  },

  /** Set Api Base URL Globally */
  env: {
    baseUrl: process.env.BASE_URL || 'https://clients.theartlab.co.uk/sd-api/wp-json/wp/v2'
  },

  // generate static routes
  // make sure nuxt server is running before $ npm run generate
  generate: {
    routes () {
      return axios.get('https://clients.theartlab.co.uk/sd-api/wp-json/wp/v2/posts').then((res) => {
        return res.data.map((post) => {
          return {
            route: '/blog/' + post.slug + '/' + post.id + '/',
            payload: (post)
          }
        })
      })
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/css/critical.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [

  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    ['nuxt-lazy-load', {
      defaultImage: '/images/lazy.gif',
      loadingClass: false,
      loadedClass: false,
      appendClass: false,
      
    }]
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    // baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
      theme_color: '#146636'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {

    // minify build
    html: {
      minify: {
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true,
        preserveLineBreaks: false,
        collapseWhitespace: true
      }
    },
  }

}
