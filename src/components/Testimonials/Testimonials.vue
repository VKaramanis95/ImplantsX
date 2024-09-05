<template>
    <div class="review-area ptb-100" ref="reviewsArea">
        <div class="container">
            <div class="section-title">
                <span class="sub-title" >
                    <i class="flaticon-hashtag-symbol"></i>
                    Our Clients Review
                </span>
                <h2>Real Review From Our Real Customer</h2>

                <div v-if="totalReviews > 0" class="average-score">
                    Average Score: {{ averageRating.toFixed(1) }} / 5
                </div>
                <div class="testimonials-list-tab" style="padding: 15px;">
                    <div class="tabs">
                        
                            <div class="tabs__header">
                                <button class="tabs__header-item" @click="sortReviews('date')" :class="{ 'active': activeCategory === 'date' }">{{ $t('testimonials_button_recent') }}</button>
                                <button class="tabs__header-item" @click="sortReviews('highest')" :class="{ 'active': activeCategory === 'highest' }">{{ $t('testimonials_button_highest') }}</button>
                                <button class="tabs__header-item" @click="sortReviews('lowest')" :class="{ 'active': activeCategory === 'lowest' }">{{ $t('testimonials_button_lower') }}</button>
   
                            </div>
                       
                    </div>
                </div>
                        
                
            </div>

            
            

            <div class="row" >
                <div v-for="(review, index) in displayedReviews" :key="index" class="col-lg-4 col-md-6">
                    <div class="single-review-item mb-30">
                        <div class="icon">
                            <i class="flaticon-left-quote"></i>
                        </div>
                        <p>{{ review.text }}</p>

                        <div class="review-info">
                            <img :src="review.image" alt="image">
                            <h3>{{ review.name }}</h3>
                            <span>{{ review.date }}</span>
                            <!-- Add star rating component -->
                            <div class="star-rating">
                                <span v-for="star in review.rating" :class="{ 'filled': star }">&#9733;</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Pagination -->
            <div v-if="showPagination" class="pagination">
                <button @click="prevPage" :disabled="currentPage === 1">{{ $t('gallery_button_previous') }}</button>
                <span>{{ currentPage }} / {{ totalPages }}</span>
                <button @click="nextPage" :disabled="currentPage === totalPages">{{ $t('gallery_button_next') }}</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Testimonials',
    data() {
        return {
            reviews: [
            {
                    text: "Εξαιρετική εργασία και πάρα πολύ φιλική. Από τις καλυτερες στο χώρο αυτό.",
                    image: require('../../assets/images/review/george_scorpio.webp'),
                    name: "geo scorpio",
                    date: "2018",
                    rating: [true, true, true, true, true] // Example rating: 3 stars
                },
                {
                    text: "",
                    image: require('../../assets/images/review/c.webp'),
                    name: "Christiana Vals",
                    date: "2020",
                    rating: [true, true, true, true, true] // Example rating: 3 stars
                },
                {
                    text: "Εξαιρετική γιατρός",
                    image: require('../../assets/images/review/sot_nikolopoulos.webp'),
                    name: "Sotiris Nikolopoulos",
                    date: "2021",
                    rating: [true, true, true, true, true] // Example rating: 3 stars
                },
                {
                    text: "",
                    image: require('../../assets/images/review/θ.webp'),
                    name: "Θάνος Κρ",
                    date: "2023",
                    rating: [true, true, true, true, true] // Example rating: 3 stars
                },
                {
                    text: "",
                    image: require('../../assets/images/review/victoria_yavorskaia.webp'),
                    name: "Victoria Yavorskaia",
                    date: "2022",
                    rating: [true, true, true, true, true] // Example rating: 3 stars
                },
                {
                    text: "",
                    image: require('../../assets/images/review/n.webp'),
                    name: "Νίκη Στεφάνου",
                    date: "2022",
                    rating: [true, true, true, true, true] // Example rating: 3 stars
                },
                {
                    text: "",
                    image: require('../../assets/images/review/a.webp'),
                    name: "Anastasia Gianneli",
                    date: "2021",
                    rating: [true, true, true, true, true] // Example rating: 3 stars
                },
                {
                    text: "",
                    image: require('../../assets/images/review/a.webp'),
                    name: "Αθανασιος Κωνσταντοπουλος",
                    date: "2019",
                    rating: [true, true, true, true, true] // Example rating: 3 stars
                },
                // Add more reviews here...
            ],
            currentPage: 1,
            pageSize: window.innerWidth > 768 ? 6 : 4, // Maximum reviews per page based on screen size
            sortBy: '',
            activeCategory: null // Track the active category
        };
    },
    computed: {
    totalReviews() {
        return this.reviews.length;
    },
    averageRating() {
        if (this.totalReviews === 0) {
            return 0;
        }
        const totalStars = this.reviews.reduce((acc, review) => acc + review.rating.filter(star => star).length, 0);
        const average = totalStars / this.totalReviews;
        return isNaN(average) ? 0 : average;
    },
    displayedReviews() {
        // Reorder reviews array so that reviews with empty text are moved to the end
        const sortedReviews = [...this.reviews].sort((a, b) => {
            if (!a.text && b.text) return 1;
            if (a.text && !b.text) return -1;
            return 0;
        });
        
        // Calculate pagination based on reordered reviews
        const startIndex = (this.currentPage - 1) * this.pageSize;
        const endIndex = startIndex + this.pageSize;
        
        // Return sliced reviews
        return sortedReviews.slice(startIndex, endIndex);
    },
    totalPages() {
        return Math.ceil(this.reviews.length / this.pageSize);
    },
    showPagination() {
        return this.totalPages > 1;
    }
},
    methods: {
        
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.currentPage++;
                this.scrollToTop();
            }
        },
        prevPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
                this.scrollToTop();
            }
        },
        scrollToTop() {
            const reviewsArea = this.$refs.reviewsArea;
            if (reviewsArea) {
                const topPosition = reviewsArea.getBoundingClientRect().top + window.pageYOffset;
                window.scrollTo({ top: topPosition, behavior: 'smooth' });
            }
        },
        sortReviews(criteria) {
            this.sortBy = criteria;
            this.activeCategory = criteria;// Update activeCategory to the clicked criteria
            if (criteria === 'highest') {
                this.reviews.sort((a, b) => {
                    const ratingA = a.rating.filter(star => star).length;
                    const ratingB = b.rating.filter(star => star).length;
                    return ratingB - ratingA;
                });
            } else if (criteria === 'lowest') {
                this.reviews.sort((a, b) => {
                    const ratingA = a.rating.filter(star => star).length;
                    const ratingB = b.rating.filter(star => star).length;
                    return ratingA - ratingB;
                });
            } else if (criteria === 'date') {
                this.reviews.sort((a, b) => {
                    const dateA = new Date(a.date);
                    const dateB = new Date(b.date);
                    return  dateB-dateA ;
                });
            }
            // Reset pagination to first page
            this.currentPage = 1;
        }
    }
}
</script>

<style scoped>
.star-rating {
    color: #FFD700; /* Yellow color for filled stars */
}

.star-rating .filled {
    color: #FFD700; /* Yellow color for filled stars */
}
.pagination {
    text-align: center;
}

.pagination button {
    margin: 0 5px;
    padding: 5px 10px;
    cursor: pointer;
}

.pagination button[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
}

.average-score{
    display: inline-block;
    margin-left: 20px;
    padding: 10px;
    background-color: white;
    border-radius: 20px;
}

.tabs__header {
    display: flex;
    justify-content: space-between; /* Distribute items evenly along the main axis */
    align-items: center; /* Center items vertically */
}

.tabs__header-item {
    flex: 1; /* Make each item take up equal space */
    text-align: center; /* Center the text within each item */
    white-space: nowrap; /* Prevent text from wrapping */
}




@media screen and (max-width: 768px) {
    .average-score {
        margin-left: 10px; /* Adjust margin */
        padding: 5px; /* Adjust padding */
        border-radius: 10px; /* Adjust border radius */
    }
    

    /* Adjust page size for smaller screens */
    .row .col-lg-4.col-md-6 {
        flex: 0 0 100%; /* Show 1 review per row */
        max-width: 100%;
    }

}


</style>