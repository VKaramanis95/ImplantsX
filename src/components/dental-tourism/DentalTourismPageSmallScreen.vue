<template>
    <div class="services-details-area ptb-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-12">
                    <div class="section-title">
                        <span class="sub-title">
                            <i class="flaticon-hashtag-symbol"></i>
                            {{ $t('dental_tourism_span') }}
                        </span>
            </div>
                    <div class="about-content">
                        
                        <h3>{{ $t('dental_tourism_main_h3') }}</h3>
                        <p >{{ $t('dental_tourism_main_p') }}</p>

                    </div>
                    
                    <div class="row">
                        <div class="services-details-area ptb-100">
                            <h3>{{ $t('dental_tourism_todo_h3') }}</h3>
                            <div class="container">
                                <div class="row align-items-center" >
                                    <div class="col-lg-6 services-details-image">
                                        <img src="../../assets/images/dental-tourism/main-page-image/costa-nauvarinos.webp" alt="image">
                                    </div>

                                    <div class="col-lg-6 services-details">
                                        
                                        <div class="services-details-desc">
                                            <h3>{{ $t('dental_tourism_todo_title_nauvarino') }}</h3>
                                            <p class="glide-in">
                                                {{ $t('dental_tourism_todo_p_nauvarino') }} <b> <a href="https://www.costanavarino.com/navarino-agora/">{{ $t('dental_tourism_todo_p_nauvarino_here') }}</a> </b> {{ $t('dental_tourism_todo_p_nauvarino_end') }}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div class="separate"></div>

                                <div class="row align-items-center">
                                    <div class="col-lg-6 services-details-image">
                                        <img src="../../assets/images/dental-tourism/main-page-image/kalamata-castle.webp" alt="image">
                                    </div>
                                    <div class="col-lg-6 services-details">
                                        <div class="services-details-desc">
                                            <h3> {{ $t('dental_tourism_todo_title_castle') }}</h3>
                                            <p class="glide-in">
                                                {{ $t('dental_tourism_todo_p_castle') }}
                                            </p>

                                        </div>
                                    </div>
                                    

                                </div>

                                <div class="separate"></div>
                                <div class="row align-items-center">
                                    <div class="col-lg-6 services-details-image">
                                        <img src="../../assets/images/dental-tourism/main-page-image/archaeological-museum.webp" alt="image">
                                    </div>

                                    <div class="col-lg-6 services-details">
                                        <div class="services-details-desc">
                                            <h3>{{ $t('dental_tourism_todo_title_museum') }}</h3>
                                            <p class="glide-in"> 
                                                {{ $t('dental_tourism_todo_p_museum') }}  {{ $t('dental_tourism_todo_p_museum_end') }} <b><a href="https://www.visitgreece.gr/experiences/culture/museums/archaeological-museum-of-messenia/"> {{ $t('dental_tourism_todo_p_museum_here') }}</a></b> 
                                            </p>                                
                                        </div>
                                    </div>
                                </div>

                                <div class="row align-items-center">
                                    <div class="col-lg-6 services-details-image">
                                        <img src="../../assets/images/dental-tourism/main-page-image/kayaking.webp" alt="image">                            
                                    </div>
                                    <div class="col-lg-6 services-details">
                                        <div class="services-details-desc">
                                            <h3>{{ $t('dental_tourism_todo_title_outdoor') }}</h3>
                                            <p class="glide-in">
                                                {{ $t('dental_tourism_todo_p_outdoor') }} <b><a href="https://exploremessinia.com/outdoor-activities/land/hiking-over-kalamata/"> {{ $t('dental_tourism_todo_p_outdoor_here') }}</a></b>  {{ $t('dental_tourism_todo_p_outdoor_end') }}
                                            </p>
                                        </div>
                                    </div>

                                    
                                </div>
                                
                            </div>
                        </div>
                        
                    </div>
                    <div class="about-content">
                        <p>{{ $t('dental_tourism_conclusion_p') }} <b><a href="/pricing">{{ $t('dental_tourism_conclusion_here') }}</a></b></p>
                                <p><u><b>{{ $t('dental_tourism_conclusion_p1') }} </b></u></p> 
                        <div class="row">
                            <div class="col-lg-4 col-md-4">
                                <div class="about-info">
                                                <i class="flaticon-caduceus"></i>
                                                <h4>25 {{ $t('dental_tourism_experience_year') }}</h4>
                                                <span>{{ $t('dental_tourism_experience_span') }}</span>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-4">
                                <div class="about-info">
                                                <i class="flaticon-chair"></i>
                                                <h4>6405+</h4>
                                                <span>{{ $t('dental_tourism_clients_span') }}</span>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-4" v-if="userCountry !== 'Greece'" @mouseover="underlineClickHere" @mouseleave="removeUnderline">
                                <div class="about-info">
                                    <i class="flaticon-euro"></i>
                                    <h4>{{ $t('dental_tourism_prices') }}</h4>
                                    <router-link to="/pricing">
                                        <span :style="{ 'text-decoration': underlineClick ? 'underline' : 'none', 'font-weight': underlineClick ? 'bold' : 'normal' }"><a href="/pricing">{{ $t('dental_tourism_prices_clik_span') }}</a></span>
                                    </router-link>
                
                                </div>
                            </div>        
                        </div>
                    </div>
                   

                </div>
                <div class="sidebar-container col-md-4 col-sm-12">
                    <div class="sidebar-wrapper" ref="sidebar">
                        <BlogSideBarDentalTourism />
                    </div>
                </div>
  
            </div>

        </div>
    </div>
</template>

<script>
import BlogSideBarDentalTourism from '../dental-tourism/BlogSideBarDentalTourism.vue';

export default {
    name: 'DentalTourismPageSmallScreen',
    components: {
        BlogSideBarDentalTourism
    },
    data() {
        return {
            underlineClick: false,
            userCountry: null 
        };
    },
    mounted() {
            this.fetchUserCountry();
            window.addEventListener('scroll', this.handleScroll);
            this.handleScroll(); // Call handleScroll once on mount to initialize elements in viewport
    },

    methods: {
        fetchUserCountry() {
            fetch('https://ipapi.co/json/')
                .then(response => response.json())
                .then(data => {
                    this.userCountry = data.country_name;
                })
                .catch(error => {
                    console.error('Error fetching country:', error);
                    this.userCountry = 'Unknown'; // Fallback if there's an error
                });
        },
        handleScroll() {
            let elements = document.querySelectorAll('.glide-in');
            elements.forEach(element => {
                if (this.isElementInViewport(element)) {
                    element.classList.add('glide-in-visible');
                }
            });
        },
        isElementInViewport(el) {
            var rect = el.getBoundingClientRect();
            return (
                rect.top < window.innerHeight * 0.9 &&  // Adjust this value to make the element visible earlier
                rect.bottom > window.innerHeight * 0.1  // Adjust this value as needed
            );
        },
        
        destroyed() {
            window.removeEventListener('scroll', this.handleScroll);
        }
    }
}
</script>

