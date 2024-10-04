<template>
    <div class="home-slides">
        <carousel
            :autoplay="5000"
            :wrap-around="true"
        >
            <slide 
                v-for="slide in carouselItems" 
                :key="slide.id"
            >
                <div :class="slide.class">
                    <div class="container">
                        <div class="main-slides-content">
                            <span class="sub-title">
                                <i class="flaticon-hashtag-symbol"></i>
                                {{slide.subtitle}}
                            </span>
                            <h1>{{slide.heading}}</h1>
                            <p>{{slide.description}}</p>
                            
                            <div class="slides-btn">
                                <router-link 
                                    :to="slide.btnLinkOne" 
                                    class="default-btn"
                                >
                                    {{slide.btnTextOne}}
                                </router-link>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </slide>
            
            <template #addons>
                <Navigation />
            </template>
        </carousel>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import { Carousel, Slide, Navigation  } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

export default defineComponent ({
    name: 'MainBanner',
    components: {
        Carousel,
        Slide,
        Navigation,
    },
    data: () => ({
        carouselItems: [
            {
                id: 1,
                class: 'main-slides-item item-bg4',
                subtitle: 'Keeping Teeth Clean',
                heading: 'The World Best Dental Specialist Treatment',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                btnTextOne: 'Contact Us',
                btnLinkOne: '/contact-us',
                
            },
            {
                id: 2,
                class: 'main-slides-item item-bg5',
                subtitle: 'Keeping Teeth Clean',
                heading: 'The World Best Dental Specialist Treatment',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                btnTextOne: 'Contact Us',
                btnLinkOne: '/contact-us',
            },
            {
                id: 3,
                class: 'main-slides-item item-bg6',
                subtitle: 'Keeping Teeth Clean',
                heading: 'The World Best Dental Specialist Treatment',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                btnTextOne: 'Contact Us',
                btnLinkOne: '/contact-us',
            },
        ],
    })
})
</script>