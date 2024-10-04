<template>
    <div class="blog-details-area ptb-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-12">
                    <div class="blog-details-desc">
                        <div class="article-image">
                            <img src="../../assets/images/blog/cbtc/cbtc.webp" alt="image">

                        </div>

                        <div class="article-content">
                            <div class="row">
                                <div class="entry-meta">
                                    <ul>
                                        <li>
                                            <span>{{ $t('blog_post_on') }}</span> 
                                            {{ $t('blog_allx_why_smilemakeover_post_date') }}
                                        </li>
                                        <li>
                                            <span> {{ $t('blog_post_from') }} </span> 
                                            <router-link to="/tsetsenekou">
                                                {{ $t('blog_post_from_tsetsenekou') }}
                                            </router-link>
                                        </li>
                                    </ul>
                                </div>

                                <h2><u>{{ $t('implant_sidebar_title_quality_implant') }}</u></h2>
                                <p>{{ $t('blog_implants_quality_implant_p') }}</p>
                                
                                
                                
                            </div>
                            

                            <div class="article-tag">
                                <span>Share:</span>
                                 <a href="https://www.facebook.com/" alt="Facebook Icon" target="_blank"><i class='bx bxl-facebook'></i></a>
                            <a href="https://twitter.com/?lang=en" target="_blank" alt="Twitter Icon"><i class='bx bxl-twitter'></i></a>
                            <a href="https://www.linkedin.com/"  alt="Twitter Icon" target="_blank"><i class='bx bxl-linkedin'></i></a>
                            <a href="https://www.instagram.com/" alt="Twitter Icon" target="_blank"><i class='bx bxl-instagram'></i></a>
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
    name: 'FirstTimeDentist',
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
        const servicesDetailsAreaBottom = servicesDetailsArea.getBoundingClientRect().bottom + window.scrollY - sidebar.offsetHeight - 200; // Adjust 100 to stop earlier

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


