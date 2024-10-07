<template>
    <div class="gallery-area pt-100 pb-100">
        <div class="container">
            <div class="section-title">
                <span class="sub-title">
                    <i class="flaticon-hashtag-symbol"></i>
                    {{ $t('gallery_span') }}
                </span>
                <h2>{{ $t('gallery_h2') }}</h2>
                <p ref="sectionTopNextPrevious">{{ $t('gallery_p') }}</p>
            </div>

            <!-- Buttons for filtering by category -->
            <div class="gallery-list-tab">
                <div class="tabs">
                    <div class="tabs__header" style="display: flex; justify-content: center;">
                        <button class="tabs__header-item" @click="resetFilter" :class="{ 'active': !activeCategory }">{{ $t('gallery_button_all_photos') }}</button>
                        <button class="tabs__header-item" v-for="(category, index) in uniqueCategories" :key="index" @click="filterPhotos(category)" :class="{ 'active': activeCategory === category }">
                            {{ category }}
                        </button>
                    </div>
                </div>

                <!-- Display photos for the current page -->
                <div class="row">
                    <div class="col-lg-4 col-md-6" v-for="(photo, index) in displayedPhotos" :key="index">
                        <div class="single-gallery">
                            <img :src="photo.url" :alt="'Photo ' + (index + 1)">
                            <p>{{ photo.category }}</p>
                        </div>
                    </div>
                </div>

                <!-- Pagination controls -->
                <div class="pagination" v-if="showPagination">
                    <button @click="prevPage" :disabled="currentPage === 1">{{ $t('gallery_button_previous') }}</button>
                    <span>{{ $t('gallery_page') }} {{ currentPage }} {{ $t('gallery_from') }}  {{ totalPages }}</span>
                    <button @click="nextPage" :disabled="currentPage === totalPages">{{ $t('gallery_button_next') }}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LargeScreenGalleryLayout',
    data() {
        return {
            photos: [
                { url: require('@/assets/images/services/all6/all61.webp'), category:this.$t('gallery_allx') },
                { url: require('@/assets/images/services/all6/all63.webp'), category: this.$t('gallery_allx') },
                { url: require('@/assets/images/services/all4/all4r.webp'), category: this.$t('gallery_allx') },
                { url: require('@/assets/images/services/implants/single-implant.webp'), category: this.$t('gallery_implants') },
                { url: require('@/assets/images/services/zircCrowns/zirconiacrowns.webp'),  category: this.$t('gallery_zcrowns')},
                { url: require('@/assets/images/services/zircCrowns/zirconia_client.webp'), category: this.$t('gallery_zcrowns')},
                { url: require('@/assets/images/services/bridges/dental-bridges-ex.webp'), category: this.$t('gallery_zbridges')},
                { url: require('@/assets/images/services/bridges/dental-bridges-ex1.webp'), category: this.$t('gallery_zbridges')},
                
                { url: require('@/assets/images/services/full-mouth-rehab/full_mouth1.webp'), category: this.$t('gallery_rehab') },
               
                { url: require('@/assets/images/services/resin-veneers/client1.webp'), category: this.$t('gallery_veneers') },
                // Add more photos here with their respective categories
            ],
            activeCategory: null, // New property to track active category
            itemsPerPage: 6, // Number of photos per page
            currentPage: 1 // Current page
        };
    },
    computed: {
        showPagination() {
            if (!this.activeCategory) {
                return true; // Show pagination if no category is selected
            } else {
                const categoryPhotos = this.photos.filter(photo => photo.category === this.activeCategory);
                return categoryPhotos.length >= 6; // Show pagination if category has 6 or more photos
            }
        },

        uniqueCategories() {
            return [...new Set(this.photos.map(photo => photo.category))];
        },
        filteredPhotos() {
            if (!this.activeCategory) {
            return this.photos; // Return all photos if no active category is selected
            } else {
            return this.photos.filter(photo => photo.category === this.activeCategory);
            }
        },
        totalPages() {
            return Math.ceil(this.filteredPhotos.length / this.itemsPerPage);
        },
        displayedPhotos() {
            const startIndex = (this.currentPage - 1) * this.itemsPerPage;
            const endIndex = startIndex + this.itemsPerPage;
            return this.filteredPhotos.slice(startIndex, endIndex);
        }
    },
    methods: {
        filterPhotos(category) {
        this.selectedCategory = category;
        this.currentPage = 1;
        this.activeCategory = category; // Set active category when clicked
        this.scrollToTop();
        },
        resetFilter() {
        this.selectedCategory = null;
        this.currentPage = 1;
        this.activeCategory = null; // Reset active category
        this.scrollToTop();
        },
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.currentPage++;
                this.scrollToTop(); // Call the method to scroll to the top
            }
        },
        prevPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
                this.scrollToTop(); // Call the method to scroll to the top
            }
        },
        // Method to scroll to the top of the page at the level of section title
        scrollToTop() {
            const sectionTopNextPrevious = this.$refs.sectionTopNextPrevious;
            if (sectionTopNextPrevious) {
                sectionTopNextPrevious.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    }
}
</script>
