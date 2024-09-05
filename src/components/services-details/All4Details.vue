<template>
    <div class="services-details-area ptb-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-12">
                    <div class="services-details-image">
                        <img src="../../assets/images/services/all4/all4.webp" alt="image">
                    </div>

                    <div class="services-details-content">
                        <u><h3>All on 4 Implants</h3></u>
                        <p>{{ $t('all4_page_p') }}</p>
                    </div>
                    <div class="services-details-content">
                        <u><h3>{{ $t('all4_page_indication_title') }}</h3></u>
                        <div class="row">
                            <div class="col-lg-6 col-md-6">
                                <ul class="services-details-list">
                                    <li>
                                    <i class="flaticon-check"></i>
                                    
                                    {{ $t('all4_page_indication_1') }}
                                </li>
    
                                <li>
                                    <i class="flaticon-check"></i>
                                    {{ $t('all4_page_indication_2') }}
                                </li>
                                <li>
                                    <i class="flaticon-check"></i>
                                    {{ $t('all4_page_indication_3') }}
                                </li>
                                </ul>
                            </div>

                            <div class="col-lg-6 col-md-6">
                                <ul class="services-details-list">
                                    <li>
                                    <i class="flaticon-check"></i>
                                    {{ $t('all4_page_indication_4') }}
                                </li>
    
                                
                                <li>
                                    <i class="flaticon-check"></i>
                                    {{ $t('all4_page_indication_5') }}
                                </li>
    
                                <li>
                                    <i class="flaticon-check"></i>
                                    {{ $t('all4_page_indication_6') }}
                                </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="services-details-content">
                        <u><h3>{{ $t('all4_page_advantages_title') }}</h3></u>
                        <p >{{ $t('all4_page_advantages_p') }}</p>
                        
                    </div>

                    <div class="services-details-content">
                        <u><h3>{{ $t('all4_page_stages_title') }}</h3></u>
                        <ol>
                                <li>
                                    <b>{{ $t('all4_page_stages_preperatory_bold') }}</b> {{ $t('all4_page_stages_preperatory') }}
                                </li>
                                <li>
                                    <b>{{ $t('all4_page_stages_3dmodel_bold') }}</b> {{ $t('all4_page_stages_3dmodel') }}
                                </li>

                                <li>
                                    <b>{{ $t('all4_page_stages_implatation_surgery_bold') }}</b> {{ $t('all4_page_stages_implatation_surgery') }}
                                </li>
                                <li>
                                    <b>{{ $t('all4_page_stages_impression_bold') }}</b> {{ $t('all4_page_stages_impression') }}
                                </li>

                                <li>
                                    <b>{{ $t('all4_page_stages_impression_bold') }}</b> {{ $t('all4_page_stages_impression') }}
                                </li>
                                <li>
                                    <b>{{ $t('all4_page_stages_implatation_bold') }}</b> {{ $t('all4_page_stages_implatation') }}
                                </li>

                                <li>
                                    <b>{{ $t('all4_page_stages_osseointegration_bold') }}</b> {{ $t('all4_page_stages_osseointegration') }}
                                </li>
                                <li>
                                    {{ $t('all4_page_stages_install') }}
                                </li>
                            </ol> 
                    </div>

                   

                    

                    <div class="services-details-overview">
                        <div class="row">
                            <div class="col-lg-6 col-md-6">
                                <div class="single-gallery">
                                    <img src="../../assets/images/services/all4/all4r.webp" alt="image">
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
                        <u><h3>{{ $t('all4_page_longevity_title') }}</h3></u>
                        <ul>
                            <p>{{ $t('all4_page_longevity_p1') }}</p>
                            <p>{{ $t('all4_page_longevity_p2') }}</p>
                            
                        </ul>
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
        name: 'All4Details',
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
            const servicesDetailsAreaBottom = servicesDetailsArea.getBoundingClientRect().bottom + window.scrollY - sidebar.offsetHeight - 290; // Adjust 100 to stop earlier

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
