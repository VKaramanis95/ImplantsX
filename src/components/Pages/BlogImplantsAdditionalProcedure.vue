<template>
    <div>
        <PageBanner :pageTitle="$t('sidebar_implants_p2_title')" />

        <ImplantsAdditionalProcedure/>
    </div>
</template>

<script>

import ImplantsAdditionalProcedure from '../blog-details/ImplantsAdditionalProcedure.vue'
import PageBanner from '../Common/PageBanner'

export default {
    components: {
        PageBanner,
        ImplantsAdditionalProcedure ,
    }
}
</script>

