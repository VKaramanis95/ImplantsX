<template>
    <div class="services-area ptb-100">
        <div class="container">
            <div class="team-text">
                <h2>Welcome to our Services</h2>
                <p  style="padding-top:10px;">
                    At Smile Make Over Clinic, we provide a full range of dental services, from preventive care to cosmetic and restorative treatments. Our expert team uses the latest techniques and technologies to ensure your smile is both healthy and beautiful, with your comfort and satisfaction as our top priorities.


                </p>
            </div>

            <div class="row">

                <div class="col-lg-4 col-md-6" style="margin-top: 30px;">
                    <div class="single-services">
                        <div class="services-image">
                            <router-link to="/all-on-x-details">
                                <img src="../../assets/images/services/all6/all6-services.webp" alt="image">
                            </router-link>

                            <div class="icon">
                                <router-link to="/all-on-x-details">
                                    <i class="flaticon-dental-implant"></i>
                                </router-link>
                            </div>
                        </div>

                        <div class="services-content">
                            <h3>
                                <router-link to="/all-on-x-details">
                                    {{ $t('nav_allx') }}
                                </router-link>
                            </h3>
                            <p>{{ $t('services_main_all6_p') }}</p>
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-4 col-md-6"  style="margin-top: 30px;">
                    <div class="single-services">
                        <div class="services-image">
                            <router-link to="/implants">
                                <img src="../../assets/images/services/implants/implant-allservices.webp" alt="image">
                            </router-link>

                            <div class="icon">
                                <router-link to="/implants">
                                    <i class="flaticon-dental-implant"></i>
                                </router-link>
                            </div>
                        </div>

                        <div class="services-content">
                            <h3>
                                <router-link to="/implants">
                                    {{ $t('nav_implants') }}
                                    
                                </router-link>
                            </h3>
                            <p>{{ $t('touth_implant_service_p') }}</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6"  style="margin-top: 30px;">
                    <div class="single-services">
                        <div class="services-image">
                            <router-link to="/full-mouth-rehabilitation">
                                <img src="../../assets/images/services/full-mouth-rehab/full-mouth-allservices.webp" alt="image">
                            </router-link>

                            <div class="icon">
                                <router-link to="/full-mouth-rehabilitation">
                                    <i class="flaticon-dental-implant"></i>
                                </router-link>
                            </div>
                        </div>

                        <div class="services-content">
                            <h3>
                                <router-link to="/full-mouth-rehabilitation">
                                    {{ $t('nav_rehab') }}
                                </router-link>
                            </h3>
                            <p>{{ $t('services_main_mouthRehab_p') }}</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6"  style="margin-top: 30px;">
                    <div class="single-services">
                        <div class="services-image">
                            <router-link to="/veneers">
                                <img src="../../assets/images/services/zircCrowns/zirconia-crowns-allservices.webp"  alt="image">
                            </router-link>

                            <div class="icon">
                                <router-link to="/veneers">
                                    <i class="flaticon-dental-care"></i>
                                </router-link>
                            </div>
                        </div>

                        <div class="services-content">
                            <h3>
                                <router-link to="/veneers">
                                    {{ $t('zircven_page_title') }}
                                    
                                </router-link>
                            </h3>
                            <p>{{ $t('services_main_zcrowns_p') }}</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6"  style="margin-top: 30px;">
                    <div class="single-services">
                        <div class="services-image">
                            <router-link to="/hollywood-smile">
                                <img src="../../assets/images/services/hollywoodSmile/hollywood-smile-allservices.webp" alt="image">
                            </router-link>

                            <div class="icon">
                                <router-link to="/hollywood-smile">
                                    <i class="flaticon-dental-care"></i>
                                </router-link>
                            </div>
                        </div>

                        <div class="services-content">
                            <h3>
                                <router-link to="/hollywood-smile">
                                    {{ $t('nav_hsmile') }}
                                </router-link>
                            </h3>
                            <p>{{ $t('services_main_hsmile_p') }}</p>
                        </div>
                    </div>
                </div>
<!--
                <div class="col-lg-4 col-md-6"  style="margin-top: 30px;">
                    <div class="single-services">
                        <div class="services-image">
                            <router-link to="/zirconia-crowns">
                                <img src="../../assets/images/services/zircCrowns/zirconia-crowns-allservices.webp"  alt="image">
                            </router-link>

                            <div class="icon">
                                <router-link to="/zirconia-crowns">
                                    <i class="flaticon-dental-care"></i>
                                </router-link>
                            </div>
                        </div>

                        <div class="services-content">
                            <h3>
                                <router-link to="/zirconia-crowns">
                                    {{ $t('nav_zcrowns') }}
                                    
                                </router-link>
                            </h3>
                            <p>{{ $t('services_main_zcrowns_p') }}</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6"  style="margin-top: 30px;">
                    <div class="single-services">
                        <div class="services-image">
                            <router-link to="/zirconia-bridges">
                                <img src="../../assets/images/services/bridges/zirc-bridge-allservices.webp"  alt="image">
                            </router-link>

                            <div class="icon">
                                <router-link to="/zirconia-bridges">
                                    <i class="flaticon-dental-care"></i>
                                </router-link>
                            </div>
                        </div>

                        <div class="services-content">
                            <h3>
                                <router-link to="/zirconia-bridges">
                                    {{ $t('nav_zbridges') }}
                                    
                                </router-link>
                            </h3>
                            <p>{{ $t('services_main_zbridges_p') }}</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6"  style="margin-top: 30px;">
                    <div class="single-services">
                        <div class="services-image">
                            <router-link to="/porcelain-veneers">
                                <img src="../../assets/images/services/porcelain-veneers/veneers-porcelain-allservices.webp" alt="image">
                            </router-link>

                            <div class="icon">
                                <router-link to="/porcelain-veneers">
                                    <i class="flaticon-dental-care"></i>
                                </router-link>
                            </div>
                        </div>

                        <div class="services-content">
                            <h3>
                                <router-link to="/porcelain-veneers">
                                    {{ $t('veneers_porcelain_dentalServices_title') }}
                                    
                                </router-link>
                            </h3>
                            <p>{{ $t('veneers_porcelain_dentalServices_p') }}</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6"  style="margin-top: 30px;">
                    <div class="single-services">
                        <div class="services-image">
                            <router-link to="/resin-veneers">
                                <img src="../../assets/images/services/resin-veneers/veneers_resin_all_services.webp" alt="image">
                            </router-link>

                            <div class="icon">
                                <router-link to="/resin-veneers">
                                    <i class="flaticon-dental-care"></i>
                                </router-link>
                            </div>
                        </div>

                        <div class="services-content">
                            <h3>
                                <router-link to="/resin-veneers">
                                   {{ $t('veneers_resin_dentalServices_title') }}
                                </router-link>
                            </h3>
                            <p>{{ $t('veneers_resin_dentalServices_p') }}</p>
                        </div>
                    </div>
                </div>-->
                <!--
                <div class="col-lg-4 col-md-6"  style="margin-top: 30px;">
                    <div class="single-services">
                        <div class="services-image">
                            <router-link to="/hollywood-smile">
                                <img src="../../assets/images/services/hollywoodSmile/hollywood-smile-allservices.webp" alt="image">
                            </router-link>

                            <div class="icon">
                                <router-link to="/hollywood-smile">
                                    <i class="flaticon-dental-care"></i>
                                </router-link>
                            </div>
                        </div>

                        <div class="services-content">
                            <h3>
                                <router-link to="/hollywood-smile">
                                    {{ $t('nav_hsmile') }}
                                </router-link>
                            </h3>
                            <p>{{ $t('services_main_hsmile_p') }}</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6"  style="margin-top: 30px;">
                    <div class="single-services">
                        <div class="services-image">
                            <router-link to="/whitening">
                                <img src="../../assets/images/services/whitening/whitening-service.webp" alt="image">
                            </router-link>

                            <div class="icon">
                                <router-link to="/whitening">
                                    <i class="flaticon-chair"></i>
                                </router-link>
                            </div>
                        </div>

                        <div class="services-content">
                            <h3>
                                <router-link to="/whitening">
                                    {{ $t('whitening_service_page_title') }}
                                    
                                </router-link>
                            </h3>
                            <p>{{ $t('whitening_service_page_p') }}</p>
                        </div>
                    </div>
                </div> 
                <div class="col-lg-4 col-md-6"  style="margin-top: 30px;">
                    <div class="single-services">
                        <div class="services-image">
                            <router-link to="/denture">
                                <img src="../../assets/images/services/denture/denture-allservices.webp" alt="image">
                            </router-link>

                            <div class="icon">
                                <router-link to="/denture">
                                    <i class="flaticon-chair"></i>
                                </router-link>
                            </div>
                        </div>

                        <div class="services-content">
                            <h3>
                                <router-link to="/denture">
                                    {{ $t('denture_all_service_page_title') }}
                                    
                                </router-link>
                            </h3>
                            <p>{{ $t('services_main_denture_p') }}</p>
                        </div>
                    </div>
                </div> 
                <div class="col-lg-4 col-md-6"  style="margin-top: 30px;">
                    <div class="single-services">
                        <div class="services-image">
                            <router-link to="/inlays-onlays">
                                <img src="../../assets/images/services/inonlays/inonlay-allservices.webp" alt="image">
                            </router-link>

                            <div class="icon">
                                <router-link to="/inlays-onlays">
                                    <i class="flaticon-chair"></i>
                                </router-link>
                            </div>
                        </div>

                        <div class="services-content">
                            <h3>
                                <router-link to="/inlays-onlays">
                                    {{ $t('prosthetics_lays_all_service_page_title') }}
                                    
                                </router-link>
                            </h3>
                            <p>{{ $t('services_main_lays_p') }}</p>
                        </div>
                    </div>
                </div> 

                <div class="col-lg-4 col-md-6"  style="margin-top: 30px;">
                    <div class="single-services">
                        <div class="services-image">
                            <router-link to="/periodology">
                                <img src="../../assets/images/services/periodology/periodology_services.webp" alt="image">
                            </router-link>

                            <div class="icon">
                                <router-link to="/periodology">
                                    <i class="flaticon-chair"></i>
                                </router-link>
                            </div>
                        </div>

                        <div class="services-content">
                            <h3>
                                <router-link to="/periodology">
                                    {{ $t('periodology_services_title') }}
                                    
                                </router-link>
                            </h3>
                            <p>{{ $t('periodology_services_p') }}</p>
                        </div>
                    </div>
                </div> 
                <div class="col-lg-4 col-md-6"  style="margin-top: 30px;">
                    <div class="single-services">
                        <div class="services-image">
                            <router-link to="/orofacial-pain">
                                <img src="../../assets/images/services/orofacial-pain/orofacial_allservices_page.webp" alt="image">
                            </router-link>

                            <div class="icon">
                                <router-link to="/orofacial-pain">
                                    <i class="flaticon-chair"></i>
                                </router-link>
                            </div>
                        </div>

                        <div class="services-content">
                            <h3>
                                <router-link to="/orofacial-pain">
                                    {{ $t('orofacial_services_title') }}
                                    
                                </router-link>
                            </h3>
                            <p>{{ $t('orofacial_services_p') }}</p>
                        </div>
                    </div>
                </div> 
                <div class="col-lg-4 col-md-6"  style="margin-top: 30px;">
                    <div class="single-services">
                        <div class="services-image">
                            <router-link to="/face-improvement">
                                <img src="../../assets/images/services/facial-aesthetics/face-improvement/face-allservices.webp" alt="image">
                            </router-link>

                            <div class="icon">
                                <router-link to="/face-improvement">
                                    <i class="flaticon-chair"></i>
                                </router-link>
                            </div>
                        </div>

                        <div class="services-content">
                            <h3>
                                <router-link to="/face-improvement">
                                    {{ $t('face_improvement_services_title') }}
                                    
                                </router-link>
                            </h3>
                            <p>{{ $t('face_improvement_services_p') }}</p>
                        </div>
                    </div>
                </div> 

                <div class="col-lg-4 col-md-6"  style="margin-top: 30px;">
                    <div class="single-services">
                        <div class="services-image">
                            <router-link to="/prp-therapy">
                                <img src="../../assets/images/services/facial-aesthetics/prp-therapy/prp-service.webp" alt="image">
                            </router-link>

                            <div class="icon">
                                <router-link to="/prp-therapy">
                                    <i class="flaticon-chair"></i>
                                </router-link>
                            </div>
                        </div>

                        <div class="services-content">
                            <h3>
                                <router-link to="/prp-therapy">
                                    {{ $t('prp_service_title') }}
                                    
                                </router-link>
                            </h3>
                            <p>{{ $t('prp_service_p') }}</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6"  style="margin-top: 30px;">
                    <div class="single-services">
                        <div class="services-image">
                            <router-link to="/botox-etc">
                                <img src="../../assets/images/services/facial-aesthetics/botox-etc/botox-allservices.webp" alt="image">
                            </router-link>

                            <div class="icon">
                                <router-link to="/botox-etc">
                                    <i class="flaticon-chair"></i>
                                </router-link>
                            </div>
                        </div>

                        <div class="services-content">
                            <h3>
                                <router-link to="/botox-etc">
                                    {{ $t('botox_service_title') }}
                                    
                                </router-link>
                            </h3>
                            <p>{{ $t('botox_service_p') }}</p>
                        </div>
                    </div>
                </div> 
                <div class="col-lg-4 col-md-6"  style="margin-top: 30px;">
                    <div class="single-services">
                        <div class="services-image">
                            <router-link to="/alternative-therapies">
                                <img src="../../assets/images/services/facial-aesthetics/alternative-ways/aisthitikos-velonismos-services.webp" alt="image">
                            </router-link>

                            <div class="icon">
                                <router-link to="/alternative-therapies">
                                    <i class="flaticon-chair"></i>
                                </router-link>
                            </div>
                        </div>

                        <div class="services-content">
                            <h3>
                                <router-link to="/alternative-therapies">
                                    {{ $t('alternative_therapies_service_title') }}
                                    
                                </router-link>
                            </h3>
                            <p>{{ $t('alternative_therapies_service_p') }}</p>
                        </div>
                    </div>
                </div> 
                <div class="col-lg-4 col-md-6"  style="margin-top: 30px;">
                    <div class="single-services">
                        <div class="services-image">
                            <router-link to="/invisible-orthodontics">
                                <img src="../../assets/images/services/invisible-orthodontics/invisibleOrthodontics-services_page.webp" alt="image">
                            </router-link>

                            <div class="icon">
                                <router-link to="/invisible-orthodontics">
                                    <i class="flaticon-chair"></i>
                                </router-link>
                            </div>
                        </div>

                        <div class="services-content">
                            <h3>
                                <router-link to="/invisible-orthodontics">
                                    {{ $t('invisible_orthodontics_services_title') }}
                                    
                                </router-link>
                            </h3>
                            <p>{{ $t('invisible_orthodontics_services_p') }}</p>
                        </div>
                    </div>
                </div> -->
                
                
            </div>
        </div>
        <div class="container" style="padding-top: 50px;">
            <p>{{ $t('services_main_p') }}  <router-link to="/conscious-sedation"><u><b>{{ $t('services_main_p_here') }}</b></u></router-link>!</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DentalServices'
}
</script>
