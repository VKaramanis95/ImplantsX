<template>
    <div>
        <PageBanner :pageTitle="$t('blog_implants_after_surgery_main_title')" />
        <ImplantsGuideAfterSurgery />
    </div>
</template>

<script>

import ImplantsGuideAfterSurgery from '../blog-details/ImplantsGuideAfterSurgery'
import PageBanner from '../Common/PageBanner'
export default {
    components: {
        PageBanner,
        ImplantsGuideAfterSurgery,
    }
}
</script>