<template>
    <div class="home-slides" style="padding-top: 20px; padding-bottom: 30px;">
      <carousel :autoplay="5800" :wrap-around="true" @touchstart="onTouchStart" @touchmove="onTouchMove" @touchend="onTouchEnd" ref="carousel">
        <slide v-for="(group, index) in groupedCarouselItems" :key="index">
          <div class="container">
            <div class="row">
              <div class="main-slides-content-services">
                <div class="slide-group">
                  <div v-for="slide in group" :key="slide.id" class="single-gallery-service" @click="openLightbox(slide)">
                    <img :src="slide.image" alt="image">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </slide>
        <template #addons>
          
        </template>
      </carousel>
  
      <!-- Lightbox -->
      <div class="lightbox" v-if="lightboxVisible" @click="closeLightbox">
        <span class="close-btn" @click.stop="closeLightbox">×</span>
        <div class="lightbox-content" @click.stop>
          <div class="left-section" @click="prevImage"></div>
            <div class="image-container" @click="prevImage">
                <div class="nav-btn left-arrow"></div>
                <img :src="selectedImage.image" alt="lightbox-image">
                <div class="nav-btn right-arrow"></div>
                
            </div>

          <div class="right-section" @click="nextImage"></div>
        </div>
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
          image: require('@/assets/images/OurClinic/gallery/16.webp'),
        },
        {
          id: 2,
          image: require('@/assets/images/OurClinic/gallery/19.webp'),
        },
        {
          id: 3,
          image: require('@/assets/images/OurClinic/gallery/17.webp'),
        },
        {
          id: 4,
          image: require('@/assets/images/OurClinic/gallery/6.webp'),
        },
        
        {
          id: 5,
          image: require('@/assets/images/OurClinic/gallery/21.webp'),
        },
        {
          id: 6,
          image: require('@/assets/images/OurClinic/gallery/1.webp'),
        },
        {
          id: 7,
          image: require('@/assets/images/OurClinic/gallery/4.webp'),
        },
        {
          id: 8,
          image: require('@/assets/images/OurClinic/gallery/5.webp'),
        },
        {
          id: 9,
          image: require('@/assets/images/OurClinic/gallery/7.webp'),
        },
        {
          id: 10,
          image: require('@/assets/images/OurClinic/gallery/8.webp'),
        },
        
        {
          id: 11,
          image: require('@/assets/images/OurClinic/gallery/15.webp'),
        },
        {
          id: 12,
          image: require('@/assets/images/OurClinic/gallery/22.webp'),
        },
        {
          id: 13,
          image: require('@/assets/images/OurClinic/gallery/2.webp'),
        },
        
        {
          id: 14,
          image: require('@/assets/images/OurClinic/gallery/3.webp'),
        },
       
        
        
        
      ],
      lightboxVisible: false,
      selectedImageIndex: 0,
    }),
    computed: {
      groupedCarouselItems() {
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
      selectedImage() {
        return this.carouselItems[this.selectedImageIndex];
      },
    },
    methods: {
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
            this.$refs.carousel.carouselNext();
          } else {
            // Swiped right
            this.$refs.carousel.carouselPrev();
          }
        }
      },
      openLightbox(slide) {
        this.selectedImageIndex = this.carouselItems.findIndex(item => item.id === slide.id);
        this.lightboxVisible = true;
      },
      closeLightbox() {
        this.lightboxVisible = false;
      },
      prevImage() {
        if (this.selectedImageIndex === 0) {
          this.selectedImageIndex = this.carouselItems.length - 1; // Set index to last image index
        } else {
          this.selectedImageIndex--;
        }
      },
      nextImage() {
        if (this.selectedImageIndex === this.carouselItems.length - 1) {
          this.selectedImageIndex = 0; // Set index to first image index
        } else {
          this.selectedImageIndex++;
        }
      },
      handleWheelScroll(event) {
        if (this.lightboxVisible) {
            if (event.deltaY > 0) {
            // Scrolling down, navigate to the next image
            this.nextImage();
            } else if (event.deltaY < 0) {
            // Scrolling up, navigate to the previous image
            this.prevImage();
            }
        }
     },
    },
    mounted() {
    // Add event listener for wheel scrolling when component is mounted
    document.body.addEventListener('wheel', this.handleWheelScroll);
  },
  beforeUnmount() {
    // Remove event listener when component is about to be destroyed
    document.body.removeEventListener('wheel', this.handleWheelScroll);
  },
  });
  </script>
  
 
  