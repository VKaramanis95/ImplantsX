<template>
    <div class="gallery">
      <div v-for="(image, index) in images" :key="index" class="gallery-item" @mouseover="showArrows(index)" @mouseleave="hideArrows(index)">
        <img 
          :src="image.url" 
          :alt="image.alt" 
          class="gallery-image" 
          @click="openImage(index)">
        <div v-if="isOpen && openIndex === index" class="image-overlay" @click="closeImage"></div>
        <div v-if="isOpen && openIndex === index" class="image-modal">
          <span class="close-button" @click="closeImage">✕</span>
          <img 
            :src="image.url" 
            :alt="image.alt" 
            class="modal-image"
            @click="nextImage">
          <button class="nav-button prev" @click="prevImage" v-show="showLeftArrow[index]">&lt;</button>
          <button class="nav-button next" @click="nextImage" v-show="showRightArrow[index]">&gt;</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        images: [
          { url: require('@/assets/images/OurClinic/gallery/16.webp'), alt: 'Slide 1' },
          { url: require('@/assets/images/OurClinic/gallery/19.webp'), alt: 'Slide 2' },
          { url: require('@/assets/images/OurClinic/gallery/17.webp'), alt: 'Slide 3' },
          { url: require('@/assets/images/OurClinic/gallery/6.webp'), alt: 'Slide 4' },
          { url: require('@/assets/images/OurClinic/gallery/21.webp'), alt: 'Slide 5' },
          { url: require('@/assets/images/OurClinic/gallery/1.webp'), alt: 'Slide 6' },
          { url: require('@/assets/images/OurClinic/gallery/4.webp'), alt: 'Slide 7' },
          { url: require('@/assets/images/OurClinic/gallery/5.webp'), alt: 'Slide 8' },
          { url: require('@/assets/images/OurClinic/gallery/7.webp'), alt: 'Slide 9' },
          { url: require('@/assets/images/OurClinic/gallery/8.webp'), alt: 'Slide 10' },
          { url: require('@/assets/images/OurClinic/gallery/15.webp'), alt: 'Slide 11' },
          { url: require('@/assets/images/OurClinic/gallery/22.webp'), alt: 'Slide 12' },
          { url: require('@/assets/images/OurClinic/gallery/2.webp'), alt: 'Slide 13' },
          { url: require('@/assets/images/OurClinic/gallery/3.webp'), alt: 'Slide 14' },
          
          // Add more images here with different URLs and alt text
        ],
        isOpen: false,
        openIndex: null,
        showLeftArrow: [],
        showRightArrow: []
      };
    },
    methods: {
      openImage(index) {
        this.isOpen = true;
        this.openIndex = index;
      },
      closeImage() {
        this.isOpen = false;
        this.openIndex = null;
      },
      prevImage() {
        if (this.openIndex > 0) {
          this.openIndex--;
        } else {
          this.openIndex = this.images.length - 1;
        }
      },
      nextImage() {
        if (this.openIndex < this.images.length - 1) {
          this.openIndex++;
        } else {
          this.openIndex = 0;
        }
      },
      showArrows(index) {
        this.showLeftArrow.splice(index, 1, true);
        this.showRightArrow.splice(index, 1, true);
      },
      hideArrows(index) {
        this.showLeftArrow.splice(index, 1, false);
        this.showRightArrow.splice(index, 1, false);
      }
    },
    mounted() {
      // Initialize the arrays to false for each image
      this.showLeftArrow = new Array(this.images.length).fill(false);
      this.showRightArrow = new Array(this.images.length).fill(false);
    }
  };
  </script>
  
  