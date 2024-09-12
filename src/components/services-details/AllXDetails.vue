<template>
    <div class="services-details-area ptb-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-12">
                    <div class="services-details-image">
                        <img src="../../assets/images/services/all6/all6.webp" alt="image">
                    </div>

                    <div class="services-details-content">
                        <u><h3>{{ $t('allx_title') }}</h3></u>
                        <p>{{ $t('allx_page_p') }}</p>
                        <!-- Video Section 
                    <div class="services-details-content">
                        <div class="video-container">
                            <iframe width="360" height="115" src="https://www.youtube.com/embed/Ushnj78EvH4" frameborder="0" allowfullscreen></iframe>
                        </div>
                    </div>-->
                    
                    </div>
                    <div class="services-details-content">
                        <u><h3>{{ $t('allx_title1') }}</h3></u>
                        <p>{{ $t('allx_page_p1') }}</p>
                    </div>
                    
                    <div class="services-details-content">
                        <u><h3>{{ $t('allx_title2') }}</h3></u>
                        <p>{{ $t('allx_page_p2') }}</p>
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
                        <u><h3>{{ $t('allx_title3') }}</h3></u>
                        <p>{{ $t('allx_page_p3') }}</p>
                    </div>
                    
                    <div class="services-details-content">
                        <u><h3>{{ $t('allx_title4') }}</h3></u>
                        <p>{{ $t('allx_page_p4') }}</p>
                    </div>
                    <div class="services-details-content">
                        <u><h3>{{ $t('allx_title5') }}</h3></u>
                        <p>{{ $t('allx_page_p5') }}</p>
                    </div>
                    
                    <div class="services-details-content">
                        <u><h3>{{ $t('allx_title6') }}</h3></u>
                        <p>{{ $t('allx_page_p6') }}</p>
                    </div>

                    

                 
                    
                </div>

                <div class="sidebar-container col-md-4 col-sm-12">
                    <div class="sidebar-wrapper" ref="sidebar">
                        <BlogSidebarAllonX />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BlogSidebarAllonX from '../../components/services-sidebars/BlogSidebarAllonX.vue';

export default {
    name: 'AllXDetails',
    components: {
        BlogSidebarAllonX
    },
    mounted() {
    // Get the sidebar element
    const sidebar = this.$refs.sidebar;

    // Capture the initial width of the sidebar before fixing it
    const sidebarInitialWidth = sidebar.offsetWidth;

    // Get the navigation bar height
    const navbarHeight = document.querySelector('nav').offsetHeight;

    // Calculate the top position of the sidebar
    const sidebarTop = sidebar.getBoundingClientRect().top + window.scrollY - navbarHeight;

    // Get the services details area container
    const servicesDetailsArea = document.querySelector('.services-details-area');

    // Get the height of the services details area
    const servicesDetailsAreaHeight = servicesDetailsArea.offsetHeight;

    // Calculate the bottom position of the services details area
    const servicesDetailsAreaBottom = servicesDetailsArea.getBoundingClientRect().bottom + window.scrollY - sidebar.offsetHeight - 210; // Adjust 210 to stop earlier

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
            sidebar.style.width = `${sidebarInitialWidth}px`; // Keep the sidebar width consistent
        } else {
            // Release the fixed position of the sidebar
            sidebar.style.position = 'static';
            sidebar.style.width = ''; // Reset the width when not fixed
        }
    });
}

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
