<template>
    <div>
        <PageBanner :pageTitle="$t('nav_clinic')" />
        <!--<ClinicBanner/>-->
        <OurClinic />
        <OurEquipment />
        <RensponsiveGallery />
    </div>
</template>

<script>
import PageBanner from '../Common/PageBanner'
//import ClinicBanner from '../OurClinic/ClinicBanner.vue'
import OurClinic from '../OurClinic/OurClinic'
import OurEquipment from '../OurClinic/OurEquipment'
import  RensponsiveGallery from '../OurClinic/RensponsiveGallery.vue'

export default {
    components: {
        PageBanner,
        //ClinicBanner,
        OurClinic,
        OurEquipment,
        RensponsiveGallery
    }
}
</script>
