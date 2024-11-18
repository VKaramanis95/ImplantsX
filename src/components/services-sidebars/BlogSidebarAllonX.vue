<template>
    <div class="widget-area"> 
        <div class="widget widget_grin_posts_thumb">
            <h3 class="widget-title">{{ $t('sidebar_recent_posts') }}</h3>

            <div class="item">
                <router-link to="/all6-or-all4" class="thumb">
                    <span class="fullimage cover bg3" role="img"></span>
                </router-link>
                <div class="info">
                    <h4 class="title usmall">
                        <router-link to="/all6-or-all4">{{ $t('sidebar_allx_r1_title') }}</router-link>
                    </h4>
                </div>
            </div>

            <div class="item">
                <router-link to="/implants-denture-care" class="thumb">
                    <span class="fullimage cover bg3" role="img"></span>
                </router-link>
                <div class="info">
                     
                    <h4 class="title usmall">
                        <router-link to="/implants-denture-care">{{ $t('sidebar_allx_r2_title') }}</router-link>
                    </h4>
                </div>
            </div>
            <div class="item">
                <router-link to="/why-smile-make-over" class="thumb">
                    <span class="fullimage cover bg2" role="img"></span>
                </router-link>
                <div class="info">
                     
                    <h4 class="title usmall">
                        <router-link to="/why-smile-make-over">
                            {{ $t('sidebar_allx_r3_title') }}
                        </router-link>
                    </h4>
                </div>
            </div>
        </div>
        <div class="widget widget_grin_posts_thumb">
            <h3 class="widget-title">{{ $t('sidebar_popular_posts') }}</h3>

            <div class="item">
                <router-link to="/cbct-tomography" class="thumb">
                    <span class="fullimage cover bg1" role="img"></span>
                </router-link>
                <div class="info">
                     
                    <h4 class="title usmall">
                        <router-link to="/cbct-tomography">
                            {{ $t('sidebar_allx_p1_title') }}
                        </router-link>
                    </h4>
                </div>
            </div>

            <div class="item">
                <router-link to="/additional-adhesives" class="thumb">
                    <span class="fullimage cover bg1" role="img"></span>
                </router-link>
                <div class="info">
                     
                    <h4 class="title usmall">
                        <router-link to="/additional-adhesives">
                            {{ $t('sidebar_allx_p2_title') }}
                        </router-link>
                    </h4>
                </div>
            </div>

            

            <div class="item">
                <router-link to="/after-surgery" class="thumb">
                    <span class="fullimage cover bg2" role="img"></span>
                </router-link>
                <div class="info">
                     
                    <h4 class="title usmall">
                        <router-link to="/after-surgery">
                            {{ $t('sidebar_allx_p3_title') }}
                        </router-link>
                    </h4>
                </div>
            </div>
            <div class="item">
                <router-link to="/daily-care" class="thumb">
                    <span class="fullimage cover bg2" role="img"></span>
                </router-link>
                <div class="info">
                     
                    <h4 class="title usmall">
                      
                        <router-link to="/daily-care">{{ $t('sidebar_allx_p4_title') }}</router-link>

                    </h4>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
export default {
    name: 'BlogSidebarAllonX'
}
</script>