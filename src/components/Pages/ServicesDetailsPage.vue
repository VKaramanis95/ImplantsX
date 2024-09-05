<template>
    <div>
        <PageBanner :pageTitle="$t('nav_services')" />
        <ServicesDetails />
    </div>
</template>

<script>
import PageBanner from '../Common/PageBanner'
import ServicesDetails from '../services-details/ServicesDetails'

export default {
    components: {
        PageBanner,
        ServicesDetails,
    }
}
</script>
