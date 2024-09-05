<template>
    <div>
        <MainBanner />
        <AboutUsHomePage/>
        <OurDentist class="pt-100" />
        <OurServicesMainPage />
        
        
        <OurClients />
        
        <Blog />
        <PartnerCarousel />
        
       
    </div>
</template>

<script>
    import MainBanner from '../home-page/MainBanner'
    import AboutUsHomePage from'../home-page/AboutUsHomePage.vue'
    import OurDentist from '../Common/OurDentist'
    import OurClients from '../Common/OurClients'
    import Blog from '../Common/Blog'
    import OurServicesMainPage from '../ServicesMainPage/OurServicesMainPage.vue'
    import PartnerCarousel from '../Common/PartnerCarousel.vue'

    export default {
    name: 'HomePage',
    components: {
        MainBanner,
        AboutUsHomePage,
        OurServicesMainPage,
        OurDentist,
        PartnerCarousel,
        OurClients,
        Blog,
       
    }
}
</script>