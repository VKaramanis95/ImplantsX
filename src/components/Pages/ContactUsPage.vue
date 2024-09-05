<template>
    <div>
        <PageBanner :pageTitle="$t('nav_contact')" />
        
        <ContactUs />
        <MapDisplay/>
    </div>
</template>

<script>
import Faq from '../Faq/Faq.vue'
import PageBanner from '../Common/PageBanner'
import ContactUs from '../contact-us/ContactUs'
import MapDisplay from '../Common/MapDisplay'

export default {
    components: {
        PageBanner,
       
        ContactUs,
        MapDisplay,
    }
}
</script>
