<template>
    <div class="page-banner-area">
        <div class="container">
            <div class="page-banner-content">
                <h2>{{pageTitle}}</h2>
                
                <ul class="pages-list">
                    <li>
                        <router-link to="/" exact>
                            {{ $t('nav_home_main') }}
                        </router-link>
                    </li>
                    <li>{{pageTitle}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PageBanner',
    props: ['pageTitle']
}
</script>