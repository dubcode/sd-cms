<template>
  <div class="row">
    <Hero
      :hero-bg="hero_background"
      :hero-title-one="hero_title_one"
      :hero-title-two="hero_title_two"
      :hero-excerpt="hero_excerpt"
      :hero-button-one-text="hero_button_one_text"
      :hero-button-one-url="hero_button_one_url"
      :hero-button-one-class="hero_button_one_class"
      :hero-button-one-target="hero_button_one_target"
    />
    <div class="row">
        <div class="ctr">
            <div class="row two-col">
                <div class="row content">
                    <div v-html="page_content"></div>
                </div>
                <div class="row">
                  <Sidebar />
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
// Import axios
import axios from 'axios'

// export data
export default {

  // Page Name/Id
  name: 'Paper',

  // layout template
  layout: 'default',

  // SSR asyncData Request
  asyncData () {
    return axios.get(process.env.baseUrl + '/pages/229?_embed').then((response) => {
      // get response data - Note that you can't access the `this` instance inside asyncData
      const page = response.data
      console.log(page)
      // return data
      return {
        // returned data
        page,

        // meta vars
        seo_title: page.yoast_head_json.title,
        seo_desc: page.yoast_head_json.og_description,

        // content
        page_title: page.title.rendered,
        page_content: page.content.rendered,

        // hero one
        hero_background: page.acf.hero.background,
        hero_title_one: page.acf.hero.title_one,
        hero_title_two: page.acf.hero.title_two,
        hero_excerpt: page.acf.hero.excerpt,
        hero_button_one_text: page.acf.hero.button_one_title,
        hero_button_one_url: page.acf.hero.button_one_url,
        hero_button_one_class: page.acf.hero.button_one_class,
        hero_button_one_target: page.acf.hero.button_one_target,

      }
    })
  },

  head () {
    return {
      title: this.seo_title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.seo_desc
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.seo_title
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.seo_desc
        }
      ]
    }
  }

}
</script>
