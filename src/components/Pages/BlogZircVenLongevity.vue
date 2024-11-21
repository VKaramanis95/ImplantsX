

<template>
    <div>
        <PageBanner :pageTitle="$t('zircven_sidebar_title4')" />

        <ZircVenLongevity />
    </div>
</template>

<script>

import ZircVenLongevity from '../blog-details/ZircVenLongevity.vue'
import PageBanner from '../Common/PageBanner'

export default {
    components: {
        PageBanner,
        ZircVenLongevity,
    }
}
</script> 















