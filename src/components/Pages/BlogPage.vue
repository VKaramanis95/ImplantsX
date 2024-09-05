
<template>
    <div>
        <PageBanner :pageTitle="$t('nav_blog')"/>
        <Blog />
    </div>
</template>

<script>
import PageBanner from '../Common/PageBanner'
import Blog from '../Blog/Blog'

export default {
    components: {
        PageBanner,
        Blog,
    }
}
</script>