<template>
    <Preloader v-if="isLoading" />
    <TopHeader />
    <MiddleHeader />
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
import MiddleHeader from './components/Layouts/MiddleHeader'
import Navbar from './components/Layouts/Navbar'
import Footer from './components/Layouts/Footer'
import GoTop from './components/Layouts/GoTop'

export default {
    name: "App",
    components: {
        Preloader,
        TopHeader,
        MiddleHeader,
        Navbar,
        Footer,
        GoTop,
    },
    data() {
        return {
            isLoading: true
        }
    },
    mounted() {
        setTimeout(() => {
            this.isLoading = false
        }, 2000)
    }
};
</script>
