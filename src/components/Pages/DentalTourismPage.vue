<template>
    <div>
        <PageBanner  :pageTitle="$t('nav_dental_tourism')" />
        <DentalTourismPage />
        
        
        
    </div>
</template>

<script>
import PageBanner from '../Common/PageBanner'
import DentalTourismPage from '../dental-tourism/DentalTourismPage.vue';





export default {
    components: {
        PageBanner,
        DentalTourismPage
        
        
        
    }
}
</script>
