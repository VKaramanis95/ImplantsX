<template>
    <div class="dentist-details-area ptb-100">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-5 col-md-6">
                    <div class="dentist-details-image">
                        <img src="../../assets/images/OurTeam/tsetsenekou/tsetsenekou_allteam.webp" alt="image">
                    </div>
                </div>

                <div class="col-lg-7 col-md-6">
                    <div class="dentist-details-content">
                        <h3>
                            <router-link to="/tsetsenekou">
                                {{ $t('our_team_tsetsenekou') }}
                            </router-link>
                        </h3>
                        

                        <div class="share-link">
                            <a href="https://www.facebook.com/" target="_blank"><i class='bx bxl-facebook'></i></a>
                            <a href="https://twitter.com/?lang=en" target="_blank"><i class='bx bxl-twitter'></i></a>
                            <a href="https://www.linkedin.com/in/efstathia-tsetsenekou/" target="_blank"><i class='bx bxl-linkedin'></i></a>
                            <a href="https://www.instagram.com/" target="_blank"><i class='bx bxl-instagram'></i></a>
                        </div>

                        <div class="content-overview">
                            <p class="glide-in"><b>{{ $t('general_birthday_title') }}</b> {{ $t('tsetstenekou_birthday') }}</p>

                            <p class="glide-in"><b>{{ $t('general_specialized_title') }}</b> {{ $t('tsetstenekou_specialized') }}</p>

                            <p class="glide-in"><b>{{ $t('general_education_title') }}</b> {{ $t('tsetstenekou_education') }}</p>
                            
                            <p class="glide-in"><b>{{ $t('general_member_title') }}</b> {{ $t('tsetstenekou_member') }}</p>
                        
                        </div>
                    </div>
                </div>
                <div class="dentist-details-overview-content">
                    <p class="glide-in">{{ $t('tsetsenekou_summary') }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Tsetsenekou',
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


