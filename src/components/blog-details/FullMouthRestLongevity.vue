<template>
    <div class="blog-details-area ptb-100">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8 col-md-12">
                    <div class="blog-details-desc">
                        <div class="article-content">
                            <div class="row">
                                <p>{{ $t('full_mouth_rehab_longevity_sidebar_p') }}</p>
                            </div>
                            

                            <div class="article-tag">
                                <span>Share:</span>
                                <a href="https://www.facebook.com/" target="_blank"><i class='bx bxl-facebook'></i></a>
                                <a href="https://twitter.com/?lang=en" target="_blank"><i class='bx bxl-twitter'></i></a>
                                <a href="https://www.linkedin.com/" target="_blank"><i class='bx bxl-linkedin'></i></a>
                                <a href="https://www.instagram.com/" target="_blank"><i class='bx bxl-instagram'></i></a>
                            </div>
                        </div>

                        <!-- Footer bar with other articles -->
                        <div class="related-articles-footer">
                            <div class="row">
                                <div class="col-lg-3 col-md-6">
                                    <div class="item">
                                        <div class="info">
                                            <h4 class="title usmall">
                                                <router-link to="/full-mouth-rest-longevity">
                                                    {{ $t('sidebar_fullmouth_r2_title') }}
                                                </router-link>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6">
                                    <div class="item">
                                        <div class="info">
                                            <h4 class="title usmall">
                                                <router-link to="/implants-denture-care">
                                                    {{ $t('sidebar_allx_r2_title') }}
                                                </router-link>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6">
                                    <div class="item">
                                        <div class="info">
                                            <h4 class="title usmall">
                                                <router-link to="/why-we-lose-teeth">
                                                    {{ $t('sidebar_implants_r1_title') }}
                                                </router-link>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6">
                                    <div class="item">
                                         
                                        <h4 class="title usmall">
                                            <router-link to="/after-surgery">
                                                {{ $t('sidebar_allx_p3_title') }}
                                            </router-link>
                                        </h4>
                                    </div>
                                </div>
                                
                            </div>
                        </div>

                    </div>
                </div>

               
                
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'FullMouthRestLongevity',
    
}
</script>


