<template>
    <Preloader v-if="isLoading" />
    
    <MiddleHeader />
    <TopOffersHeader   /> <!-- v-if="showTopOffersHeader" -->
    <Navbar />
    <router-view v-slot="{ Component }">
        <transition 
            enter-active-class="animated fadeIn" 
            leave-active-class="animated fadeOut" 
            mode="out-in" 
            :duration="600" 
            @after-leave="$root.$emit('triggerScroll')"
        >
            <component :is="Component" />
        </transition>
    </router-view>
    <Footer />
    <GoTop />
</template>

<script>
import Preloader from './components/Layouts/Preloader'
import TopHeader from './components/Layouts/TopHeader'
import TopOffersHeader from './components/Layouts/TopOffersHeader'
import MiddleHeader from './components/Layouts/MiddleHeader'
import Navbar from './components/Layouts/Navbar'
import Footer from './components/Layouts/Footer'
import GoTop from './components/Layouts/GoTop'

export default {
    name: "App",
    components: {
        Preloader,
        TopHeader,
        TopOffersHeader,
        MiddleHeader,
        Navbar,
        Footer,
        GoTop,
    },
    data() {
        return {
            isLoading: true,
            showTopOffersHeader: true // Add this property
        }
    },
    mounted() {
        // Set isLoading to false after delay
        setTimeout(() => {
            this.isLoading = false
        }, 2000)

        // Fetch the user's location and determine if they're in Greece
        fetch('https://ipapi.co/json/') // You can replace with any other IP geolocation API
            .then(response => response.json())
            .then(data => {
                // Set showTopOffersHeader to false if the user is in Greece
                if (data.country_code === 'GR') {
                    this.showTopOffersHeader = false
                }
            })
            .catch(error => {
                console.error('Error fetching location:', error)
            })
    }
};
</script>
