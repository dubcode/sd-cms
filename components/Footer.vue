<template>
    <footer class="row footer">
        <div class="ctr">
            
            <div class="row footer__grid">
                <div>
                    <span>About Us</span>
                    <ul>
                        <li>
                            <nuxt-link to="/company-information/">
                                Company information
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/why-use-sd-waste/">
                                Why use SD Waste?
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/what-we-recycle/">
                                What we recycle
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/meet-the-team/">
                                Meet the team
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/blog/">
                                Blog
                            </nuxt-link>
                        </li>
                    </ul>
                </div>
                <div>
                    <span>Recycling</span>
                    <ul>
                        <li>
                            <nuxt-link to="/paper-recycling/">
                                Paper Recycling
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/confidential-waste/">
                                Confidential Waste
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
                <div>
                    <span>Contact Us</span>
                    <p>
                        <b>Telephone</b><br/>
                        <a href="tel:01617407466">
                            0161 740 7466
                        </a>
                    </p>
                    <p>
                        <b>Fax</b><br/>
                        <span>
                            0161 740 7475
                        </span>
                    </p>
                    <p>
                        <b>Email</b><br/>
                        <a href="mailto:office@sdwaste.co.uk?subject=Website Enquiry">
                            Click Here
                        </a>
                    </p>
                </div>
                <div>
                    <span>Opening Times</span>
                    <p>Monday - Friday 6.30am - 5.00pm<br/>
                    Saturday 6.30am -11.00am</p>
                    <p>
                        <a href="MapDoc.pdf" target="_blank">
                            View Printable Map
                        </a>
                    </p>
                </div>
            </div>

        </div>
    </footer>
</template>
<style scoped>
.footer {
    background: var(--primary);
    color: var(--white);
    padding: 4rem 0;
}
.footer__grid div {
    margin: 0 0 2rem 0;
}
.footer__grid div > span {
    display: block;
    font-size: 1.4rem;
    font-weight: 600;
    margin: 0 0 1rem 0;
}
.footer__grid ul,
.footer__grid li {
    list-style-type: none;
    margin: 0;
    padding: 0;
}
.footer__grid li {
    line-height: 2;
}
.footer__grid li a {
    color: var(--white);
    text-decoration: none;
}
.footer__grid p {
    line-height: 2;
}
.footer__grid p a,
.footer__grid p span {
    color: #ff9900;
    text-decoration: none;
}
/* 768 */
@media only screen and (min-width: 768px) {
    .footer__grid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr;
        gap: 2rem;
        grid-auto-flow: row;
    }
    @media all and (-ms-high-contrast:none) {
        .footer__grid {
            display: -ms-grid;
            -ms-grid-columns: 1fr 1fr 1fr 1fr;
            -ms-grid-rows: 1fr;
        }
    }
    .footer__grid div {
        border-right: 1px solid rgba(255, 255, 255, 0.3);
        margin: 0;
    }
    .footer__grid div:last-child {
        border: none;
    }
}
/* 1200 */
@media only screen and (min-width: 1200px) {

}
</style>
<script>
export default {
  name: 'main-footer',
}
</script>

