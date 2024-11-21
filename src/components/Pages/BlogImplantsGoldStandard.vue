<template>
    <div>
        <PageBanner :pageTitle="$t('sidebar_implants_r2_title')" />

        <ImplantsGoldStandard/>
    </div>
</template>

<script>

import ImplantsGoldStandard from '../blog-details/ImplantsGoldStandard.vue'
import PageBanner from '../Common/PageBanner'

export default {
    components: {
        PageBanner,
        ImplantsGoldStandard  ,
    }
}
</script>

