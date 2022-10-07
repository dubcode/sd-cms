<template>
  <div class="row">
    <Hero
      :hero-bg="hero_one_background"
      :hero-title-one="hero_one_title_one"
      :hero-title-two="hero_one_title_two"
      :hero-excerpt="hero_one_excerpt"
      :hero-button-one-text="hero_one_button_one_text"
      :hero-button-one-url="hero_one_button_one_url"
      :hero-button-one-class="hero_one_button_one_class"
      :hero-button-one-target="hero_one_button_one_target"
      :hero-button-two-text="hero_one_button_two_text"
      :hero-button-two-url="hero_one_button_two_url"
      :hero-button-two-class="hero_one_button_two_class"
      :hero-button-two-target="hero_one_button_two_target"
    />
    <Icons />
    <Mission
      :mission-title="mission_title"
      :mission-excerpt="mission_excerpt"
      :mission-button-title="mission_button_title"
      :mission-button-url="mission_button_url"
    />
    <CallBack />
    <ReviewsBanner />
    <Hero
      :hero-bg="hero_two_background"
      :hero-title-one="hero_two_title_one"
      :hero-title-two="hero_two_title_two"
      :hero-excerpt="hero_two_excerpt"
      :hero-button-one-text="hero_two_button_one_text"
      :hero-button-one-url="hero_two_button_one_url"
      :hero-button-one-class="hero_two_button_one_class"
      :hero-button-one-target="hero_two_button_one_target"
      :hero-button-two-text="hero_two_button_two_text"
      :hero-button-two-url="hero_two_button_two_url"
      :hero-button-two-class="hero_two_button_two_class"
      :hero-button-two-target="hero_two_button_two_target"
    />
    <WhyChoose
      :why-title="why_title"
      :why-excerpt="why_excerpt"
      :why-button-title="why_button_title"
      :why-button-url="why_button_url"
    />
    <Hero
      :hero-bg="hero_three_background"
      :hero-title-one="hero_three_title_one"
      :hero-title-two="hero_three_title_two"
      :hero-excerpt="hero_three_excerpt"
      :hero-button-one-text="hero_three_button_one_text"
      :hero-button-one-url="hero_three_button_one_url"
      :hero-button-one-class="hero_three_button_one_class"
      :hero-button-one-target="hero_three_button_one_target"
      :hero-button-two-text="hero_three_button_two_text"
      :hero-button-two-url="hero_three_button_two_url"
      :hero-button-two-class="hero_three_button_two_class"
      :hero-button-two-target="hero_three_button_two_target"
    />
    <Testimonial />
    <Posts />
    <Accreditations />
  </div>
</template>

<script>
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

        // meta vars
        seo_title: page.yoast_head_json.title,
        seo_desc: page.yoast_head_json.og_description,

        // hero one
        hero_one_background: page.acf.hero_one.background,
        hero_one_title_one: page.acf.hero_one.title_one,
        hero_one_title_two: page.acf.hero_one.title_two,
        hero_one_excerpt: page.acf.hero_one.excerpt,
        hero_one_button_one_text: page.acf.hero_one.button_one_title,
        hero_one_button_one_url: page.acf.hero_one.button_one_url,
        hero_one_button_one_class: page.acf.hero_one.button_one_class,
        hero_one_button_one_target: page.acf.hero_one.button_one_target,
        hero_one_button_two_text: page.acf.hero_one.button_two_title,
        hero_one_button_two_url: page.acf.hero_one.button_two_url,
        hero_one_button_two_class: page.acf.hero_one.button_two_class,
        hero_one_button_two_target: page.acf.hero_one.button_two_target,

        // mission
        mission_title: page.acf.mission.title,
        mission_excerpt: page.acf.mission.excerpt,
        mission_button_title: page.acf.mission.button_title,
        mission_button_url: page.acf.mission.button_url,

        // hero two
        hero_two_background: page.acf.hero_two.background,
        hero_two_title_one: page.acf.hero_two.title_one,
        hero_two_title_two: page.acf.hero_two.title_two,
        hero_two_excerpt: page.acf.hero_two.excerpt,
        hero_two_button_one_text: page.acf.hero_two.button_one_title,
        hero_two_button_one_url: page.acf.hero_two.button_one_url,
        hero_two_button_one_class: page.acf.hero_two.button_one_class,
        hero_two_button_one_target: page.acf.hero_two.button_one_target,
        hero_two_button_two_text: page.acf.hero_two.button_two_title,
        hero_two_button_two_url: page.acf.hero_two.button_two_url,
        hero_two_button_two_class: page.acf.hero_two.button_two_class,
        hero_two_button_two_target: page.acf.hero_two.button_two_target,

        // why
        why_title: page.acf.why.title,
        why_excerpt: page.acf.why.excerpt,
        why_button_title: page.acf.why.button_title,
        why_button_url: page.acf.why.button_url,

        // hero three
        hero_three_background: page.acf.hero_three.background,
        hero_three_title_one: page.acf.hero_three.title_one,
        hero_three_title_two: page.acf.hero_three.title_two,
        hero_three_excerpt: page.acf.hero_three.excerpt,
        hero_three_button_one_text: page.acf.hero_three.button_one_title,
        hero_three_button_one_url: page.acf.hero_three.button_one_url,
        hero_three_button_one_class: page.acf.hero_three.button_one_class,
        hero_three_button_one_target: page.acf.hero_three.button_one_target,
        hero_three_button_two_text: page.acf.hero_three.button_two_title,
        hero_three_button_two_url: page.acf.hero_three.button_two_url,
        hero_three_button_two_class: page.acf.hero_three.button_two_class,
        hero_three_button_two_target: page.acf.hero_three.button_two_target,

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
