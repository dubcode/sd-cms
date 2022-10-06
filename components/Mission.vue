<template>
    <div class="row mission">
        <div class="ctr">
            <h2>{{ missionTitle }}</h2>
            <div class="flex">
              <div class="row">
                <p v-html="missionExcerpt"></p>
              </div>
            </div>
            <div class="flex">
                <img src="/images/cn-logo.jpg" height="169" width="294" alt="logo">
            </div>
            <div class="row">
                <div class="flex">
                    <nuxt-link :to="missionButtonUrl" class="button button-dark">
                      {{ missionButtonTitle }}
                    </nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.mission {
  background: #f7f7f7;
  padding: 4rem 0;
  text-align: center;
}
.mission h2 {
  color: #146636;
  text-transform: uppercase;
  font-size: 2.4rem;
  line-height: 2.8rem;
  font-weight: 700;
  margin: 0 0 2rem 0;
}
.mission p {
  color: #146636;
  max-width: 768px;
  font-size: 1.2rem;
  line-height: 1.9rem;
  margin: 0 auto 2rem auto;
}
.mission img {
  display: block;
  margin: 0 auto 2rem auto;
  height: auto;
  max-width: 160px;
}
/* 768 */
@media only screen and (min-width: 768px) {
    
}
@media only screen and (min-width: 1140px) {
  
}
</style>
<script>
export default {
  name: 'mission',
  // props
  props: [
    // eslint-disable-next-line vue/require-prop-types
    'missionTitle',
    'missionExcerpt',
    'missionButtonTitle',
    'missionButtonUrl'
  ]
}
</script>

