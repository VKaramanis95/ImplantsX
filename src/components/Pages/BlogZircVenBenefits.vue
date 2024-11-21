<template>
    <div>
        <PageBanner :pageTitle="$t('zircven_sidebar_title1')" />

        <ZircVenBenefits />
    </div>
</template>

<script>
import PageBanner from '../Common/PageBanner'
import ZircVenBenefits from '../blog-details/ZircVenBenefits.vue'

export default {
    components: {
        PageBanner,
        ZircVenBenefits,
    }
}
</script>