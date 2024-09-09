<template>
    <div class="home-slides" style="padding-top: 20px; padding-bottom: 30px; background-color: #091e3e;">
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
                <div v-for="slide in group" :key="slide.id" class="single-gallery-service-small">
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
              btnLinkOne: '/all-on-x-details',
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
            
      // Other carousel items...
    ],
    }),
    computed: {
      groupedCarouselItems() {
        // Display only one item on small screens
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
    methods:{
      onTouchStart(event) {
            this.startX = event.touches[0].clientX;
        },
        onTouchMove(event) {
            this.endX = event.touches[0].clientX;
        },
        onTouchEnd() {
            const diff = this.startX - this.endX;
            if (Math.abs(diff) > 50) {
                if (diff > 0) {
                    // Swiped left
                    this.$refs.reviewSlides.carouselNext();
                } else {
                    // Swiped right
                    this.$refs.reviewSlides.carouselPrev();
                }
            }
        }
    }
});
</script>


