<template>
  <div class="row">
    <Hero
      :hero-bg="'SD-Waste-Cardboard-recycling-header.webp'"
      :hero-title-one="'Cardboard'"
      :hero-title-two="'Recycling'"
      :hero-excerpt="'Here at SD Waste Paper it is our mission to assist our customers in recycling as much of their waste material as possible including cardboard.'"
      :hero-button-one-text="'Get A Quote'"
      :hero-button-one-url="'/get-a-quote/'"
      :hero-button-one-class="'button'"
      :hero-button-one-target="'_self'"
    />
    <div class="row">
        <div class="ctr">
            <div class="row two-col">
                <div class="row content">
                    <h2>Waste Paper Recycling Specialist Since 1988</h2>
                    <p>We specialise in the collection of waste paper using the industry standard recycling methods and equipment. We can deliver directly to your site the appropriate equipment to serve your paper recycling needs, including wheelie bins, fold down tubs, pump trucks, skips, (open top, closed tops or compactors), hessian sacks for security waste and anything else you may require. We can arrange a fast and responsive collection service, removing your waste paper away and sorting, recycling it, ready to become newspapers, magazines, toilet tissue, photocopying and printer paper.</p>
                    <p>As paper rots in landfill sites, it produces methane, which is 20% stronger than carbon dioxide. This is a serious contributor to global warming and it is crucial that we find ways to ensure its reduction. This is why we believe it is imperative to recycle your waste in the correct manner.</p>
                    <p>We currently recycle thousands upon thousands of tonnes of waste paper, preparing it for the correct recycling process, ensuring minimum impact on the environment. We are committed to providing a service which allows our customers to minimise their impact on the environment in the most cost effective way possible.
                    We provide a flexible, hassle-free service and can accept any job asked of us no matter how large or small. We provide paper recycling services to a wide range of companies, including all major retailers, printers, schools and offices.</p>
                </div>
                <div class="row">
                    <div class="row sidebar">
                        <h3>Recycling Services</h3>
                        <ul class="sidebar__nav">
                            <li>
                                <nuxt-link to="/paper-recycling/">
                                    Paper Recycling
                                </nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/cardboard-recycling/">
                                    Cardboard Recycling
                                </nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/plastic-recycling/">
                                    Plastic Recycling
                                </nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/carbon-neutral/">
                                    Carbon Neutral
                                </nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/material-handling-equipment/">
                                    Material Handling
                                </nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/office-clearance/">
                                    Office Clearance
                                </nuxt-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cardboard',
  layout: 'default'
}
</script>
