<template>
    <div>
        <PageBanner :pageTitle="$t('our_team_tsetsenekou')" />
        <Tsetsenekou />
    </div>
</template>

<script>
import PageBanner from '../Common/PageBanner'
import Tsetsenekou from '../OurTeam/Tsetsenekou'

export default {
    components: {
        PageBanner,
        Tsetsenekou,
    }
}
</script>
