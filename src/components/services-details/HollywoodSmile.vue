<template>
    <div class="services-details-area ptb-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-12">
                    <div class="services-details-image">
                        <img src="../../assets/images/services/hollywoodSmile/hollywood-smile-page-bg.webp" alt="image">
                    </div>

                    <div class="services-details-content">
                        <u><h3>{{ $t('hollywood_smile_page_what_title') }}</h3></u>
                        <p>{{ $t('hollywood_smile_page_what_p') }}</p>
                        <p>{{ $t('hollywood_smile_page_what_p1') }}</p>
                    </div>
                    
                    <div class="services-details-content">
                        <u><h3>{{ $t('hollywood_smile_page_purpose_title') }}</h3></u>
                        <p> {{ $t('hollywood_smile_page_purpose_p') }}</p>
                        <ol>
                                <li>
                                     {{ $t('hollywood_smile_page_purpose_li_1') }}
                                </li>
                                <li>
                                     {{ $t('hollywood_smile_page_purpose_li_2') }}
                                </li>

                                <li>
                                     {{ $t('hollywood_smile_page_purpose_li_3') }}
                                </li>
                                <li>
                                     {{ $t('hollywood_smile_page_purpose_li_4') }}
                                </li>
                                <li>
                                     {{ $t('hollywood_smile_page_purpose_li_5') }}
                                </li>
                            </ol> 
                    </div>

                    <div class="services-details-content">
                        <u><h3>{{ $t('hollywood_smile_page_longevity_title') }}</h3></u>
                        <p >{{ $t('hollywood_smile_page_longevity_p') }}</p>
                    </div>

                    

                    <div class="services-details-overview">
                        <div class="row">
                            <div class="col-lg-6 col-md-6">
                                <div class="single-gallery">
                                    <img src="../../assets/images/services/hollywoodSmile/clients/hs.webp" alt="image">
                                </div>
                            </div>
        
                            <div class="col-lg-6 col-md-6">
                                <div class="single-gallery">
                                    <img src="../../assets/images/services/hollywoodSmile/clients/hs1.webp" alt="image">
                                </div>
                            </div>
                        </div>
                    </div>

                  


                    <div class="services-details-content">
                        <u><h3>{{ $t('hollywood_smile_page_stages_title') }}</h3></u>
                        <p >{{ $t('hollywood_smile_page_stages_p') }}</p>
                            <ol>
                                <li>
                                    <b>{{ $t('hollywood_smile_page_stages_evaluation_bold') }}</b> {{ $t('hollywood_smile_page_stages_evaluation') }}
                                </li>
                                <li>
                                    <b>{{ $t('hollywood_smile_page_stages_preview_bold') }}</b> {{ $t('hollywood_smile_page_stages_preview') }}
                                </li>

                                <li>
                                    <b>{{ $t('hollywood_smile_page_stages_permanent_veneers_bold') }}</b> {{ $t('hollywood_smile_page_stages_permanent_veneers') }}
                                </li>
                                <li>
                                    <b>{{ $t('hollywood_smile_page_stages_smile_bold') }}</b> {{ $t('hollywood_smile_page_stages_smile') }}
                                </li>
 
                            </ol> 
                        <p >{{ $t('hollywood_smile_page_stages_p1') }}</p>
                    </div>

                </div>
                <div class="sidebar-container col-md-4 col-sm-12">
                    <div class="sidebar-wrapper" ref="sidebar">
                        <BlogSidebarImplants />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BlogSidebarImplants from '../../components/services-sidebars/BlogSidebarImplants.vue';

    export default {
        name: 'HollywoodSmile',
        components: {
            BlogSidebarImplants
        },
        mounted() {
            // Get the sidebar element
            const sidebar = this.$refs.sidebar;

            // Get the navigation bar height
            const navbarHeight = document.querySelector('nav').offsetHeight;

            // Calculate the top position of the sidebar
            const sidebarTop = sidebar.getBoundingClientRect().top + window.scrollY - navbarHeight;

            // Get the services details area container
            const servicesDetailsArea = document.querySelector('.services-details-area');

            // Get the height of the services details area
            const servicesDetailsAreaHeight = servicesDetailsArea.offsetHeight;

            // Calculate the bottom position of the services details area
            const servicesDetailsAreaBottom = servicesDetailsArea.getBoundingClientRect().bottom + window.scrollY - sidebar.offsetHeight - 250; // Adjust 100 to stop earlier

            // Add padding to the top of the sidebar equal to the height of the navigation bar
            sidebar.style.paddingTop = `${navbarHeight}px`;

            // Add scroll event listener to window
            window.addEventListener('scroll', () => {
                // Calculate the scroll distance from top
                const scrollTop = window.scrollY;

                // Check if the scroll distance is greater than or equal to the top position of the sidebar
                // and less than the position of the bottom of the services details area
                if (scrollTop >= sidebarTop && scrollTop <= servicesDetailsAreaBottom) {
                    // Fix the position of the sidebar
                    sidebar.style.position = 'fixed';
                    sidebar.style.top = `${navbarHeight}px`; // Adjust for the height of the navigation bar
                } else {
                    // Release the fixed position of the sidebar
                    sidebar.style.position = 'static';
                }
            });
        },
    };
    
</script>


