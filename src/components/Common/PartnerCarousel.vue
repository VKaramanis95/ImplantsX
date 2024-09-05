<template>
    <div id="logosCarousel" class="repair-partner-area bg-f9fafb">
        <div class="container">
            <div class="partner-slides">
                <carousel
                    :autoplay="1600"
                    :settings='settings' 
                    :breakpoints='breakpoints'
                    :infinite="true" 
                >
                    <slide v-for="(slide, index) in infiniteCarouselItems" :key="index">
                        <div class="single-repair-partner">
                            <a href="#">
                                <img :src="slide.image" alt="image">
                                <img :src="slide.imageHover" alt="image">
                            </a>
                        </div>
                    </slide>
                </carousel>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import { Carousel, Slide  } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

export default defineComponent ({
    name: 'PartnerCarousel',
    components: {
        Carousel,
        Slide,
    },
    data: () => ({
        settings: {
            itemsToShow: 1,
            snapAlign: 'center',
        },
        carouselItems: [
            {
                id: 1,
                image: require('../../assets/images/partner/partner-1.webp'),
                imageHover: require('../../assets/images/partner/partner-1.webp'),
            },
            {
                id: 2,
                image: require('../../assets/images/partner/partner-2.webp'),
                imageHover: require('../../assets/images/partner/partner-2.webp'),
            },
            {
                id: 3,
                image: require('../../assets/images/partner/partner-3.webp'),
                imageHover: require('../../assets/images/partner/partner-3.webp'),
            },
            {
                id: 4,
                image: require('../../assets/images/partner/partner-4.webp'),
                imageHover: require('../../assets/images/partner/partner-4.webp'),
            },
            {
                id: 5,
                image: require('../../assets/images/partner/partner-5.webp'),
                imageHover: require('../../assets/images/partner/partner-5.webp'),
            },
            {
                id: 6,
                image: require('../../assets/images/partner/partner-6.webp'),
                imageHover: require('../../assets/images/partner/partner-6.webp'),
            },
            {
                id: 7,
                image: require('../../assets/images/partner/partner-1.webp'),
                imageHover: require('../../assets/images/partner/partner-1.webp'),
            },
            {
                id: 8,
                image: require('../../assets/images/partner/partner-2.webp'),
                imageHover: require('../../assets/images/partner/partner-2.webp'),
            },
            {
                id: 9,
                image: require('../../assets/images/partner/partner-3.webp'),
                imageHover: require('../../assets/images/partner/partner-3.webp'),
            },
            {
                id: 10,
                image: require('../../assets/images/partner/partner-4.webp'),
                imageHover: require('../../assets/images/partner/partner-4.webp'),
            },
            {
                id: 11,
                image: require('../../assets/images/partner/partner-5.webp'),
                imageHover: require('../../assets/images/partner/partner-5.webp'),
            },
            {
                id: 12,
                image: require('../../assets/images/partner/partner-6.webp'),
                imageHover: require('../../assets/images/partner/partner-6.webp'),
            },
        ],
        breakpoints: {
            0: {
                itemsToShow: 2,
                snapAlign: 'center',
            },
            576: {
                itemsToShow: 3,
                snapAlign: 'center',
            },
            768: {
                itemsToShow: 5,
                snapAlign: 'center',
            },
            1200: {
                itemsToShow: 5,
                snapAlign: 'center',
            },
        },
    }),
    computed: {
        infiniteCarouselItems() {
            // Duplicate carouselItems to make the carousel infinite
            const duplicatedItems = [...this.carouselItems, ...this.carouselItems];
            return duplicatedItems;
        }
    }
})
</script>

