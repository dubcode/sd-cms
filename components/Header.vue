<template>
    <div id="header" class="row">
        <div class="ctr">
            <div class="row header__top">
                <div class="header__top-l">
                    <ul>
                        <li>
                            <a href="tel:01617407466" title="Call 01617407466">
                                <img src="/images/svg/tel.svg" height="18" width="18" alt="telephone-icon" data-not-lazy />
                                <span>0161 740 7466</span>
                            </a>
                        </li>
                        <li>
                            <a href="mailto:office@sdwaste.co.uk" title="Email office@sdwaste.co.uk" target="_blank">
                                <img src="/images/svg/email.svg" height="18" width="18" alt="email-icon" data-not-lazy />
                                <span>office@sdwaste.co.uk</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="header__top-r">
                    <ul>
                        <li>
                            <a href="https://www.facebook.com/sdwaste" title="FaceBook" target="_blank">
                                <img src="/images/svg/facebook.svg" height="18" width="18" alt="facebook-icon" data-not-lazy />
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/SdWaste" title="Twitter" target="_blank">
                                <img src="/images/svg/twitter.svg" height="18" width="18" alt="twitter-icon" data-not-lazy />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/company/s-d-waste-paper-recycling/" title="LinkedIn" target="_blank">
                                <img src="/images/svg/linkedin.svg" height="18" width="16" alt="linkedin-icon" data-not-lazy />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/channel/UCWfWcKod0b_E5Kkh8FYQN-w" title="YouTube" target="_blank">
                                <img src="/images/svg/youtube.svg" height="18" width="20" alt="youtube-icon" data-not-lazy />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/sd_wastepaper/" title="Instagram" target="_blank">
                                <img src="/images/svg/instagram.svg" height="18" width="16" alt="instagram-icon" data-not-lazy />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="header__bottom">
                <nuxt-link to="/" class="header__logo">
                    <img src="/images/sd-waste-logo.webp" height="205" width="524" alt="SD Waste Logo" data-not-lazy />
                </nuxt-link>
                <div class="header__nav">
                    <button class="hamburger hamburger--collapse" type="button" title="Toggle Menu" :class="{isActive: menuClose}" @click="menuClose=!menuClose">
                        <span class="hamburger-box">
                            <span class="hamburger-inner"></span>
                        </span>
                    </button>
                    <div class="header__nav-menu" :class="{isActive: menuClose}">
                        <ul>
                            <li>
                                <span>
                                    About Us
                                </span>
                                <ul>
                                    <li @click="this.closeMenu">
                                        <nuxt-link to="/company-information/">
                                            Company Information
                                        </nuxt-link>
                                    </li>
                                    <li @click="this.closeMenu">
                                        <nuxt-link to="/meet-the-team/">
                                            Meet The Team
                                        </nuxt-link>
                                    </li>
                                    <li @click="this.closeMenu">
                                        <nuxt-link to="/jobs/">
                                            Jobs
                                        </nuxt-link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <span>
                                    Recycling Services
                                </span>
                                <ul>
                                    <li @click="this.closeMenu">
                                        <nuxt-link to="/paper-recycling/">
                                            Paper Recycling
                                        </nuxt-link>
                                    </li>
                                    <li @click="this.closeMenu">
                                        <nuxt-link to="/cardboard-recycling/">
                                            Cardboard Recycling
                                        </nuxt-link>
                                    </li>
                                    <li @click="this.closeMenu">
                                        <nuxt-link to="/plastic-recycling/">
                                            Plastic Recycling
                                        </nuxt-link>
                                    </li>
                                    <li @click="this.closeMenu">
                                        <nuxt-link to="/carbon-neutral/">
                                            Carbon Neutral
                                        </nuxt-link>
                                    </li>
                                    <li @click="this.closeMenu">
                                        <nuxt-link to="/material-handling-equipment/">
                                            Material Handling & Equipment
                                        </nuxt-link>
                                    </li>
                                    <li @click="this.closeMenu">
                                        <nuxt-link to="/office-clearance/">
                                            Office Clearance
                                        </nuxt-link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <span>
                                    Shredding Services
                                </span>
                                <ul>
                                    <li @click="this.closeMenu">
                                        <nuxt-link to="/shredding-overview/">
                                            Shredding Overview
                                        </nuxt-link>
                                    </li>
                                    <li @click="this.closeMenu">
                                        <nuxt-link to="/document-shredding/">
                                            Document Shredding
                                        </nuxt-link>
                                    </li>
                                    <li @click="this.closeMenu">
                                        <nuxt-link to="/confidential-waste-destruction/">
                                            Confidential Waste Destruction
                                        </nuxt-link>
                                    </li>
                                </ul>
                            </li>
                            <li @click="this.closeMenu"></li><li>
                                <nuxt-link to="/review/">
                                    Review
                                </nuxt-link>
                            </li>
                            <li @click="this.closeMenu">
                                <nuxt-link to="/blog/">
                                    Blog
                                </nuxt-link>
                            </li>
                            <li @click="this.closeMenu">
                                <nuxt-link to="/contact-us/">
                                    Contact Us
                                </nuxt-link>
                            </li>
                        </ul>
                    </div>     
                </div>
            </div>
        </div>
    </div>
</template>
<!-- CSS for above the fold global elements can be found in critical.css -->
<script>
export default {
    name: 'masthead',
    data () {
        return {
            menuClose: false
        }
    },
    destroyed() {
        this.menuClose = false
    },
    methods: {
        closeMenu () {
            this.menuClose = false
        }
    }
}
</script>
