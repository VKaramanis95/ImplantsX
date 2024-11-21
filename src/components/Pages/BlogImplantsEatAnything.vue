<template>
    <div>
        <PageBanner :pageTitle="$t('implant_sidebar_title_eat_anything')" />

        <ImplantsEatAnything/>
    </div>
</template>

<script>

import ImplantsEatAnything from '../blog-details/ImplantsEatAnything.vue'
import PageBanner from '../Common/PageBanner'

export default {
    components: {
        PageBanner,
        ImplantsEatAnything ,
    }
}
</script>