<template>
    <div>
        <PageBanner :pageTitle="$t('nav_prices')" />
        <Pricing />
    </div>
</template>

<script>
import PageBanner from '../Common/PageBanner'
import Pricing from '../prices/Pricing.vue'

export default {
    components: {
        PageBanner,
        Pricing,
    }
}
</script>
