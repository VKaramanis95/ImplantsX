<template>
    <div>
        <PageBanner :pageTitle="$t('nav_before_after')" />
        <Gallery />
    </div>
</template>

<script>
import PageBanner from '../Common/PageBanner'
import Gallery from '../Gallery/Gallery'

export default {
    components: {
        PageBanner,
        Gallery,
    }
}
</script>
