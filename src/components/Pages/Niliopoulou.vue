<template>
    <div>
        <PageBanner :pageTitle="$t('our_team_iliopoulou')" />
        <Iliopoulou />
    </div>
</template>

<script>
import PageBanner from '../Common/PageBanner'
import Iliopoulou from '../OurTeam/Iliopoulou.vue';

export default {
    components: {
        PageBanner,
        Iliopoulou,
    }
}
</script>
