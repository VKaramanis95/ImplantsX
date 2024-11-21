

<template>
    <div>
        <PageBanner :pageTitle="$t('zircven_sidebar_title3')" />

        <ZircVenFall />
    </div>
</template>

<script>

import ZircVenFall from '../blog-details/ZircVenFall.vue'
import PageBanner from '../Common/PageBanner'

export default {
    components: {
        PageBanner,
        ZircVenFall,
    }
}
</script>











