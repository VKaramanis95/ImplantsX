<template>
    <div class="services-details-area ptb-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-12">
                    <div class="services-details-image">
                        <img src="../../assets/images/services/orofacial-pain/orofacial_main_page.webp" alt="image">
                    </div>

                    <div class="services-details-content">
                        <u><h3>{{ $t('orofacial_title') }}</h3></u>
                        <p>{{ $t('orofacial_p') }}</p> 
                    </div>

                    <div class="services-details-content">
                        <u><h3>{{ $t('orofacial_title_what') }}</h3></u>
                        <p>{{ $t('orofacial_title_what_p') }}</p> 
                    </div>


                    <div class="services-details-overview">
                        <div class="row">
                            <div class="col-lg-6 col-md-6">
                                <div class="single-gallery">
                                    <img src="../../assets/images/services/implants/single-implant.webp" alt="image">

                                </div>
                            </div>
        
                            <div class="col-lg-6 col-md-6">
                                <div class="single-gallery">
                                    <img src="../../assets/images/services/implants/single-implant.webp" alt="image">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="services-details-content">
                        <u><h3>{{ $t('orofacial_title_symptoms') }}</h3></u>
                        <p>{{ $t('orofacial_title_symptoms_p') }}</p> 
                    </div>

                    <div class="services-details-content">
                        <u><h3>{{ $t('orofacial_title_therapy') }}</h3></u>
                        <p>{{ $t('orofacial_title_therapy_p') }}</p> 
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
        name: 'OrofacialPain',
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
            const servicesDetailsAreaBottom = servicesDetailsArea.getBoundingClientRect().bottom + window.scrollY - sidebar.offsetHeight - 130; // Adjust 100 to stop earlier

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
