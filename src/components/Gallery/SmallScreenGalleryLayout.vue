<template>
  <div class="gallery-area pt-100 pb-100">
    <div class="container">
      <!-- Section title -->
      <div class="section-title">
        <span class="sub-title">
          <i class="flaticon-hashtag-symbol"></i>
          {{ $t('gallery_title') }}
        </span>
        <h2>{{ $t('gallery_h2') }}</h2>
        <p ref="sectionTopNextPrevious">{{ $t('gallery_p') }}</p>
      </div>

      <!-- Accordion for filtering by category -->
      <div class="accordion">
        <div v-for="(category, index) in uniqueCategories" :key="index" class="accordion-item" :data-category="category">

          <button @click="toggleAccordion(index)" class="accordion-header">
            <span style="color: black;">{{ category }}</span>
            <span class="plus-icon-container">
              <i class='bx bx-plus'></i>
            </span>
          </button>
          <div v-show="activeAccordion === index" class="accordion-content">
            <template v-if="paginatedPhotosByCategory(category).length < 3">
              <div class="row centered-row">
                <div class="col-lg-4 col-md-6" v-for="(photo, photoIndex) in paginatedPhotosByCategory(category)" :key="photoIndex">
                  <div class="single-gallery">
                    <img :src="photo.url" :alt="'Photo ' + (photoIndex + 1)">
                    <p>{{ photo.category }}</p>
                  </div>
                </div>
              </div>
            </template>
            <template v-else>
              <div class="row">
                <div class="col-lg-4 col-md-6" v-for="(photo, photoIndex) in paginatedPhotosByCategory(category)" :key="photoIndex">
                  <div class="single-gallery">
                    <img :src="photo.url" :alt="'Photo ' + (photoIndex + 1)">
                    <p>{{ photo.category }}</p>
                  </div>
                </div>
              </div>
            </template>
            <!-- Pagination controls -->
            <div v-if="getPageCount(category) > 1" class="pagination">
              <button v-if="currentPage > 1" @click="prevPage(category)">{{ $t('gallery_button_previous') }}</button>
              <span>{{ $t('gallery_page') }} {{ currentPage }} {{ $t('gallery_from') }}  {{ getPageCount(category) }}</span>
              <button v-if="currentPage < getPageCount(category)" @click="nextPage(category)">{{ $t('gallery_button_next') }}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SmallScreenGalleryLayout',
  data() {
    return {
      photos: [
                { url: require('@/assets/images/services/all6/all61.webp'), category:this.$t('gallery_all6') },
                { url: require('@/assets/images/services/all6/all63.webp'), category: this.$t('gallery_all6') },
                { url: require('@/assets/images/services/all4/all4r.webp'), category: this.$t('gallery_all4') },
                { url: require('@/assets/images/services/implants/single-implant.webp'), category: this.$t('gallery_implants') },
                { url: require('@/assets/images/services/zircCrowns/zirconiacrowns.webp'),  category: this.$t('gallery_zcrowns')},
                { url: require('@/assets/images/services/zircCrowns/zirconiacrowns1.webp'), category: this.$t('gallery_zcrowns')},
                { url: require('@/assets/images/services/bridges/dental-bridges-ex.webp'), category: this.$t('gallery_zbridges')},
                { url: require('@/assets/images/services/bridges/dental-bridges-ex1.webp'), category: this.$t('gallery_zbridges')},
                { url: require('@/assets/images/services/hollywoodSmile/hollywood-smile.webp'), category: this.$t('gallery_hsmile')},
                { url: require('@/assets/images/services/hollywoodSmile/hollywood-smile1.webp'), category: this.$t('gallery_hsmile')},
                
                { url: require('@/assets/images/services/whitening/whitening.webp'), category: this.$t('gallery_whitening') },
                { url: require('@/assets/images/services/whitening/whitening1.webp'), category: this.$t('gallery_whitening') },

                { url: require('@/assets/images/services/whitening/whitening.webp'), category: this.$t('gallery_veneers') },
                { url: require('@/assets/images/services/whitening/whitening.webp'), category: this.$t('gallery_rehab') },
                { url: require('@/assets/images/services//inonlays/milena.webp'), category: this.$t('nav_prosthetics_lays') },

                { url: require('@/assets/images/services/denture/denture_bourkoula.webp'), category: this.$t('nav_denture') },
                { url: require('@/assets/images/services/denture/denture_bourkoula1.webp'), category: this.$t('nav_denture') },
                
        // Add more photos here with their respective categories
      ],
      activeAccordion: null,
      currentPage: 1,
      photosPerPage: 6, // Number of photos per page
    };
  },
  computed: {
    uniqueCategories() {
      return [...new Set(this.photos.map(photo => photo.category))];
    },
  },
  methods: {
    toggleAccordion(index) {
      this.activeAccordion = this.activeAccordion === index ? null : index;
      this.currentPage = 1; // Reset current page when toggling accordion
      this.scrollToTop();
    },
    scrollToTop() {
      const sectionTopNextPrevious = this.$refs.sectionTopNextPrevious;
      if (sectionTopNextPrevious) {
        sectionTopNextPrevious.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    },
    paginatedPhotosByCategory(category) {
      const startIndex = (this.currentPage - 1) * this.photosPerPage;
      const endIndex = startIndex + this.photosPerPage;
      return this.filteredPhotosByCategory(category).slice(startIndex, endIndex);
    },
    filteredPhotosByCategory(category) {
      return this.photos.filter(photo => photo.category === category);
    },
    getPageCount(category) {
      const totalPhotos = this.filteredPhotosByCategory(category).length;
      return Math.ceil(totalPhotos / this.photosPerPage);
    },
    nextPage(category) {
      if (this.currentPage < this.getPageCount(category)) {
        this.currentPage++;
        this.scrollToAccordion(category);
      }
    },  
    prevPage(category) {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.scrollToTop();
      }
    },
    scrollToAccordion(category) {
      const accordionItem = document.querySelector(`.accordion-item[data-category="${category}"]`);
      if (accordionItem) {
        // Adding a timeout to ensure smooth scrolling on iOS devices
        setTimeout(() => {
          accordionItem.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100); // Adjust the timeout duration as needed
      }
    },
  },
};
</script>

