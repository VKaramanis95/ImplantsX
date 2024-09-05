<template>
    <div>
        <PageBanner :pageTitle="$t('our_team_labropoulou')" />
        <Labropoulou/>
    </div>
</template>

<script>
import PageBanner from '../Common/PageBanner'
import Labropoulou from '../OurTeam/Labropoulou'

export default {
    components: {
        PageBanner,
        Labropoulou,
    }
}
</script>
