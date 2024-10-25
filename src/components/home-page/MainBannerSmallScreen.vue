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
                heading: 'Brighten Your Smile Today!',
                btnTextOne: 'Contact Us',
                btnLinkOne: '/contact-us',
                
            },
          
            {
                id: 2,
                class: 'main-slides-item item-bg6',
                subtitle: 'Keeping your smile Bright',
                heading: 'Your Smile, Our Priority!',
                btnTextOne: 'Contact Us',
                btnLinkOne: '/contact-us',
            },
        ],
    })
})
</script>
<style>
.align-right {
    display: flex;
    justify-content: flex-end; 
    padding-right: -70px; /* Adds more space from the right */
}

.align-right .main-slides-content {
    text-align: right;
    margin-right: -70px; /* Adds more space from the right for finer control */
}
</style>