<template>
    <div class="middle-header-area">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-4 col-md-4">
                    <div class="middle-header">
                        <h1>
                            <router-link to="/">Smile Make Over</router-link>
                        </h1>
                    </div>
                </div>

                <div class="col-lg-8 col-md-8">
                    <ul class="middle-header-content">
                        <li>
                            <i class="flaticon-emergency-call"></i>
                            {{ $t('mid_nav_call') }}
                            <span><a href="tel:+302721098891">+30-2721098891</a></span>
                        </li>

                        <li>
                            <i class="flaticon-wall-clock"></i>
                            {{ $t('mid_nav_time_p') }}
                            <span>{{ $t('mid_nav_time') }}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MiddleHeader'
}
</script>