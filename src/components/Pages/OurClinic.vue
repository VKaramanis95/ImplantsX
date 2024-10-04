<template>
    <div>
        <PageBanner :pageTitle="$t('nav_clinic')" />
        <!--<ClinicBanner/>-->
        
        <OurEquipment />
        <RensponsiveGallery />
    </div>
</template>

<script>
import PageBanner from '../Common/PageBanner'
//import ClinicBanner from '../OurClinic/ClinicBanner.vue'
import OurEquipment from '../OurClinic/OurEquipment'
import  RensponsiveGallery from '../OurClinic/RensponsiveGallery.vue'

export default {
    components: {
        PageBanner,
        //ClinicBanner,
        OurEquipment,
        RensponsiveGallery
    }
}
</script>
