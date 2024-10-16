<template>
    <div class="services-details-area ptb-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-12">
                    <div class="services-details-image">
                        <img src="../../assets/images/services/conscious-sedation/conscious-sedation_main.webp" alt="image">
                    </div>

                    <div class="services-details-content">
                        <u><h3>{{ $t('conscious_sedation_title') }}</h3></u>
                        <p>{{ $t('conscious_sedation_p') }}</p>
                    </div>
                    

                    <div class="services-details-content">
                        <u><h3>{{ $t('conscious_sedation_cases_title') }}</h3></u>
                        <p >{{ $t('conscious_sedation_cases_p') }}</p>
                        <p >{{ $t('conscious_sedation_cases_p1') }}</p>
                        
                    </div>


                    <div class="services-details-content">
                        <u><h3>{{ $t('conscious_sedation_guide_title') }}</h3></u>
                        <h4>{{ $t('conscious_sedation_guide_p') }}</h4>
                        <ul>
                            
                            <li>
                                <b> {{ $t('conscious_sedation_guide_li_3') }}</b>
                                <p>{{ $t('conscious_sedation_guide_p_3') }}</p>
                            </li>
                        </ul>
                    </div>
                    <div class="services-details-content">
                        <h3>{{ $t('conscious_sedation_guide_after_title') }}</h3>
                        <ul>
                            <li>
                                {{ $t('conscious_sedation_guide_after_p1') }}
                            </li>
                            <li>
                                {{ $t('conscious_sedation_guide_after_p2') }}
                            </li>
                            <li>
                                {{ $t('conscious_sedation_guide_after_p3') }}
                            </li>
                            <li>
                                {{ $t('conscious_sedation_guide_after_p4') }}
                            </li>
                        </ul>
                        <p>{{ $t('conscious_sedation_guide_after_p') }}</p>
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
        name: 'ConsciousSedation',
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
