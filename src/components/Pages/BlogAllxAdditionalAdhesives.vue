<template>
    <div>
        <PageBanner :pageTitle="$t('blog_allx_adhensives_title')" />

        <AllxAdditionalAdhesives/>
    </div>
</template>

<script>

import AllxAdditionalAdhesives from '../blog-details/AllxAdditionalAdhesives.vue'
import PageBanner from '../Common/PageBanner'

export default {
    components: {
        PageBanner,
        AllxAdditionalAdhesives  ,
    }
}
</script>


