<template>
    <div class="row reviews-banner">
        <div class="ctr">
            <h2>Google Reviews</h2>
            <div class="flex">
                <div class="row">
                    <p>
                        <nuxt-link to="/reviews/">Click here to see our latest reviews on Google.</nuxt-link>
                    </p>
                </div>
            </div>
            <div class="flex">
                <nuxt-link to="/reviews/">
                    <img src="/images/google-ratings-banner.jpg" height="61" width="277" alt="google-reviews-banner" title="Google Reviews Banner" />
                </nuxt-link>
            </div>
        </div>
    </div>
</template>
<style scoped>
.reviews-banner {
  background: #f7f7f7;
  padding: 4rem 0;
  text-align: center;
}
.reviews-banner h2 {
  color: #146636;
  text-transform: uppercase;
  font-size: 2.4rem;
  line-height: 2.8rem;
  font-weight: 700;
}
.reviews-banner a {
  color: #146636;
  text-decoration: none;
  text-align: center;
}
.reviews-banner p {
  color: #146636;
  max-width: 768px;
  font-size: 1.2rem;
  line-height: 1.9rem;
  font-weight: 400;
  margin: 0 auto 2rem auto;
}
.reviews-banner img {
  display: block;
  margin: 0 auto;
  height: auto;
  max-width: 160px;
}
@media only screen and (min-width: 1140px) {
  
}
</style>
<script>
export default {
  name: 'reviews-banner',
}
</script>

