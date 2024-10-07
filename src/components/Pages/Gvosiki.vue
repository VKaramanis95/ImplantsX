<template>
    <div>
        <PageBanner :pageTitle="$t('our_team_vosiki')" />
        <Vosiki />
    </div>
</template>

<script>
import PageBanner from '../Common/PageBanner'
import Vosiki from '../OurTeam/Vosiki.vue';

export default {
    components: {
        PageBanner,
        Vosiki,
    }
}
</script>
