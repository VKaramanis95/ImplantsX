<template>
    <div class="services-details-area ptb-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-12">
                    <div class="services-details-image">
                        <img src="../../assets/images/services-details.jpg" alt="image">
                    </div>

                    <div class="services-details-content">
                        <h3>Dental Filling</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>

                    <div class="row">
                        <div class="col-lg-6 col-md-6">
                            <ul class="services-details-list">
                                <li>
                                    <i class="flaticon-check"></i>
                                    Aenean Posuere Sem Imperdiet
                                </li>
    
                                <li>
                                    <i class="flaticon-check"></i>
                                    Aenean Posuere Sem Imperdiet
                                </li>
    
                                <li>
                                    <i class="flaticon-check"></i>
                                    Aenean Posuere Sem Imperdiet
                                </li>
                            </ul>
                        </div>

                        <div class="col-lg-6 col-md-6">
                            <ul class="services-details-list">
                                <li>
                                    <i class="flaticon-check"></i>
                                    Aenean Posuere Sem Imperdiet
                                </li>
    
                                <li>
                                    <i class="flaticon-check"></i>
                                    Aenean Posuere Sem Imperdiet
                                </li>
    
                                <li>
                                    <i class="flaticon-check"></i>
                                    Aenean Posuere Sem Imperdiet
                                </li>
                            </ul>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                    <div class="services-details-overview">
                        <div class="row">
                            <div class="col-lg-6 col-md-6">
                                <div class="single-gallery">
                                    <img src="../../assets/images/gallery/gallery-1.jpg" alt="image">
        
                                    <div class="content">
                                        <h3>
                                            <router-link to="/services-details">
                                                Aesthetic Dentistry
                                            </router-link>
                                        </h3>
                                        <span>Prosthodontics Dentist</span>
        
                                        <div class="icon">
                                            <router-link to="/services-details">
                                                <i class="flaticon-right-arrow"></i>
                                            </router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
        
                            <div class="col-lg-6 col-md-6">
                                <div class="single-gallery">
                                    <img src="../../assets/images/gallery/gallery-2.jpg" alt="image">
        
                                    <div class="content">
                                        <h3>
                                            <router-link to="/services-details">
                                                Periodontists  Dentistry
                                            </router-link>
                                        </h3>
                                        <span>Prosthodontics Dentist</span>
        
                                        <div class="icon">
                                            <router-link to="/services-details">
                                                <i class="flaticon-right-arrow"></i>
                                            </router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                    <div class="services-details-overview-content">
                        <p><span>How To Take Care During Dental:</span> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of psum is that it has a more or-less normal distribution of letters, as opposed to using.</p>

                        <p><span>When To Visit your Doctor?</span> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of psum is that it has a more or-less normal distribution of letters, as opposed to using.</p>

                        <p><span>Dental Options:</span> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of psum is that it has a more or-less normal distribution of letters, as opposed to using.</p>
                    </div>
                </div>

                <div class="col-lg-4 col-md-12">
                    <ServicesSidebar />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ServicesSidebar from './ServicesSidebar'

export default {
    name: 'ServicesDetails',
    components: {
        ServicesSidebar
    }
}
</script>