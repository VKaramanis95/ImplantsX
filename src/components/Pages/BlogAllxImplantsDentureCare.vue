<template>
    <div>
        <PageBanner :pageTitle="$t('blog_allx_denture_care_title')" />
 
        <AllxImplantDentureCare />
    </div>
</template>

<script>

import AllxImplantDentureCare from '../blog-details/AllxImplantDentureCare.vue'
import PageBanner from '../Common/PageBanner'

export default {
    components: {
        PageBanner,
        AllxImplantDentureCare  ,
    }
}
</script>

