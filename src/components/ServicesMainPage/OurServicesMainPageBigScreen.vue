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
                heading: 'zircven_page_title',
                btnLinkOne: '/veneers',
                image: require('../../assets/images/services/zircCrowns/zirconia-crowns-service.webp'), 
            },
            {
                id: 5,
                heading: 'gallery_hsmile',
                btnLinkOne: '/nav_hsmile',
                image: require('../../assets/images/services/hollywoodSmile/hollywood-smile-service.webp'), 
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

<style>


/* Ensure that all images in the carousel have the same size */
.single-gallery-service img {
  width: 100%;
  max-width: 468px;
  height: 312px; /* You can adjust this if you want different dimensions */
  object-fit: cover; /* This ensures the image maintains aspect ratio and covers the container */
}

/* Force all carousel items to maintain the same size */
.single-gallery-service {
  width: 468px; /* This should match the image width */
  height: 312px; /* Adjust to match content, ensuring consistency */
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Ensure the content stays aligned */
}

/* Ensure the content inside each carousel item is centered */
.single-gallery-service .content {
  text-align: center;
}

/* Center the slide content */
.main-slides-content-services {
  display: flex;
  justify-content: center;
  align-items: center;
}

.slide-group {
  display: flex;
  justify-content: center; /* Align items in the group */
}


</style>


