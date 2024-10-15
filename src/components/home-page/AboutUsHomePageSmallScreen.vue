<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">
    <div class="about-area ptb-100">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-8">
                    <div class="about-content">
                        <span class="sub-title">
                            <i class="flaticon-hashtag-symbol"></i>
                            {{ $t('aboutUsHomePage_span') }}
                        </span>
                        <h2 >{{ $t('aboutUsHomePage_h2') }}</h2>
                        <p class="animate__animated animate__fadeInUp">{{ $t('aboutUsHomePage_p') }}<br>
                        </p>
                        <div class="services-details-content animate__animated animate__fadeInUp">
                            <strong><u><i>{{ $t('aboutUsHomePage_title_ul') }}</i></u></strong>
                            <div class="row">
                                <div class="col-lg-6 col-md-6">
                                    <ul>
                                        <li>{{ $t('aboutUsHomePage_ul_li_1') }}</li>
                                        <li>{{ $t('aboutUsHomePage_ul_li_4') }}</li>
                                    </ul>
                                </div>
                                <div class="col-lg-6 col-md-6">
                                    <ul>
                                        <li>{{ $t('aboutUsHomePage_ul_li_2') }}</li>
                                        <li>{{ $t('aboutUsHomePage_ul_li_3') }}</li>
                                       
                                    </ul>
                                </div>
                            </div>
                        </div>
                       
                        <p class="animate__animated animate__fadeInUp"><u><b>{{ $t('aboutUsHomePage_p_end') }}</b></u></p>

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
        name: 'AboutHomePageSmallScreen'
    }
</script>