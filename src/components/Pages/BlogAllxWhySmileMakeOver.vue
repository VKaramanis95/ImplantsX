<template>
    <div>
        <PageBanner :pageTitle="$t('blog_allx_why_smilemakeover_title')" />
        <AllxWhySmileMakeOver/>
    </div>
</template>

<script>

import AllxWhySmileMakeOver from '../blog-details/AllxWhySmileMakeOver.vue'
import PageBanner from '../Common/PageBanner'

export default {
    components: {
        PageBanner,
        AllxWhySmileMakeOver  ,
    }
}
</script>




