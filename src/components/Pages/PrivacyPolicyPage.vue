<template>
    <div>
        <PageBanner pageTitle="Privacy Policy" />
        <PrivacyPolicy />
    </div>
</template>

<script>
import PageBanner from '../Common/PageBanner'
import PrivacyPolicy from '../privacy-policy/PrivacyPolicy'

export default {
    components: {
        PageBanner,
        PrivacyPolicy,
    }
}
</script>
