<template>
    <div>
        <PageBanner :pageTitle="$t('zircven_sidebar_title')" />

        <ZircVenColor />
    </div>
</template>

<script>

import ZircVenColor from '../blog-details/ZircVenColor.vue'
import PageBanner from '../Common/PageBanner'

export default {
    components: {
        PageBanner,
        ZircVenColor,
    }
}
</script>