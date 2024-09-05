<template>
    <div>
        <PageBanner :pageTitle="$t('nav_services')" />
        <DentalServices />
    </div>
</template>

<script>
import PageBanner from '../Common/PageBanner'
import DentalServices from '../Services/DentalServices'

export default {
    components: {
        PageBanner,
        DentalServices,
    }
}
</script>
