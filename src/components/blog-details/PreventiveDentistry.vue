<template>
    <div class="blog-details-area ptb-100">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8 col-md-12">
                    <div class="blog-details-desc">
                        <div class="article-image">
                            <img src="../../assets/images/blog/preventive-dentistry/preventive_dentistry_page.webp" alt="image">

                        </div>

                        <div class="article-content">
                            <div class="row">
                                

                                <h2><u>{{ $t('blog_page_preventive_dentistry_title') }}</u></h2>
                                <p><b>{{ $t('blog_page_preventive_dentistry_h4') }}</b></p>
                                <p>{{ $t('blog_page_preventive_dentistry_p') }}</p>
                            </div>
                            
                            

                            <div class="row">
                                <div class="col-lg-6 col-md-6">
                                    <div class="photo-container">
                                        <div class="single-doctor">
                                            <router-link to="/sport-splints">
                                                <img src="../../assets/images/blog/preventive-dentistry/athlitikoi-narthikes.webp" alt="image">
                                            </router-link>
                                            <div class="doctor-content">
                                                <h3>
                                                    <router-link to="/sport-splints">
                                                        {{ $t('blog_page_preventive_dentistry_li_1') }}
                                                    </router-link>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6">
                                    <div class="photo-container">
                                        <div class="single-doctor">
                                            <router-link to="/sleep-apnea">
                                                <img src="../../assets/images/blog/preventive-dentistry/apnea.webp" alt="image">
                                            </router-link>
                                            <div class="doctor-content">
                                                <h3>
                                                    <router-link to="/sleep-apnea">
                                                        {{ $t('blog_page_preventive_dentistry_li_2') }}
                                                    </router-link>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            

                            
                            
                            
                            <div class="article-tag" style="padding-top:110px ;">
                                <span>Share:</span>
                                <a href="https://www.facebook.com/" target="_blank"><i class='bx bxl-facebook'></i></a>
                                <a href="https://twitter.com/?lang=en" target="_blank"><i class='bx bxl-twitter'></i></a>
                                <a href="https://www.linkedin.com/" target="_blank"><i class='bx bxl-linkedin'></i></a>
                                <a href="https://www.instagram.com/" target="_blank"><i class='bx bxl-instagram'></i></a>
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
    name: 'PreventiveDentistry',
}
</script>

<style scoped>
    

    

    .doctor-content h3 {
        white-space: nowrap; /* Prevent the text from wrapping */
        overflow: hidden; /* Hide any overflow */
        text-overflow: ellipsis; /* Display an ellipsis (...) to indicate overflow */
        margin: 0; /* Remove default margin */
    }
</style>
