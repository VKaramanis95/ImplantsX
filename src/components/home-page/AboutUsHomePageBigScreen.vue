<template>
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">
    <div class="about-area ptb-100">

        <video autoplay muted loop id="background-video">
            <source src="../../assets/video/1.mp4" type="video/mp4">
          
        </video>
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-8">
                    <div class="section-title">
                        <span class="sub-title">
                            <i class="flaticon-hashtag-symbol"></i>
                            {{ $t('aboutUsHomePage_span') }}
                        </span>
                        <h2 style="color: white;"><u>{{ $t('aboutUsHomePage_h2') }}</u></h2>
                    </div>
                    
                    <div class="about-content">
                        
                        
                    
                        <p id="about_text_color" class="animate__animated animate__fadeInUp">{{ $t('aboutUsHomePage_p') }}</p>
                    

                    
                        <div class="services-details-content animate__animated animate__fadeInUp">
                                <strong style="color: white; font-family: sans-serif; font-size: 24px; "><u><i>{{ $t('aboutUsHomePage_title_ul') }}</i></u></strong>
                                <div class="row" style="color: white; font-family: sans-serif; font-size: 24px;">
                                    <div class="col-lg-6 col-md-6">
                                    <ul>
                                        <li>{{ $t('aboutUsHomePage_ul_li_1') }}</li>
                                        
                                        <li>{{ $t('aboutUsHomePage_ul_li_6') }}</li>
                                        <li>{{ $t('aboutUsHomePage_ul_li_3') }}</li>
                                        <li>{{ $t('aboutUsHomePage_ul_li_4') }}</li>
                                    </ul>
                                </div>
                                <div class="col-lg-6 col-md-6">
                                    <ul>
                                        <li>{{ $t('aboutUsHomePage_ul_li_5') }}</li>
                                        <li>{{ $t('aboutUsHomePage_ul_li_2') }}</li>
                                        <li>{{ $t('aboutUsHomePage_ul_li_7') }}</li>
                                        <li>{{ $t('aboutUsHomePage_ul_li_8') }}</li>
                                        <li>{{ $t('aboutUsHomePage_ul_li_9') }}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        

                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="about-image" >
                        <img class="about-image-main-page" src="../../assets/images/about/office1.webp" alt="image">
                        <img class="about-image-main-page" src="../../assets/images/about/main-page.webp" alt="image">
                        <img class="about-image-main-page" src="../../assets/images/about/office.webp" alt="image">
                       
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'AboutUsHomePageBigScreen'
}
</script>

