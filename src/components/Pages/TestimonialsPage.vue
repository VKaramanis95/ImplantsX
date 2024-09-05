<template>
    <div>
        <PageBanner :pageTitle="$t('nav_testimonials')" />
        <Testimonials />
    </div>
</template>

<script>
import PageBanner from '../Common/PageBanner'
import Testimonials from '../Testimonials/Testimonials'

export default {
    components: {
        PageBanner,
        Testimonials,
    }
}
</script>
