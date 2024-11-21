<template>
    <div class="blog-details-area ptb-100">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8 col-md-12">
                    <div class="blog-details-desc">
                       
                        <div class="article-content">
                            <div class="row">
                                <p>{{ $t('blog_implants_dailycare_p') }}</p>

                                    <h3><u>{{ $t('blog_implants_dailycare_general_title') }}</u></h3>
                                    <p>{{ $t('blog_implants_dailycare_general_p') }}</p>

                                    <h3><u>{{ $t('blog_implants_dailycare_bridges_title') }}</u></h3>
                                    
                                    <ul>
                                        <p>{{ $t('blog_implants_dailycare_bridges_p') }}</p>
                                        <li>
                                            {{ $t('blog_implants_dailycare_bridges_li1') }}
                                        </li>
                                        <li>
                                            {{ $t('blog_implants_dailycare_bridges_li2') }}
                                        </li>
                                    </ul>


                                    <h3><u>{{ $t('blog_implants_dailycare_guide_general_title') }}</u></h3>
                                    <ol>
                                        <li>
                                            <b>{{ $t('blog_implants_dailycare_guide_toothbrush_title') }}</b>
                                            <p>{{ $t('blog_implants_dailycare_guide_toothbrush_p')}}</p>
                                        </li>
                                        <li>
                                            <b>{{ $t('blog_implants_dailycare_guide_toothbrush_between_title') }}</b>
                                            <p>{{ $t('blog_implants_dailycare_guide_toothbrush_between_p')}}</p>
                                        </li>
                                        <li>
                                            <b>{{ $t('blog_implants_dailycare_guide_brushes_title') }}</b>
                                            <p>{{ $t('blog_implants_dailycare_guide_brushes_p')}}</p>
                                        </li>
                                        <li>
                                            <b>{{ $t('blog_implants_dailycare_guide_floss_title') }}</b>
                                            <p>{{ $t('blog_implants_dailycare_guide_floss_p')}}</p>
                                        </li>
                                    </ol>

                                    <h3><u>{{ $t('blog_implants_dailycare_guide_check_title') }}</u></h3>
                                    <p>{{ $t('blog_implants_dailycare_guide_check_p') }}</p>

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
                                                <router-link to="/full-mouth-rest-longevity">
                                                    {{ $t('sidebar_fullmouth_r2_title') }}
                                                </router-link>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                                                <div class="col-lg-3 col-md-6 col-sm-12 related-article-item">

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
    name: 'DailyImplantsCare'    
}
</script>




