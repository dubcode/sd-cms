<template>
    <div class="row tes-cta">
	    <div class="ctr">

            <!-- excerpt -->
            <div class="row tes-cta__excerpt">
                <p>
                    I have been dealing with SD Waste for the past ten years, they have always been so helpful and always great with my confidential office waste. Thoroughly recommended.
                </p>
            </div>
            <div class="row tes-cta__ref">
                <span>Mr Wyke</span>
            </div>
            <div class="row">
                <div class="flex">
                    <nuxt-link to="/testimonials/" class="button button-dark">
                      More Reviews
                    </nuxt-link>
                </div>
            </div>


        </div>
    </div>
</template>
<style scoped>
.tes-cta {
    margin: 4rem 0;
}
.tes-cta .ctr {
    border-bottom: 1px solid #ccc;
    border-top: 1px solid #ccc;
    padding: 6rem 0;
}
.tes-cta__excerpt {
    padding: 0 1rem;
}
.tes-cta p {
  text-align: center;
  max-width: 768px;
  line-height: 1.8;
  margin: 0 auto 2rem auto;
  font-size: 2rem;
  color: #146636;
  font-style: italic;
  font-family: Georgia, "Times New Roman", Times, serif !important;
}
.tes-cta__ref {
    display: block;
    text-align: center;
    margin: 0 auto 2rem auto;
    font-size: 1.7rem;
    font-weight: 600;
    color: var(--black);
}
@media only screen and (min-width: 1140px) {
    .tes-cta p {
        font-size: 2.6rem;
    }
    .tes-cta__excerpt {
        padding: 0 2rem;
    }
}
</style>
<script>
export default {
  name: 'testimonial',
}
</script>

