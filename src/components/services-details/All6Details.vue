<template>
    <div class="services-details-area ptb-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-12">
                    <div class="services-details-image">
                        <img src="../../assets/images/services/all6/all6.webp" alt="image">
                    </div>

                    <div class="services-details-content">
                        <u><h3>{{ $t('all6_title') }}</h3></u>
                        <p>{{ $t('all6_page_p') }}</p>
                        <!-- Video Section -->
                    <div class="services-details-content">
                        <div class="video-container">
                            <iframe width="360" height="115" src="https://www.youtube.com/embed/Ushnj78EvH4" frameborder="0" allowfullscreen></iframe>
                        </div>
                    </div>
                    </div>
                    <div class="services-details-content">
                        <u><h3>{{ $t('all6_page_protocol_title') }}</h3></u>
                        <p>{{ $t('all6_page_protocol_p') }}</p>
                    </div>

                    <div class="services-details-content">
                        <u><h3>{{ $t('all6_page_all4_title') }}</h3></u>
                        <p>{{ $t('all6_page_all4_p') }}</p>
                        <p>{{ $t('all6_page_all4_p1') }}</p>
                    </div>

                    <div class="services-details-overview">
                        <div class="row">
                            <div class="col-lg-6 col-md-6">
                                <div class="single-gallery">
                                    <img src="../../assets/images/services/all6/all61.webp" alt="image">
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6">
                                <div class="single-gallery">
                                    <img src="../../assets/images/services/all6/all62.webp" alt="image">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="services-details-content">
                        <u><h3>{{ $t('all6_page_guided_title') }}</h3></u>
                        <p>{{ $t('all6_page_guided_p') }}</p>
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
    name: 'All6Details',
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
        const servicesDetailsAreaBottom = servicesDetailsArea.getBoundingClientRect().bottom + window.scrollY - sidebar.offsetHeight - 210; // Adjust 100 to stop earlier

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

<style>
.video-container {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
    height: 0;
}
.video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>
