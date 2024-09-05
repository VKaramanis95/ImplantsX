<template>
  <div class="home-slides" style="background-color: #091e3e; padding-top: 80px; padding-bottom: 80px;">
    <div class="section-title">
      <span class="sub-title">
        <i class="flaticon-hashtag-symbol"></i>
         {{ $t('services_main_page_span') }}
      </span>
      <h2 style="color: white;">{{ $t('services_main_page_h2') }}</h2>
    </div>
    <carousel :autoplay="5800" :wrap-around="true">
      <slide v-for="group in groupedCarouselItems" :key="group[0].id">
        <div class="container">
          <div class="row">
            <div class="main-slides-content-services">
              <div class="slide-group">
                <div v-for="slide in group" :key="slide.id" class="single-gallery-service">
                  <router-link :to="slide.btnLinkOne">
                      <img style="width: 568px; height: 312px;" :src="slide.image" alt="image">
                  </router-link>
                  <div class="content">
                    <h3 style="color: white;">
                      {{ $t(slide.heading) }}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </slide>
      <template #addons>
        <Navigation />
      </template>
    </carousel>
    <!-- Button added after the carousel -->
    <div class="view-all-btn-container">
      <router-link to="/services" class="default-btn">{{ $t('button_view_all') }}</router-link>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { Carousel, Slide, Navigation } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

export default defineComponent({
  name: 'OurServicesMainPage',
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data: () => ({
    carouselItems: [
            {
              id: 1,
              heading: 'nav_allx',
              btnLinkOne: '/all-on-6-details',
              image: require('../../assets/images/services/all6/all6.webp'),   
            },
            
            {
                id: 2,
                heading: 'nav_implants',
                btnLinkOne: '/implants',
                image: require('../../assets/images/services/implants/implant-service.webp'),
            },
            {
                id: 3,
                heading: 'nav_rehab',
                btnLinkOne: '/full-mouth-rehabilitation',
                image: require('../../assets/images/services/full-mouth-rehab/full_mouth_service.webp'),   
            },
            {
                id: 4,
                heading: 'nav_zcrowns',
                btnLinkOne: '/zirconia-crowns',
                image: require('../../assets/images/services/zircCrowns/zirconia-crowns-service.webp'), },
            {
                id: 5,
                heading: 'nav_zbridges',
                btnLinkOne: '/zirconia-bridges',
                image: require('../../assets/images/services/bridges/zirc_bridge_service.webp'),
            },
            {
                id: 6,
                heading: 'nav_veneers',
                btnLinkOne: '/dental-veneers',
                image: require('../../assets/images/services/resin-veneers/veneers_resin_all_services.webp'), 
            },
            {
                id: 7,
                heading: 'nav_veneers',
                btnLinkOne: '/dental-veneers',
                image: require('../../assets/images/services/porcelain-veneers/veneers_porcelain_all_services.webp'), 
            },
            {
                id: 8,
                heading: 'nav_hsmile',
                btnLinkOne: '/hollywood-smile',
                image: require('../../assets/images/services/hollywoodSmile/hollywood-smile-service.webp'),
            },
            {
                id: 9,
                heading: 'nav_whitening',
                btnLinkOne: '/whitening',
                image: require('../../assets/images/services/whitening/whitening-service.webp'),
            },
            {
                id: 10,
                heading: 'nav_denture',
                btnLinkOne: '/denture',
                image: require('../../assets/images/services/denture/denture_all_services.webp'),
            },
            {
                id: 11,
                heading: 'nav_prosthetics_lays',
                btnLinkOne: '/inlays-onlays',
                image: require('../../assets/images/services/inonlays/inonlay_service_page.webp'),
            },
            {
                id: 12,
                heading: 'nav_periodontology',
                btnLinkOne: '/periodology',
                image: require('../../assets/images/services/periodology/periodology_services.webp'),
            },
            {
                id: 13,
                heading: 'nav_orofacial',
                btnLinkOne: '/orofacial-pain',
                image: require('../../assets/images/services/orofacial-pain/orofacial_allservices_page.webp'),
            },
            {
                id: 14,
                heading: 'nav_facial_botox_face_improvement',
                btnLinkOne: '/face-improvement',
                image: require('../../assets/images/services/facial-aesthetics/face-improvement/face_allservices_page.webp'),
            },
            {
                id: 15,
                heading: 'nav_facial_prp',
                btnLinkOne: '/prp-therapy',
                image: require('../../assets/images/services/facial-aesthetics/prp-therapy/prp-service.webp'),
            },
            {
                id: 16,
                heading: 'nav_orthodontics',
                btnLinkOne: '/invisible-orthodontics',
                image: require('../../assets/images/services/invisible-orthodontics/invisibleOrthodontics-services_page.webp'),
            },
            {
                id: 17,
                heading: 'nav_facial_altetnative',
                btnLinkOne: '/alternative-therapies',
                image: require('../../assets/images/services/facial-aesthetics/alternative-ways/aisthitikos-velonismos-services.webp'),
            },
      // Other carousel items...
    ],
  }),
  computed: {
    groupedCarouselItems() {
      // Display only one item per row on small screens
      if (this.isSmallScreen) {
        return this.carouselItems.map(item => [item]);
      }
      const itemsPerGroup = 3;
      const groupedItems = [];
      for (let i = 0; i < this.carouselItems.length; i += itemsPerGroup) {
        groupedItems.push(this.carouselItems.slice(i, i + itemsPerGroup));
      }
      return groupedItems;
    },
    isSmallScreen() {
      return window.innerWidth <= 768;
    },
  },
});
</script>


