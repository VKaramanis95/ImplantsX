<template>
    <div class="widget-area"> 
        <div class="widget widget_grin_posts_thumb">
            <h3 class="widget-title">{{ $t('sidebar_recent_posts') }}</h3>

            <div class="item">
                <router-link to="/why-we-lose-teeth" class="thumb">
                    <span class="fullimage cover bg5" role="img"></span>
                </router-link>
                <div class="info">
                     
                    <h4 class="title usmall">
                       <router-link to="/why-we-lose-teeth">{{ $t('sidebar_implants_r1_title') }}</router-link>

                    </h4>
                </div>
            </div>

            <div class="item">
                <router-link to="/implants-gold-standards" class="thumb">
                    <span class="fullimage cover bg4" role="img"></span>
                </router-link>
                <div class="info">
                     
                    <h4 class="title usmall">
                        <router-link to="/implants-gold-standards">{{ $t('sidebar_implants_r2_title') }}</router-link>

                    </h4>
                </div>
            </div>
            <div class="item">
                <router-link to="/implants-additional-procedure" class="thumb">
                    <span class="fullimage cover bg1" role="img"></span>
                </router-link>
                <div class="info">
                     
                    <h4 class="title usmall">
                       
                        <router-link to="/implants-additional-procedure">{{ $t('sidebar_implants_p2_title') }}</router-link>

                    </h4>
                </div>
            </div>
            
        </div>
        <div class="widget widget_grin_posts_thumb">
            <h3 class="widget-title">{{ $t('sidebar_popular_posts') }}</h3>

            <div class="item">
                <router-link to="/implants-eat-anything" class="thumb">
                    <span class="fullimage cover bg6" role="img"></span>
                </router-link>
                <div class="info">
                     
                    <h4 class="title usmall">
                       
                        <router-link to="/implants-eat-anything">{{ $t('sidebar_implants_p1_title') }}</router-link>

                    </h4>
                </div>
            </div>

            <div class="item">
                <router-link to="/implants-quality" class="thumb">
                    <span class="fullimage cover bg4" role="img"></span></router-link>
                <div class="info">
                     
                    <h4 class="title usmall">
                     
                        <router-link to="/implants-quality">{{ $t('sidebar_implants_r3_title') }}</router-link>

                    </h4>
                </div>
            </div>

            

            <div class="item">
                <router-link to="/daily-care" class="thumb">
                    <span class="fullimage cover bg2" role="img"></span>
                </router-link>
                <div class="info">
                     
                    <h4 class="title usmall">
                      
                        <router-link to="/daily-care">{{ $t('sidebar_implants_p3_title') }}</router-link>

                    </h4>
                </div>
            </div>

            <div class="item">
                <router-link to="/after-surgery" class="thumb">
                    <span class="fullimage cover bg7" role="img"></span>
                </router-link>
                <div class="info">
                     
                    <h4 class="title usmall">
                        <router-link to="/after-surgery">
                            {{ $t('sidebar_implants_p4_title') }}
                        </router-link>
                    </h4>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
export default {
    name: 'BlogSidebarImplants'
}
</script>