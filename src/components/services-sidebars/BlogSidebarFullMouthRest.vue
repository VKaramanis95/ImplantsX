<template>
    <div class="widget-area"> 
        <div class="widget widget_grin_posts_thumb">
            <h3 class="widget-title">Recent posts</h3>

            

            <div class="item">
                <router-link to="/implants-denture-care" class="thumb">
                    <span class="fullimage cover bg3" role="img"></span>
                </router-link>
                <div class="info">
                     
                    <h4 class="title usmall">
                        <router-link to="/implants-denture-care">{{ $t('allx_sidebar_title1') }}</router-link>
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
                            {{ $t('blog_full_mouth_rest_long_title') }}
                        </router-link>
                    </h4>
                </div>
            </div>
            
        </div>
        <div class="widget widget_grin_posts_thumb">
            <h3 class="widget-title">Most Popular Posts</h3>

            
            <div class="item">
                <router-link to="/after-surgery" class="thumb">
                    <span class="fullimage cover bg2" role="img"></span>
                </router-link>
                <div class="info">
                     
                    <h4 class="title usmall">
                        <router-link to="/after-surgery">
                            {{ $t('blog_implants_after_surgery_main_title') }}
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
                      
                        <router-link to="/daily-care">{{ $t('blog_implants_dailycare_title') }}</router-link>

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