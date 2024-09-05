<template>
    <div>
        <PageBanner pageTitle="FAQ" />
        <Faq />
    </div>
</template>

<script>
import PageBanner from '../Common/PageBanner'
import Faq from '../Faq/Faq'

export default {
    components: {
        PageBanner,
        Faq,
    }
}
</script>
