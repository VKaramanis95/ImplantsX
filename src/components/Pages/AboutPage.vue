<template>
    <div>
        <PageBanner pageTitle="About Us" />
        <AboutOurClinic />
        
        <!--<FunFacts />-->
        <OurDentist class="pt-100" />
       
        <OurClients />
        <MapDisplay />
        
        
        
    </div>
</template>

<script>
import PageBanner from '../Common/PageBanner'
import AboutOurClinic from '../about-us/AboutOurClinic'
import MapDisplay from '../Common/MapDisplay'

import OurDentist from '../Common/OurDentist'

import OurClients from '../Common/OurClients'





export default {
    components: {
        PageBanner,
        AboutOurClinic,
        MapDisplay,
     
        OurDentist,
        
        OurClients,
       
       
        
        
    }
}
</script>
