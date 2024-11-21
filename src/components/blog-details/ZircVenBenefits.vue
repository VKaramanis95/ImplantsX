<template>
    <div class="blog-details-area ptb-100">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8 col-md-12">
                    <div class="blog-details-desc">
                        <div class="article-content">
                            <div class="row">
                               

                                <p>{{ $t('blog_zircven_benefits_p') }}</p>
                                
                       
                            </div>
                            

                            <div class="article-tag">
                                <span>Share:</span>
                                <a href="https://www.facebook.com/" target="_blank"><i class='bx bxl-facebook'></i></a>
                                <a href="https://twitter.com/?lang=en" target="_blank"><i class='bx bxl-twitter'></i></a>
                                <a href="https://www.linkedin.com/" target="_blank"><i class='bx bxl-linkedin'></i></a>
                                <a href="https://www.instagram.com/" target="_blank"><i class='bx bxl-instagram'></i></a>
                            </div>
                        </div>
                        <div class="related-articles-footer">
                            <div class="row">
                                                                <div class="col-lg-3 col-md-6 col-sm-12 related-article-item">

                                    <div class="item">
                                        <div class="info">
                                            <h4 class="title usmall">
                                                <router-link to="/veneers-natural-color">
                                                    {{ $t('sidebar_veneers_r1_title') }}
                                                </router-link>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
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
                                                <router-link to="/veneers-fall">
                                                    {{ $t('sidebar_veneers_p1_title') }}
                                                </router-link>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                                                <div class="col-lg-3 col-md-6 col-sm-12 related-article-item">

                                    <div class="item">
                                         
                                        <h4 class="title usmall">
                                            <router-link to="/veneers-longevity">
                                                {{ $t('sidebar_veneers_p2_title') }}
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
    name: 'ZircVenBenefits',
    
}
</script>


