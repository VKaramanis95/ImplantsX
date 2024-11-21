<template>
    <div class="widget-area"> 
        <div class="widget widget_grin_posts_thumb">
            <h3 class="widget-title">{{ $t('sidebar_recent_posts') }}</h3>

            

            <div class="item">
                <router-link to="/implants-denture-care" class="thumb">
                    <span class="fullimage cover bg4" role="img"></span>
                </router-link>
                <div class="info">
                     
                    <h4 class="title usmall">
                        <router-link to="/implants-denture-care">{{ $t('sidebar_fullmouth_r1_title') }}</router-link>
                    </h4>
                </div>
            </div>
            <div class="item">
                <router-link to="/blog_full_mouth_rest_long_title" class="thumb">
                    <span class="fullimage cover bg2" role="img"></span>
                </router-link>
                <div class="info">
                     
                    <h4 class="title usmall">
                        <router-link to="/full-mouth-rest-longevity">
                             {{ $t('sidebar_fullmouth_r2_title') }}
                        </router-link>
                    </h4>
                </div>
            </div>
            
        </div>
        <div class="widget widget_grin_posts_thumb">
            <h3 class="widget-title">{{ $t('sidebar_popular_posts') }}</h3>

            
            <div class="item">
                <router-link to="/after-surgery" class="thumb">
                    <span class="fullimage cover bg7" role="img"></span>
                </router-link>
                <div class="info">
                     
                    <h4 class="title usmall">
                        <router-link to="/after-surgery">
                            {{ $t('sidebar_fullmouth_p1_title') }}
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
                      
                        <router-link to="/daily-care">{{ $t('sidebar_fullmouth_p2_title') }}</router-link>

                    </h4>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
export default {
    name: 'BlogSidebarFullMouthRest'
}
</script>