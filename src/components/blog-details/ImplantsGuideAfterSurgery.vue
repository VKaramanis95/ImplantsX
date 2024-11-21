

<template>
    <div class="blog-details-area ptb-100">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8 col-md-12">
                    <div class="blog-details-desc">
                       
                        <div class="article-content">
                            <div class="row">
                                <h2><u>{{ $t('blog_implants_after_surgery_bleeding_title') }}</u></h2>
                                    <p>{{ $t('blog_implants_after_surgery_bleeding_p') }}</p>

                                    <h2><u>{{ $t('blog_implants_after_surgery_swelling_title') }}</u></h2>
                                    <p>{{ $t('blog_implants_after_surgery_swelling_p') }}<br> <b>{{ $t('blog_implants_after_surgery_swelling_p_algofren') }}</b></p>
                                    <p></p>
                                    
                                    <h2><u>{{ $t('blog_implants_after_surgery_contamination_title') }}</u></h2>
                                    <p>{{ $t('blog_implants_after_surgery_contamination_p') }} <br><b>{{ $t('blog_implants_after_surgery_contamination_p_amoxil') }}</b> </p>
                                    
                                    <h2><u>{{ $t('blog_implants_after_surgery_motion_title') }}</u></h2>
                                    <p>{{ $t('blog_implants_after_surgery_motion_p') }} <br> <b>{{ $t('blog_implants_after_surgery_motion_p_panadol') }}</b></p>
                                    
                                    <h2><u>{{ $t('blog_implants_after_surgery_dizy_title') }}</u></h2>
                                    <p>{{ $t('blog_implants_after_surgery_dizy_p') }}</p>

                                    <h2><u>{{ $t('blog_implants_after_surgery_diet_title') }}</u></h2>
                                    <p>{{ $t('blog_implants_after_surgery_diet_p') }}</p>

                                    <h2><u>{{ $t('blog_implants_after_surgery_hygiene_title') }}</u></h2>
                                    <p>{{ $t('blog_implants_after_surgery_hygiene_p') }}</p>

                                    <h2><u>{{ $t('blog_implants_after_surgery_activity_title') }}</u></h2>
                                    <p>{{ $t('blog_implants_after_surgery_activity_p') }}</p>

                                    <h2><u>{{ $t('blog_implants_after_surgery_smoking_title') }}</u></h2>
                                    <p>{{ $t('blog_implants_after_surgery_smoking_p') }}</p>
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
                                                                <div class="col-lg-3 col-md-6 col-sm-12 related-article-item">

                                    <div class="item">
                                        <div class="info">
                                            <h4 class="title usmall">
                                                <router-link to="/veneers-consumption">
                                                    {{ $t('sidebar_veneers_r3_title') }}
                                                </router-link>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                                                <div class="col-lg-3 col-md-6 col-sm-12 related-article-item">

                                    <div class="item">
                                        <div class="info">
                                            <h4 class="title usmall">
                                                <router-link to="/why-smile-make-over">
                                                    {{ $t('sidebar_allx_r3_title') }}
                                                </router-link>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                                                <div class="col-lg-3 col-md-6 col-sm-12 related-article-item">

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
                                                                <div class="col-lg-3 col-md-6 col-sm-12 related-article-item">

                                    <div class="item">
                                        <div class="info">
                                            <h4 class="title usmall">
                                                <router-link to="/daily-care">
                                                    {{ $t('sidebar_allx_p4_title') }}
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
    </div>
</template>

<script>
export default {
    name: 'ImplantsGuideAfterSurgery'
    
}
</script>


