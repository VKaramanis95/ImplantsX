<template>
    <div>
        <footer class="footer-area pt-100 pb-70">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-md-6">
                        <div class="single-footer-widget">
                            <h2>
                                <router-link to="/">Smile MakeOver</router-link>
                            </h2>
                            <p></p>

                            <div class="footer-info">
                                <img src="../../assets/images/OurTeam/tsetsenekou/tsetsenekou_allteam.webp" alt="image">
                                <h4>{{ $t('our_team_tsetsenekou') }}</h4>
                                <span>{{ $t('footer_ceo') }}</span>
                                
                            </div>

                            <div class="signature">
                                <img src="../../assets/images/footer/signature.webp" alt="image">
                            </div>

                            
                        </div>
                    </div>

                    
                    <div class="col-lg-3 col-sm-6">
                        <div class="single-footer-widget">
                            <h3><u>{{ $t('footer_links') }}</u></h3>

                            <ul class="quick-links">
                                
                                <li>
                                    <router-link to="/our-team">{{ $t('nav_team') }}</router-link>
                                </li>
                                <li>
                                    <router-link to="/services">{{ $t('nav_services') }}</router-link>
                                </li>
                                <li>
                                    <router-link to="/gallery">{{ $t('nav_before_after') }}</router-link>
                                </li>
                                <li>
                                    <router-link to="/pricing">{{ $t('nav_prices') }}</router-link>
                                </li>
                                <li>
                                    <router-link to="/blog">{{ $t('nav_blog') }}</router-link>
                                </li>
                                <li>
                                    <router-link to="/faq">FAQ</router-link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-lg-3 col-sm-6">
                        <div class="single-footer-widget">
                            <h3><u>{{ $t('footer_contact') }}</u></h3>

                            <ul class="footer-information">
                                <li>
                                    <i class="flaticon-emergency-call"></i>
                                    {{ $t('footer_call') }}
                                    <span><a href="tel:+302721098891">+30-2721098891</a></span>
                                </li>

                                <li>
                                    <i class="flaticon-wall-clock"></i>
                                    {{ $t('footer_time_p') }}
                                    <span>{{ $t('footer_time') }}</span>
                                </li>

                                <li>
                                    {{ $t('footer_location') }}
                                    <a href="https://maps.app.goo.gl/72VDiSrhE6kvJq2X6" target="_blank">
                                        <i class="flaticon-red-cross"></i>
                                        
                                        <span>{{ $t('top_nav_kalamata') }}</span>
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                        <div class="single-footer-widget">
                                <div class="map_contact_footer" >
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3184.9221338098246!2d22.106003783456664!3d37.035502900451554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1361b1d4a18908af%3A0x9c089a6bde99b52b!2zzqTPg861z4TPg861zr3Orc66zr_PhSDOlc-Fz4PPhM6xzrjOr86x!5e0!3m2!1sen!2snl!4v1710769883044!5m2!1sen!2snl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                        </div>

                    </div>
                </div>
            </div>
        </footer>

        <div class="copyright-area">
            <div class="container">
                <div class="copyright-area-content">
                    <p>
                        &copy; {{currentYear}} Kalamata clinic is proudly created by
                        <a href="https://vkaramanis.netlify.app/" target="_blank">
                            Karamanis Vasileios
                        </a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Footer',
        data() {
        return {
            currentYear: new Date().getFullYear(),
        };
    }
}
</script>
