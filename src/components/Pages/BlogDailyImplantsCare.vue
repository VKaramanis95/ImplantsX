<template>
    <div>
        <PageBanner :pageTitle="$t('blog_implants_dailycare_title')" />
        <DailyImplantsCare />
    </div>
</template>

<script>

import DailyImplantsCare from '../blog-details/DailyImplantsCare'
import PageBanner from '../Common/PageBanner'
export default {
    components: {
        PageBanner,
        DailyImplantsCare,
    }
}
</script>