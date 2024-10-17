<template>
    <div class="blog-details-area ptb-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-12">
                    <div class="blog-details-desc">
                        <div class="article-image">
                            <img src="../../assets/images/blog/preventive-dentistry/preventive_dentistry_page.webp" alt="image">

                        </div>

                        <div class="article-content">
                            <div class="row">
                                

                                <h2><u>{{ $t('blog_page_preventive_dentistry_title') }}</u></h2>
                                <p><b>{{ $t('blog_page_preventive_dentistry_h4') }}</b></p>
                                <p>{{ $t('blog_page_preventive_dentistry_p') }}</p>
                            </div>
                            
                            

                            <div class="row">
                                <div class="col-lg-6 col-md-6">
                                    <div class="photo-container">
                                        <div class="single-doctor">
                                            <router-link to="/sport-splints">
                                                <img src="../../assets/images/blog/preventive-dentistry/athlitikoi-narthikes.webp" alt="image">
                                            </router-link>
                                            <div class="doctor-content">
                                                <h3>
                                                    <router-link to="/sport-splints">
                                                        {{ $t('blog_page_preventive_dentistry_li_1') }}
                                                    </router-link>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6">
                                    <div class="photo-container">
                                        <div class="single-doctor">
                                            <router-link to="/sleep-apnea">
                                                <img src="../../assets/images/blog/preventive-dentistry/apnea.webp" alt="image">
                                            </router-link>
                                            <div class="doctor-content">
                                                <h3>
                                                    <router-link to="/sleep-apnea">
                                                        {{ $t('blog_page_preventive_dentistry_li_2') }}
                                                    </router-link>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            

                            
                            
                            
                            <div class="article-tag" style="padding-top:110px ;">
                                <span>Share:</span>
                                <a href="https://www.facebook.com/" target="_blank"><i class='bx bxl-facebook'></i></a>
                                <a href="https://twitter.com/?lang=en" target="_blank"><i class='bx bxl-twitter'></i></a>
                                <a href="https://www.linkedin.com/" target="_blank"><i class='bx bxl-linkedin'></i></a>
                                <a href="https://www.instagram.com/" target="_blank"><i class='bx bxl-instagram'></i></a>
                            </div>
                        </div>

                        
                    </div>
                </div>

                <div class="sidebar-container col-md-4 col-sm-12">
                    <div class="sidebar-wrapper" ref="sidebar">
                        <BlogSidebar />
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>

import BlogSidebar from '../Common/BlogSidebar'
export default {
    name: 'PreventiveDentistry',
    components: {
        BlogSidebar
    },
        mounted() {
        // Get the sidebar element
        const sidebar = this.$refs.sidebar;

        // Get the navigation bar height
        const navbarHeight = document.querySelector('nav').offsetHeight;

        // Calculate the top position of the sidebar
        const sidebarTop = sidebar.getBoundingClientRect().top + window.scrollY - navbarHeight;

        // Get the services details area container
        const servicesDetailsArea = document.querySelector('.blog-details-area');

        // Get the height of the services details area
        const servicesDetailsAreaHeight = servicesDetailsArea.offsetHeight;

        // Calculate the bottom position of the services details area
        const servicesDetailsAreaBottom = servicesDetailsArea.getBoundingClientRect().bottom + window.scrollY - sidebar.offsetHeight - 150; // Adjust 100 to stop earlier

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
    
}
</script>

<style scoped>
    

    

    .doctor-content h3 {
        white-space: nowrap; /* Prevent the text from wrapping */
        overflow: hidden; /* Hide any overflow */
        text-overflow: ellipsis; /* Display an ellipsis (...) to indicate overflow */
        margin: 0; /* Remove default margin */
    }
</style>
