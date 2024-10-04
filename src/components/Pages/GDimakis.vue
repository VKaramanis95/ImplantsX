<template>
    <div>
        <PageBanner :pageTitle="$t('our_team_dimakis')" />
        <Dimakis />
    </div>
</template>

<script>
import PageBanner from '../Common/PageBanner'
import Dimakis from '../OurTeam/Dimakis.vue';

export default {
    components: {
        PageBanner,
        Dimakis,
    }
}
</script>
