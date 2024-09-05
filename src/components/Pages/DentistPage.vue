<template>
    <div>
        <PageBanner :pageTitle="$t('nav_team')" />
        <Doctor />
    </div>
</template>

<script>
import PageBanner from '../Common/PageBanner'
import Doctor from '../OurTeam/AllDoctors'

export default {
    components: {
        PageBanner,
        Doctor,
    }
}
</script>
