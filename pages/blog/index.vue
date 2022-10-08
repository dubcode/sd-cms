<template>
  <div class="row">
        <div class="ctr">
            <div class="row two-col">
                <div class="row articles">
                  <h4>Latest News</h4>
                  <ul>
                      <li v-for="post in posts" :key="post.id">
                          <nuxt-link :to="{ path: '/blog/' + post.slug }">
                              <img :src="post.fimg_url" :alt="post.title.rendered" />
                              <span v-html="post.title.rendered"></span>
                          </nuxt-link>
                      </li>
                  </ul>
                </div>
                <div class="row">
                  <Sidebar />
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.articles h4 {
    color: #146636;
    text-transform: uppercase;
    font-size: 2.4rem;
    line-height: 2.8rem;
    font-weight: 700;
    margin: 0 0 2rem 0;
    text-align: center;
}
.articles ul,
.articles li {
    list-style-type: none;
    margin: 0;
    padding: 0;
}
.articles li {
    margin: 0 0 2rem 0;
}
.articles li a,
.articles li span {
    display: block;
}
.articles li a {
    color: var(--primary);
    font-size: 1.2rem;
    font-weight: 600;
    text-decoration: none;
}
.articles li img {
    display: block;
    height: auto;
    width: 100%;
    margin: 0 0 1rem 0;
}

/* 768 */
@media only screen and (min-width: 768px) {
    .articles ul {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        gap: 4rem;
        grid-auto-flow: row;
    }
    @media all and (-ms-high-contrast:none) {
        .articles ul {
            display: -ms-grid;
            -ms-grid-columns: 1fr 1fr;
            -ms-grid-rows: 1fr 1fr;
        }
    }
    .articles li {
        margin: 0;
    }
}

/* 1200 */
@media only screen and (min-width: 1200px) {
    .articles ul {
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr;
    }
    @media all and (-ms-high-contrast:none) {
        .articles ul {
            display: -ms-grid;
            -ms-grid-columns: 1fr 1fr 1fr;
            -ms-grid-rows: 1fr;
        }
    }
}
</style>
<script>
// Import axios
import axios from 'axios'

// export data
export default {

  // Page Name/Id
  name: 'Blog',

  // layout template
  layout: 'default',

  // data
  data () {
    return {
      posts: {},
      page: 1,
      perPage: 10,
      pages: []
    }
  },

  methods: {

    // get posts method
    getPosts () {
        axios.get(process.env.baseUrl + '/posts')
        .then((response) => {
          this.posts = response.data
        })
        .catch((response) => {
          console.log(response)
        })
    },

    // set pages
    setPages () {
      const numberOfPages = Math.ceil(this.posts.length / this.perPage)
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index)
      }
    },

    // paginate
    paginate (posts) {
      const page = this.page
      const perPage = this.perPage
      const from = page * perPage - perPage
      const to = page * perPage
      return posts.slice(from, to)
    }

  },

  // created
  created () {
    this.getPosts()
  },

  // watch
  watch: {
    posts () {
      this.setPages()
    }
  },

  // computed
  computed: {
    displayedPosts () {
      return this.paginate(this.posts)
    }
  }

}
</script>
