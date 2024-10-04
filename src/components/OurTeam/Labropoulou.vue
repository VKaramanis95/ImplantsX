<template>
    <div class="dentist-details-area ptb-100">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-5 col-md-6">
                    <div class="dentist-details-image">
                        <img src="../../assets/images/OurTeam/labropoulou/labropoulou_allteam.webp" alt="image">
                    </div>
                </div>

                <div class="col-lg-7 col-md-6">
                    <div class="dentist-details-content">
                        <h3>
                            <router-link to="/labropoulou">
                                {{ $t('our_team_labropoulou') }}
                            </router-link>
                        </h3>
                        <span>{{ $t('all_dentists_labropoulou_spec') }}</span>

                        <div class="share-link">
                            <a href="https://www.facebook.com/" alt="Facebook Icon" target="_blank"><i class='bx bxl-facebook'></i></a>
                            <a href="https://twitter.com/?lang=en" target="_blank" alt="Twitter Icon"><i class='bx bxl-twitter'></i></a>
                            <a href="https://www.linkedin.com/"  alt="Twitter Icon" target="_blank"><i class='bx bxl-linkedin'></i></a>
                            <a href="https://www.instagram.com/" alt="Twitter Icon" target="_blank"><i class='bx bxl-instagram'></i></a>
                        </div>

                        <div class="content-overview">
                            <div class="content-overview">
                            <p class="glide-in"><b>{{ $t('general_birthday_title') }}</b> {{ $t('labropoulou_birthday') }}</p>

                            <p class="glide-in"><b>{{ $t('general_specialized_title') }}</b> {{ $t('labropoulou_specialized') }}</p>

                            <p class="glide-in"><b>{{ $t('general_education_title') }}</b> {{ $t('labropoulou_education') }}</p>
                            
                            <p class="glide-in"><b>{{ $t('general_member_title') }}</b> {{ $t('labropoulou_member') }}</p>
                        
                        </div></div>
                    </div>
                </div>
                <div class="dentist-details-overview-content">
                    <p class="glide-in">{{ $t('labropoulou_summary') }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Labropoulou',
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
        this.handleScroll(); // Call handleScroll once on mount to initialize elements in viewport
    },
    methods: {
        handleScroll() {
            let elements = document.querySelectorAll('.glide-in');
            elements.forEach(element => {
                if (this.isElementInViewport(element)) {
                    element.classList.add('glide-in-visible');
                }
            });
        },
        isElementInViewport(el) {
            var rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
            );
        }
    },
    destroyed() {
        window.removeEventListener('scroll', this.handleScroll);
    }
}
</script>


