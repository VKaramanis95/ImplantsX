<template>
    <div :class="['navbar-area', {'is-sticky': isSticky}]">
        <div class="main-navbar">
            <div class="container">
                <nav class="navbar navbar-expand-md navbar-light">
                    <div class="logo">
                        <router-link to="/">
                            <h2>Smile Make Over</h2>
                            <!-- <img src="../../assets/images/logo.png" alt="logo"> -->
                        </router-link>
                    </div>

                    <div 
                        class="navbar-toggler"
                        @click="active = !active" :aria-pressed="active ? 'true' : 'false'"
                        v-bind:class="{ 'active': button_active_state }"
                        v-on:click="button_active_state = !button_active_state"
                    >
                        <span class="icon-bar top-bar"></span>
                        <span class="icon-bar middle-bar"></span>
                        <span class="icon-bar bottom-bar"></span>
                    </div>

                    <div class="collapse navbar-collapse" :class="{ show: active }" is-nav>
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <router-link to="/" class="nav-link">
                                    {{ $t('nav_home_main') }}
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/our-clinic" class="nav-link" exact>
                                    {{ $t('nav_clinic') }}
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/our-team" class="nav-link">
                                    {{ $t('nav_team') }}
                                </router-link>
                            </li>

                            <!-- Services dropdown -->
                            <li class="nav-item" :class="{ 'dropdown-open': isDropdownOpen('services') }">
                                <router-link to="/services" class="nav-link">
                                    {{ $t('nav_services') }}
                                    <i class='bx bx-caret-down'></i>
                                </router-link>

                                <ul class="dropdown-menu">
                                    <!-- Implants category -->
                                    <li class="nav-item">
                                        <div>
                                            <a href="#" class="nav-link" @click.prevent="toggleDropdown('implants')">
                                                {{ $t('nav_services_implants') }}
                                                <i class='bx bx-caret-right'></i>
                                            </a>

                                            <ul class="dropdown-menu" v-show="isDropdownOpen('implants')">
                                                <li class="nav-item">
                                                    <router-link to="/all-on-6-details" class="nav-link">
                                                        {{ $t('nav_allx') }}
                                                    </router-link>
                                                </li>

                                               
                                                <li class="nav-item">
                                                    <router-link to="/implants" class="nav-link">
                                                        {{ $t('nav_services_implants') }}
                                                    </router-link>
                                                </li>
                                                <li class="nav-item">
                                                    <router-link to="/full-mouth-rehabilitation" class="nav-link">
                                                        {{ $t('nav_rehab') }}
                                                    </router-link>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>

                                    <!-- Cosmetic Dentistry category -->
                                    <li class="nav-item">
                                        <div>
                                            <!-- Parent Dropdown for Cosmetic Dentistry -->
                                            <a href="#" class="nav-link" @click.prevent="toggleDropdown('cosmetic')">
                                                {{ $t('nav_cosmetic_dentistry') }}
                                                <i class='bx bx-caret-right'></i>
                                            </a>

                                            <ul class="dropdown-menu" v-show="isDropdownOpen('cosmetic')">
                                                <li class="nav-item">
                                                    <!-- Dropdown Trigger for Dental Veneers -->
                                                    <a href="#" class="nav-link" @click.prevent="toggleDropdown('veneers')">
                                                        {{ $t('nav_veneers') }}
                                                        <i class='bx bx-caret-right'></i>
                                                    </a>
                                                    <ul class="dropdown-menu" v-show="isDropdownOpen('veneers')">
                                                        <li class="nav-item">
                                                            <router-link to="/porcelain-veneers" class="nav-link">
                                                                {{ $t('nav_veneers_porcelain') }}
                                                            </router-link>
                                                        </li>
                                                        <li class="nav-item">
                                                            <router-link to="/resin-veneers" class="nav-link">
                                                                {{ $t('nav_veneers_resin') }}
                                                            </router-link>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li class="nav-item">
                                                    <router-link to="/whitening" class="nav-link">
                                                        {{ $t('nav_whitening') }}
                                                    </router-link>
                                                </li>
                                                <li class="nav-item">
                                                    <router-link to="/hollywood-smile" class="nav-link">
                                                        {{ $t('nav_hsmile') }}
                                                    </router-link>
                                                </li>
                                                <li class="nav-item">
                                                    <router-link to="/invisible-orthodontics" class="nav-link">
                                                        {{ $t('nav_orthodontics') }}
                                                    </router-link>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>



                                    <!-- Prosthetic Dentistry category -->
                                    <li class="nav-item">
                                        <div>
                                            <a href="#" class="nav-link" @click.prevent="toggleDropdown('prosthetic')">
                                                {{ $t('nav_prosthetic_dentistry') }}
                                                <i class='bx bx-caret-right'></i>
                                            </a>

                                            <ul class="dropdown-menu" v-show="isDropdownOpen('prosthetic')">
                                                <li class="nav-item">
                                                    <a href="#" class="nav-link" @click.prevent="toggleDropdown('prosthetics_fixed')">
                                                        {{ $t('nav_prosthetics_fixed') }}
                                                        <i class='bx bx-caret-right'></i>
                                                    </a>
                                                    <!-- Dropdown menu for Dental Veneers -->
                                                    <ul class="dropdown-menu" v-show="isDropdownOpen('prosthetics_fixed')">
                                                        <li class="nav-item">
                                                            <router-link to="/zirconia-crowns" class="nav-link">
                                                                {{ $t('nav_zcrowns') }}
                                                            </router-link>
                                                        </li>
                                                        <li class="nav-item">
                                                            <router-link to="/zirconia-bridges" class="nav-link">
                                                                {{ $t('nav_zbridges') }}
                                                            </router-link>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li class="nav-item">
                                                    <a href="#" class="nav-link"  @click.prevent="toggleDropdown('prosthetics_mobile')">
                                                        {{ $t('nav_prosthetics_mobile') }}
                                                        <i class='bx bx-caret-right'></i>
                                                    </a>
                                                    <!-- Dropdown menu for Dental Veneers -->
                                                    <ul class="dropdown-menu" v-show="isDropdownOpen('prosthetics_mobile')">
                                                        <li class="nav-item">
                                                            <router-link to="/denture" class="nav-link">
                                                                {{ $t('nav_denture') }}
                                                            </router-link>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li class="nav-item">
                                                    <a href="#" class="nav-link" @click.prevent="toggleDropdown('prosthetics_min_rehab')">
                                                        {{ $t('nav_prosthetics_min_rehab') }}
                                                        <i class='bx bx-caret-right'></i>
                                                    </a>
                                                    <!-- Dropdown menu for Dental Veneers -->
                                                    <ul class="dropdown-menu" v-show="isDropdownOpen('prosthetics_min_rehab')">
                                                        <li class="nav-item">
                                                            <router-link to="/inlays-onlays" class="nav-link">
                                                                {{ $t('nav_prosthetics_lays') }}
                                                            </router-link>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>

                                    <!-- Facial category -->
                                    <li class="nav-item">
                                        <div>
                                            <a href="#" class="nav-link" @click.prevent="toggleDropdown('facial')">
                                                {{ $t('nav_facial') }}
                                                <i class='bx bx-caret-right'></i>
                                            </a>

                                            <ul class="dropdown-menu" v-show="isDropdownOpen('facial')">
                                                <li class="nav-item">
                                                    <router-link to="/face-improvement" class="nav-link">
                                                        {{ $t('nav_facial_botox_face_improvement') }}
                                                    </router-link>
                                                </li>
                                                <li class="nav-item">
                                                    <router-link to="/botox-etc" class="nav-link">
                                                        {{ $t('nav_facial_botox_etc') }}
                                                    </router-link>
                                                </li>
                                                <li class="nav-item">
                                                    <router-link to="/prp-therapy" class="nav-link">
                                                        {{ $t('nav_facial_prp') }}
                                                    </router-link>
                                                </li>
                                                <li class="nav-item">
                                                    <router-link to="/alternative-therapies" class="nav-link">
                                                        {{ $t('nav_facial_altetnative') }}
                                                    </router-link>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>

                                    <!-- Add Periodontology category -->
                                    <li class="nav-item">
                                        <router-link to="/periodology" class="nav-link">
                                            {{ $t('nav_periodontology') }}
                                        </router-link>
                                    </li>

                                    <!-- Add Oral Facial category -->
                                    <li class="nav-item">
                                        <router-link to="/orofacial-pain" class="nav-link">
                                            {{ $t('nav_orofacial') }}
                                        </router-link>
                                    </li>

                                    <li class="nav-item">
                                        <router-link to="/invisible-orthodontics" class="nav-link">
                                            {{ $t('nav_orthodontics') }}
                                        </router-link>
                                    </li>
                                </ul>
                            </li>

                            <li class="nav-item">
                                <router-link to="/gallery" class="nav-link">
                                    {{ $t('nav_before_after') }}
                                </router-link>
                            </li>

                            <li class="nav-item">
                                <router-link to="/dental-tourism" class="nav-link">
                                    {{ $t('nav_dental_tourism') }}
                                </router-link>
                            </li>

                            <li class="nav-item">
                                <router-link to="/contact-us" class="nav-link">
                                    {{ $t('nav_contact') }}
                                </router-link>
                            </li>

                            <li class="nav-item">
                                <router-link to="/blog" class="nav-link">
                                    {{ $t('nav_blog') }}
                                </router-link>
                            </li>

                            <div class="language-container">
                                <div class="nav-link">
                                    <div class="language_picker mt-2">
                                        <img class="mr-2" src="../../assets/nav-flags/united-kingdom.png" width='24' height='16' @click="changeLanguage('en')"/>
                                    </div>
                                </div>

                                <div class="nav-link">
                                    <div class="language_picker mt-2">
                                        <img class="mr-2" src="../../assets/nav-flags/france.png" width='24' height='16' @click="changeLanguage('fr')"/>
                                    </div>
                                </div>

                                <div class="nav-link">
                                    <div class="language_picker mt-2">
                                        <img class="mr-2" src="../../assets/nav-flags/germany.png" width='24' height='16' @click="changeLanguage('de')"/>
                                    </div>
                                </div>

                                <div class="nav-link">
                                    <div class="language_picker mt-2">
                                        <img class="mr-2" src="../../assets/nav-flags/greece.png" width='24' height='16' @click="changeLanguage('gr')"/>
                                    </div>
                                </div>
                            </div>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
import router from '../../router'; // Import your Vue Router instance
import Preloader from '../../components/Layouts/Preloader.vue'; // Import Preloader component

export default {
    name: 'NavBarSmallScreen',
    components: {
        Preloader // Register Preloader component
    },
    data() {
        return {
            isSticky: false,
            active: false,
            openDropdown: null,
            button_active_state: false,
            showPreloader: false ,

            dropdowns: {
                cosmetic: false,
                veneers: false
        }
        };
    },
    mounted() {
        const selectedLanguage = localStorage.getItem('selectedLanguage');
        if (selectedLanguage) {
            // Set the selected language from local storage in Vue I18n
            this.$i18n.locale = selectedLanguage;
        }
        const that = this;
        window.addEventListener('scroll', () => {
            let scrollPos = window.scrollY;
            if (scrollPos >= 100) {
                that.isSticky = true;
            } else {
                that.isSticky = false;
            }
        });

        // Listen for route changes and close the navigation bar in small screens
        router.beforeEach((to, from, next) => {
            if (this.active) {
                this.active = false;
            }
            next();
        });
    },
    methods: {
        changeLanguage(lang) {
            // Display the preloader
            this.showPreloader = true;
            window.location.reload();

            // Change language immediately
            this.$i18n.locale = lang;
            localStorage.setItem('selectedLanguage', lang);

            // Hide the preloader after a short delay (for demonstration)
            setTimeout(() => {
                this.showPreloader = false;
                // Reload the page after hiding the preloader
            }, 2500); // Adjust the delay time as needed
        },
        
        

        toggleDropdown(name) {
            this.dropdowns[name] = !this.dropdowns[name];
        },
        isDropdownOpen(name) {
            return this.dropdowns[name];
        }
    }
};
</script>

<style scoped>
/* Add your CSS styles here */
</style>
