<template>
    <div class="row why__intro" style="background: #fff;">
	    <div class="ctr">

            <!-- intro -->
            <div class="row">
                <h2>{{ whyTitle }}</h2>
                <div class="flex">
                    <div class="row why__excerpt" v-html="whyExcerpt" />
                </div>
            </div>

		    <!-- icons -->
            <div class="row why__icons">
                <ul>
                    <li>
                        <div>
                            <img src="https://sdwaste.co.uk/wp-content/uploads/2021/05/icon-2.jpg" height="421" width="422" alt="service icon">
                            <span>Environmentally Friendly</span>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src="https://sdwaste.co.uk/wp-content/uploads/2021/05/icon-2.jpg" height="421" width="422" alt="service icon">
                            <span>Regulatory Compliance</span>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src="https://sdwaste.co.uk/wp-content/uploads/2021/05/icon-2.jpg" height="421" width="422" alt="service icon">
                            <span>Customer Service</span>
                        </div>
                    </li>
                </ul>
            </div>

            <!-- button -->
            <div class="row flex">
                <nuxt-link :to="whyButtonUrl" class="button button-dark">{{ whyButtonTitle}}</nuxt-link>
            </div>

        </div>
    </div>
</template>
<style>
.why__intro {
  background: #f7f7f7;
  padding: 4rem 0;
  text-align: center;
}
.why__intro h2 {
  color: #146636;
  text-transform: uppercase;
  font-size: 2.4rem;
  line-height: 2.8rem;
  font-weight: 700;
  margin: 0 0 2rem 0;
}
.why__excerpt p {
  color: #146636;
  max-width: 768px;
  font-size: 1.2rem;
  line-height: 1.9rem;
  margin: 0 auto 2rem auto;
}
.why__intro img {
  display: block;
  margin: 0 auto 2rem auto;
  height: auto;
  max-width: 160px;
}
.why__icons ul {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: minmax(min-content, max-content);
  gap: 1em;
  text-align: center;
  margin: 0;
  padding: 0;
}
.why__icons li {
  list-style-type: none;
}
.why__icons li > div {
  padding: 2rem;
  width: 100%;
}
.why__icons li .why__thumb {
  background: #146636;
  border-radius: 100%;
  overflow: hidden;
  height: 160px;
  width: 160px;
  margin: 0 auto 1em auto;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all ease 0.3s;
}
.why__icons .why__thumb img {
  display: block;
  margin: 0 auto;
  height: 50%;
  width: auto;
}
.why__icons li span {
  color: #146636;
  text-transform: uppercase;
  font-size: 1.4rem;
  font-weight: 600;
}
@media only screen and (min-width: 768px) {
  .why__icons ul {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 0;
  }
  .why__icons li span {
    font-size: 1.2rem;
  }
}
</style>
<script>
export default {
  name: 'why-choose',
  // props
  props: [
    // eslint-disable-next-line vue/require-prop-types
    'whyTitle',
    'whyExcerpt',
    'whyButtonTitle',
    'whyButtonUrl'
  ]
}
</script>

