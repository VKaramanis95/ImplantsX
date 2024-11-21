<template>
    <div>
        <PageBanner :pageTitle="$t('zircven_sidebar_title2')" />
        <ZircVenConsumption />
    </div>
</template>

<script>

import ZircVenConsumption from '../blog-details/ZircVenConsumption.vue'
import PageBanner from '../Common/PageBanner'
export default {
    components: {
        PageBanner,
        ZircVenConsumption,
    }
}
</script>