<template>
    <div class="review-area ptb-100">
        <div class="container">
            <div class="row align-items-center">
                <div class="section-title">
                    <span class="sub-title">
                        <i class="flaticon-hashtag-symbol"></i>
                        {{ $t('testimonials_mainpage_span') }}
                    </span>
                    <h2>{{ $t('testimonials_mainpage_title') }}</h2>
                </div>
            </div>
            <div class="review-slides" style="padding: 20px;">
                <carousel
                    :autoplay="5000"
                    :settings='settings' 
                    :breakpoints='breakpoints'
                    @touchstart="onTouchStart"
                    @touchmove="onTouchMove"
                    @touchend="onTouchEnd"
                >
                    <slide v-for="(slide, index) in infiniteCarouselItems" :key="index">
                        <div class="single-review-item">
                            <p>{{slide.description}}</p>
                            <div class="review-info">
                                <img :src="slide.image" alt="image">
                                <div>
                                    <h3>{{slide.name}}</h3>
                                    <span>{{slide.date}}</span>
                                </div>
                            </div>
                        </div>
                    </slide>
                </carousel>
            </div>
            <div class="view-all-btn-container">
              <router-link to="/testimonials" class="default-btn">{{ $t('button_view_all') }}</router-link>
            </div>
        </div>
    </div>
</template>


<script>
import { defineComponent } from 'vue';
import { Carousel, Slide, Pagination } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

export default defineComponent ({
    name: 'OurClients',
    components: {
        Carousel,
        Slide,
        Pagination,
    },
    data: () => ({
        settings: {
            itemsToShow: 1,
            snapAlign: 'center',
        },
        carouselItems: [
        {
                id: 1,
                icon: 'flaticon-left-quote',
                description: 'Εξαιρετική γιατρός',
                image: require('../../assets/images/review/sot_nikolopoulos.webp'),
                name: "Sotiris Nikolopoulos",
                date: "2021",
            },
            {
                id: 2,
                icon: 'flaticon-left-quote',
                description: 'Εξαιρετική εργασία και πάρα πολύ φιλική. Από τις καλυτερες στο χώρο αυτό.',
                image: require('../../assets/images/review/george_scorpio.webp'),
                    name: "geo scorpio",
                date: '2018',
            },
            
            
            
            {
                id: 3,
                icon: 'flaticon-left-quote',
                description: 'Amazing dentist',
                image: require('../../assets/images/review/victoria_yavorskaia.webp'),
                name: "Victoria Yavorskaia",
                date: "2022",
            },
            
        ],
        breakpoints: {
            0: {
                itemsToShow: 1,
                snapAlign: 'center',
            },
            768: {
                itemsToShow: 2,
                snapAlign: 'center',
            },
            1200: {
                itemsToShow: 3,
                snapAlign: 'center',
            },
        },
    }),
    computed: {
        infiniteCarouselItems() {
            const carouselLength = this.carouselItems.length;
            const duplicatedItems = [];

            // Duplicate carouselItems to make the carousel infinite
            for (let i = 0; i < carouselLength * 2; i++) {
                const index = i % carouselLength;
                duplicatedItems.push({...this.carouselItems[index], key: i});
            }

            return duplicatedItems;
        }
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
})
</script>


