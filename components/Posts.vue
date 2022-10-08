<template>
  <div class="row posts">
    <div class="ctr">
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
  </div>
</template>
<style scoped>
.posts h4 {
    color: #146636;
    text-transform: uppercase;
    font-size: 2.4rem;
    line-height: 2.8rem;
    font-weight: 700;
    margin: 0 0 2rem 0;
    text-align: center;
}
.posts ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}
.posts li {
    margin: 0 0 2rem 0;
}
.posts li a,
.posts li span {
    display: block;
}
.posts li a {
    color: var(--primary);
    font-size: 1.2rem;
    font-weight: 600;
    text-decoration: none;
}
.posts li img {
    display: block;
    height: auto;
    width: 100%;
    margin: 0 0 1rem 0;
}

/* 768 */
@media only screen and (min-width: 768px) {
    .posts ul {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        gap: 4rem;
        grid-auto-flow: row;
    }
    @media all and (-ms-high-contrast:none) {
        .posts ul {
            display: -ms-grid;
            -ms-grid-columns: 1fr 1fr;
            -ms-grid-rows: 1fr 1fr;
        }
    }
}

/* 1200 */
@media only screen and (min-width: 1200px) {
    .posts ul {
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr;
    }
    @media all and (-ms-high-contrast:none) {
        .posts ul {
            display: -ms-grid;
            -ms-grid-columns: 1fr 1fr 1fr 1fr;
            -ms-grid-rows: 1fr;
        }
    }
    .posts li {
        margin: 0;
    }
}
</style>
<script>
// Import axios
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
</script>
