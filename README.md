# SD Nuxt App

To format this readme help can be found here [Read Me Styling](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax).

## Contents

- [Roadmap](#roadmap)
- [Project Specifications](#project-specifications)
- [Project Setup](#project-setup)
- [Repository](#git-repository)
- [WordPress API](#wordpress-api)
  - [API Setup](#api-setup)
  - [API Access](#api-access)
  - [WordPress Blocks](#wordpress-blocks)
  - [Featured Images](#featured-images)
- [Nuxt Build Procedure](#nuxt-build-procedure)
  - [Nuxt Config](#nuxt-build-procedure)
    - [Meta Tags & Open Graph](#meta-tags--open-graph)
    - [Critical CSS](#critical-css)
    - [Non Critical CSS & Favicon](#non-critical-css--favicon)
    - [WebFont Loader](#webfont-loader)
    - [PWA Manifest](#pwa-manifest)
    - [Generate Basic Routes](#generate-routes)
    - [Lazy Loading](#lazy-loading)
    - [Image Compression](#image-compression)
  - [Processing Data](#processing-data)
    - [Environmental Variables](#environmental-variables)
    - [SSR AsyncData Requests](#ssr-async-data-requests)
    - [Component Level Data Requests](#component-level-data-requests)
    - [Props](#props)
  - [Deployment](#deployment)
    - [Minification](#minification)
    - [Post CSS](#post-css)
    - [Generate](#generate)
  - [Components](#components)
  - [Layouts](#layouts)
  - [Pages](#pages)

## Roadmap

- [x] Setup Nuxt & Git
- [x] Setup Nuxt config
- [x] Setup Back End Admin
- [x] Setup and Test API Connection
- [x] Setup Custom Fields and Test Custom Endpoints
- [x] Setup Layout Templates
- [ ] Setup All Components
- [ ] Setup All Pages & Categories
- [ ] SEO & Meta Review
- [ ] Setup and Test Forms
- [x] Image Compression
- [x] Minification
- [x] Post CSS
- [ ] Browser Test
- [ ] Performance Test
- [ ] Deploy
- [ ] Test Server Caching
- [ ] Tighten Server and Login Security
- [ ] Final Forms Test
- [ ] Final Browser Test
- [ ] Final Performance Test
- [ ] Project Complete

## Project Specifications

### `framework`
Vue.js/Nuxt.js - v2.15.8
[Nuxt documentation](https://nuxtjs.org/docs/get-started/installation).

### `node version`
12.0.0 64

### `dependencies`
- @nuxtjs/axios: ^5.13.6
- @nuxtjs/pwa: ^3.3.5
- core-js: ^3.19.3
- nuxt: ^2.15.8
- nuxt-webfontloader: ^1.1.0
- vue: ^2.6.14
- vue-server-renderer: ^2.6.14
- vue-template-compiler: ^2.6.14
- webpack: ^4.46.0

## Project Setup

This project requires node version >= 12.0.0 in 64 bit mode

If you have Windows Node Version Manager installed you can run the following commands

#### List all currently installed node versions
```bash
nvm list
```

#### To install node versions
```bash
nvm install 12.0.0 64
```
#### To use node versions
```bash
nvm use 12.0.0 64
```
#### CD into app root directory
```bash
cd c:\my-projects\project-name
```

#### Create Nuxt App
```bash
npx create-nuxt-app app
```

Command prompt will ask you some questions, see what to select below.

- Project name = Your project name or default
- Project description = Your project description or default
- Choose features to install ignore all and include PWA and Axios
- Custom server frameworks = None
- UI framework = None
- Testing framework = None
- Nuxt Mode = Universal/SSR

## Git Repository

[https://github.com/dubcode/sd-cms.git](https://github.com/dubcode/sd-cms.git).

#### CD into project folder
```bash
cd app
```

#### Initialise Git
```bash
git init
```

#### Pull remote repository - main branch
```bash
git pull https://github.com/dubcode/sd-cms.git master
```

#### Check Git status
```bash
git status
```

#### Connect local directory to remote repository
```bash
git remote add origin https://github.com/dubcode/sd-cms.git
```

#### Add files and changes to commit
```bash
git add -A
```

#### Commit changes
```bash
git commit -m “my commit”
```
#### Push commit to remote repository - master branch
```bash
git push origin master
```

## WordPress API

```diff
- !Important: When working with the WordPress Rest API you will want to clear the cache frequently as missing or new data can cause issues. In our case I suggest using SG Optimizer to allow you to clear the cache from wp-admin
```

### `API Setup`

WordPress Theme
[https://en-gb.wordpress.org/themes/intentionally-blank/](https://en-gb.wordpress.org/themes/intentionally-blank/)

ACF Plugin
[https://en-gb.wordpress.org/plugins/advanced-custom-fields/](https://en-gb.wordpress.org/plugins/advanced-custom-fields/)

ACF to REST API Plugin
[https://wordpress.org/plugins/acf-to-rest-api/](https://wordpress.org/plugins/acf-to-rest-api/)

Yoast Plugin
[plugin](https://wordpress.org/plugins/wordpress-seo/)
[API Docs](https://developer.yoast.com/customization/apis/rest-api/)

### `API Access`

Development API Admin
[https://your-domain.com/wp-admin/](https://your-domain.com/wp-admin/)

Development API Endpoint
[https://your-domain.com/wp-json/wp/v2](https://your-domain.com/wp-json/wp/v2)

Posts API Endpoint
[https://your-domain.com/wp-json/wp/v2](https://your-domain.com/wp-json/wp/v2/posts)

Post ID API Endpoint
[https://your-domain.com/wp-json/wp/v2](https://your-domain.com/wp-json/wp/v2/posts/13)

Pages API Endpoint
[https://your-domain.com/wp-json/wp/v2](https://your-domain.com/wp-json/wp/v2/pages)

Page ID API Endpoint
[https://your-domain.com/wp-json/wp/v2](https://your-domain.com/wp-json/wp/v2/pages/13)

### `WordPress Blocks`

To consume WordPress Gutenberg Blocks we need to copy and add the Gutenberg Base CSS to our assets folder

[~assets/css/blocks.min.css](https://github.com/dubcode/sd-cms/blob/master/assets/css/blocks.min.css)

And we need to link the CSS  in our nuxt.config.js

```javascript
css: [
    '~assets/css/blocks.min.css'
],
```

### `Featured Images`

If you want to use WordPress featured images you will need add a new endpoint to the WordPress API. We can do this by adding the following snippet to the themes functions.php file. We can then refer to "post.fimg" in our API calls.

functions.php

```javascript
// add featured image to rest api
add_action('rest_api_init', 'register_rest_images' );
function register_rest_images(){
    register_rest_field( array('post'),
        'fimg_url',
        array(
            'get_callback'    => 'get_rest_featured_image',
            'update_callback' => null,
            'schema'          => null,
        )
    );
}
function get_rest_featured_image( $object, $field_name, $request ) {
    if( $object['featured_media'] ){
        $img = wp_get_attachment_image_src( $object['featured_media'], 'app-thumb' );
        return $img[0];
    }
    return false;
}

```

## Nuxt Build Procedure

### Nuxt Config

### `Meta Tags & Open Graph`

Open up nuxt.config.js and add the following to add site wide meta and open graph tags for SEO

```javascript
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
  },
```

### `Critical CSS`

Create a /css/ folder in our assets directory and create a blank css file named critical.css, then we can add this to our nuxt.config CSS path.

```javascript
css: [
    '~assets/css/critical.css'
],
```
Then add reset and critical styles such as the example below

```css

/* VARS */
:root {
    --black: #111;
    --l-black: #222;
    --dark: #0a1535;
    --grey: #bdbdbd;
    --l-grey: #e1e1e1;
    --white: #fafafa;
    --primary: #1f8bef;
    --primary-dark: #2d4280;
  }
  /* RESET */
  *, *:before, *:after {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-family: "Montserrat", sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }
  body {
    background: #fafafa;
    overflow-x: hidden;
    overflow-y: scroll;
  }
  div {
    display: block;
  }
  a:focus, button:focus, input:focus, textarea:focus, :focus {
    outline: none;
  }
  img {
    display: block;
    height: auto;
    width: 100%;
  }
  h1, h2, h3, h4, h5, h6, ul, ol, p {
    -webkit-margin-before: 0;
    margin-block-start: 0;
    -webkit-margin-after: 0;
    margin-block-end: 0;
    -webkit-margin-start: 0;
    margin-inline-start: 0;
    -webkit-margin-end: 0;
    margin-inline-end: 0;
  }
  /* BLOCKS */
  .row {
    display: block;
    float: left;
    width: 100%;
  }
  .ctr {
    display: block;
    margin: 0 auto;
    max-width: 1280px;
    padding: 1rem;
    width: 100%;
  }
  .row::after, .ctr::after {
    content: "";
    display: block;
    clear: both;
  }
  .flex {
    text-align: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
  .flex-l {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
  }
  .flex-r {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
  }
  .fill {
    height: 100%;
    width: 100%;
  }
  .fill-vh {
    height: 100vh;
  }
  .page-enter-active, .page-leave-active {
    transition-property: opacity;
    transition-timing-function: ease-in-out;
    transition-duration: 200ms;
  }
  .page-enter, .page-leave-to {
    opacity: 0;
  }
```

### `Non Critical CSS & Favicon`

Create a /css/ folder in our static directory and create a blank css file named style.css. Whilst we are at it we can also add our favicon into our static folder and then link them up to our head in nuxt.config.js

Add this to the head section

```javascript
link: [
    // add favicon
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    // defer non critical below the fold css
    { rel: 'preload', as: 'style', href: '/css/style.css', onload: 'this.rel="stylesheet"' }
]
```

### `WebFont Loader`

To enable google fonts we can use Nuxt WebFont Loader
[https://www.npmjs.com/package/nuxt-webfontloader](https://www.npmjs.com/package/nuxt-webfontloader)


```bash
npm i nuxt-webfontloader
```
nuxt.config.js head section

```javascript
webfontloader: {
    google: {
    families: ['Montserrat:400,500,600,800', 'Open+Sans:300,400,800']
    }
},
```
Also add it to the nuxt.config.js modules section

```javascript
{
  modules: [
    'nuxt-webfontloader',
  ],
}
```

### `PWA Manifest`

We need to alter the pwa manifest to pass the lighthouse tests. Replace the existing manifest with the below.

```javascript
pwa: {
    manifest: {
        lang: 'en',
        theme_color: '#146636'
    }
},
```

### `Generate Routes`

To generate static pages or posts we need create routes based on the API data. Below is a basic setup I will expand on further in the project.

Add this code at the top of nuxt.config.js

```javascript
import axios from 'axios'
```
And this code below the header in nuxt.config.js

```javascript
  generate: {
    routes () {
      return axios.get('https://your-domain.com/wp-json/wp/v2/posts').then((res) => {
        return res.data.map((post) => {
          return {
            route: '/blog/' + post.slug + '/' + post.id + '/',
            payload: (post)
          }
        })
      })
    }
  },
```
```diff
- !Important: Be sure nuxt server is running before running the generate commands
```

```bash
npm run generate
```

### `Lazy Loading`

Add lazy loading to defer below the fold images and videos etc
[https://www.npmjs.com/package/nuxt-lazy-load](https://www.npmjs.com/package/nuxt-lazy-load)

```bash
npm i nuxt-lazy-load
```
nuxt.config modules section

```javascript
modules: [
  'nuxt-lazy-load'
]
```
Or

```javascript
modules: [
  ['nuxt-lazy-load', {
    // Your options
  }]
]
```

See the [documentation](https://www.npmjs.com/package/nuxt-lazy-load) for usage.

### `Image Compression`

Depending how your API serves images will depend on how you go about compression but it is important this is setup and tested before deployment. In the case of this particular project WordPress is handling the image compression so we could use a plugin such "Smush" or "EWWW" etc. But in our case our host providor (siteground) has server level image compression which creates a webp copy of all images and then serves these by default with progressive fallbacks to the original jpeg, png etc so we can simply reference images as normal and the webp version will be served up by the server.

### Processing Data

### `Environmental Variables`

Add the environmental variable baseUrl to the nuxt.config.js below the head section allowing simple access to the API root.

```javascript
env: {
  baseUrl: process.env.BASE_URL || 'https://your-domain.com/wp-json/wp/v2'
},
```
Now we can make get requests to the API such as the following

```javascript
  process.env.baseUrl + '/posts'
```
### `SSR AsyncData Requests`

To ensure data is SSR (Server Side Rendered) we need perform our data requests at page level. Data from components using this method will not be SSR so think carefully about how pages and components are constructed and try to use props to pass data to reusable components where appropriate. 

Here is an example of an Nuxt asyncData request using the baseUrl environmental variable on a Nuxt page.

```javascript
// Import axios
import axios from 'axios'
// export data
export default {

  // Page Name/Id
  name: 'IndexPage',

  // layout template
  layout: 'default',

  // SSR asyncData Request
  asyncData () {
    return axios.get(process.env.baseUrl + '/pages/13?_embed').then((response) => {
    
      // get response data - Note that you can't access the `this` instance inside asyncData
      const page = response.data
      console.log(page)
      
      // return data
      return {
        // returned data
        page,
        // assign data vars
        title: page.title.rendered,
        heroTitle: page.acf.hero_title
      }
    })
  }
}
```

### `Component Level Data Requests`

AsyncData requests will not work at component level so for components we can use the default axios method.

```javascript
import axios from 'axios'

// export data
export default {

  // data
  data () {
    return {
      posts: {}
    }
  },

  methods: {

    // get posts method
    getPosts () {
        axios.get(process.env.baseUrl + '/posts?per_page=4')
        .then((response) => {
          this.posts = response.data
        })
        .catch((response) => {
          console.log(response)
        })
    }
  },

  // created
  created () {
    this.getPosts()
  },

}
```

### `Props`

See below as an example of a component setup to consume page level data using props. Note props should use camel case for naming ie, "myPropName" and lowercase hyphenated when referencing the prop ie, "my-prop-name".

components/hero.vue

<script></script>
```javascript
export default {
    name: 'hero',
    props: [
    'heroTitle'
    ]
}
```
<template></template>
```html
    <h1>{{ heroTitle }}</span></h1>
```

pages/index.vue

<template></template>
```html
    <Hero
      :hero-bg="post.acf.thumb"
      :hero-title="post.title.rendered"
    />
```

<script></script>
```javascript
// Import axios
import axios from 'axios'

// export data
export default {

  // Page Name/Id
  name: 'IndexPage',

  // layout template
  layout: 'default',

  // SSR asyncData Request
  asyncData () {
    return axios.get(process.env.baseUrl + '/pages/13?_embed').then((response) => {
      // get response data - Note that you can't access the `this` instance inside asyncData
      const page = response.data
      // return data
      return {
        // returned data
        page,
        // assign data vars
        title: page.title.rendered,
        heroOneTitleOne: page.acf.h1_tl_1
      }
    })
  }
}
```

### Deployment

### `Minification`

Before we deploy we need to add some minification to our build config. To do this we can add the following code which will automatically fully minify all CSS and HTML when we run the generate command.

nuxt.config.js

```javascript
build: {
    // minify
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
    }

}
```

### `Post CSS`

We can further compress our app with Post CSS which can be used to auto remove any unused CSS. Simply add the following snippet into the build config.

nuxt.config.js

```javascript
build: {

    // post css
    postcss: {
      // Add plugin names as key and arguments as value
      // Install them before as dependencies with npm or yarn
      plugins: {
        // Disable a plugin by passing false as value
        'postcss-import': {},
        'postcss-url': {},
        // to edit target browsers: use "browserslist" field in package.json
        'autoprefixer': {}
      },
      preset: {
        // Change the postcss-preset-env settings
        autoprefixer: {
          grid: true
        }
      }
    }
    
}
```

### `Generate`

To ensure we do not serve legacy code to modern browsers we can add the --modern=server flag to the scripts > build command inside package.json

```javascript
"build": "nuxt build --modern=server"
```

Also add the -m flag to the scripts > generate command also in package.json

```javascript
"generate": "nuxt generate -m"
```

Then we can run the generate command as normal

```bash
npm run generate
```

You will know this is working when we run the generate command and receive a new prompt that displays "modern compiled successfully" in blue text.

## Components

### `Header`

A site wide header component containing the logo and navigation

### `Footer`

A site wide footer component

### `Sidebar`

Sidebar for the blog layout

### `Hero`

 A reusable hero component, good example of the use of props

### `Ticker`

Animated News Ticker

### `Mission`

Mission Statement

### `Call Back`

Call Back Form

### `Icons`

Service Icons Grid

### `Reviews Banner`

Reviews from Google

## Layouts

### `Default`

Main full width template

### `Blog`

Sidebar template for the blog

## Pages

- [ ] Home
- [ ] About Us
  - [ ] Company Information
  - [ ] Meet The Team
- [ ] Recycling Services
  - [ ] Paper Recycling
  - [ ] Cardboard Recycling
  - [ ] Plastic Recycling
  - [ ] Carbon Neutral
  - [ ] Material Handling & Equipment
  - [ ] Office Clearance
- [ ] Shredding Services
  - [ ] Shredding Overview
  - [ ] Document Shredding
  - [ ] Confidential Waste Destruction
- [ ] Reviews
- [ ] Blog
- [ ] Contact Us
  - [ ] Jobs
