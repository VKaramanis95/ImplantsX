<template>
    <div>
        <PageBanner :pageTitle="$t('sidebar_implants_r1_title')" />

        <ImplantsLoseTeeth/>
    </div>
</template>

<script>

import ImplantsLoseTeeth from '../blog-details/ImplantsLoseTeeth.vue'
import PageBanner from '../Common/PageBanner'

export default {
    components: {
        PageBanner,
        ImplantsLoseTeeth  ,
    }
}
</script>








