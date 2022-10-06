<template>
    <footer class="row sub-footer">
        <div class="ctr">
            <div class="row">
                <span class="sub-footer__title">Follow Us</span>
            </div>
            <div class="row sub-footer__icons">
                <ul>
                    <li>
                        <a href="https://twitter.com/SdWaste" target="_blank">
                            <img src="/images/twitter.png" height="31" width="32" alt="Twitter" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/sdwaste" target="_blank">
                            <img src="/images/facebook.png" height="31" width="32" alt="FaceBook" />
                        </a>
                    </li>
                    <li>
                        <a href="http://www.linkedin.com/in/sdwaste" target="_blank">
                            <img src="/images/linkedin.png" height="31" width="32" alt="LinkedIn" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/sd_wastepaper/" target="_blank">
                            <img src="/images/insta.png" height="31" width="32" alt="Instagram" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/channel/UCWfWcKod0b_E5Kkh8FYQN-w" target="_blank">
                            <img src="/images/yt.png" height="31" width="32" alt="YouTube" />
                        </a>
                    </li>
                </ul>
            </div>
            <div class="row sub-footer__links">
                <ul>
                    <li>
                        <nuxt-link to="/sitemap/">
                            Sitemap
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/terms/">
                            Terms &amp; Conditions
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/privacy/">
                            Privacy Policy
                        </nuxt-link>
                    </li>
                </ul>
            </div>
            <div class="row sub-footer__excerpt">
                <p>
                    Copyright © SD Waste Paper Recycling Centre Waste paper shredding Manchester, Liverpool, West Yorkshire, Huddersfield, Bolton, Bury, Leeds, North West, confidential waste disposal Manchester and the North West, cardboard and paper recycling Manchester and the North West
                </p>
            </div>
        </div>
    </footer>
</template>
<style scoped>
.sub-footer {
    background: var(--primary);
    color: var(--white);
    padding: 0 0 4rem 0;
    text-align: center;
}
.sub-footer__title {
    display: block;
    font-size: 1.4rem;
    font-weight: 600;
    margin: 0 0 1rem 0;
}
.sub-footer ul,
.sub-footer li {
    list-style-type: none;
    margin: 0;
    padding: 0;
}
.sub-footer__icons ul,
.sub-footer__links ul {
    text-align: center;
    margin: 0 0 1rem 0;
}
.sub-footer__icons li,
.sub-footer__links li {
    display: inline-block;
    padding: 0 0.25rem;
}
.sub-footer__icons li img {
    height: 30px;
    width: auto;
}
.sub-footer__links li a {
    color: #ff9900;
    text-decoration: none;
}
.sub-footer__excerpt {
    color: rgba(255, 255, 255, 0.7);
    text-align: center;
    margin: 0 0 1rem 0;
    line-height: 1.4;
    font-size: 1rem;
}
/* 768 */
@media only screen and (min-width: 768px) {

}
/* 1200 */
@media only screen and (min-width: 1200px) {

}
</style>
<script>
export default {
  name: 'sub-footer',
}
</script>

