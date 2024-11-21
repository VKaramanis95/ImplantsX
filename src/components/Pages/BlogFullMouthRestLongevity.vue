<template>
    <div>
        <PageBanner :pageTitle="$t('sidebar_fullmouth_r2_title')" />

        <FullMouthRestLongevity />
    </div>
</template>

<script>

import FullMouthRestLongevity from '../blog-details/FullMouthRestLongevity.vue'
import PageBanner from '../Common/PageBanner'

export default {
    components: {
        PageBanner,
        FullMouthRestLongevity,
    }
}
</script>