<template>
    <div>
        <PageBanner :pageTitle="$t('blog_allx_all4orall6_title')" />

        <AllxAll6OrAll4 />
    </div>
</template>

<script>

import AllxAll6OrAll4 from '../blog-details/AllxAll6OrAll4.vue'
import PageBanner from '../Common/PageBanner'
export default {
    components: {
        PageBanner,
        AllxAll6OrAll4,
    }
}
</script>

