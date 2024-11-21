<template>
    <div class="widget-area"> 
        <div class="widget widget_grin_posts_thumb">
            <h3 class="widget-title">{{ $t('sidebar_recent_posts') }}</h3>

            <div class="item">
                <router-link to="/veneers-natural-color" class="thumb">
                    <span class="fullimage cover bg3" role="img"></span>
                </router-link>
                <div class="info">
                     
                    <h4 class="title usmall">
                       <router-link to="/veneers-natural-color">{{ $t('sidebar_veneers_r1_title') }}</router-link>

                    </h4>
                </div>
            </div>
            <div class="item">
                <router-link to="/veneers-benefits" class="thumb">
                    <span class="fullimage cover bg3" role="img"></span>
                </router-link>
                <div class="info">
                     
                    <h4 class="title usmall">
                       <router-link to="/veneers-benefits">{{ $t('sidebar_veneers_r2_title') }}</router-link>

                    </h4>
                </div>
            </div>
            <div class="item">
                <router-link to="/veneers-consumption" class="thumb">
                    <span class="fullimage cover bg6" role="img"></span>
                </router-link>
                <div class="info">
                     
                    <h4 class="title usmall">
                        <router-link to="/veneers-consumption">{{ $t('sidebar_veneers_r3_title') }}</router-link>

                    </h4>
                </div>
            </div>
            
            
        </div>
        <div class="widget widget_grin_posts_thumb">
            <h3 class="widget-title">{{ $t('sidebar_popular_posts') }}</h3>

            <div class="item">
                <router-link to="/veneers-fall" class="thumb">
                    <span class="fullimage cover bg1" role="img"></span>
                </router-link>
                <div class="info">
                     
                    <h4 class="title usmall">
                      
                        <router-link to="/veneers-fall">{{ $t('sidebar_veneers_p1_title') }}</router-link>

                    </h4>
                </div>
            </div>

            <div class="item">
                <router-link to="/veneers-longevity" class="thumb">
                    <span class="fullimage cover bg1" role="img"></span>
                </router-link>
                <div class="info">
                     
                    <h4 class="title usmall">
                      
                        <router-link to="/veneers-longevity">{{ $t('sidebar_veneers_p2_title') }}</router-link>

                    </h4>
                </div>
            </div>
            <div class="item">
                <router-link to="/daily-care" class="thumb">
                    <span class="fullimage cover bg2" role="img"></span>
                </router-link>
                <div class="info">
                     
                    <h4 class="title usmall">
                      
                        <router-link to="/daily-care">{{ $t('sidebar_veneers_p3_title') }}</router-link>

                    </h4>
                </div>
            </div>
        

            
        </div>


    </div>
</template>

<script>
export default {
    name: 'BlogSideBarZircVeneers'
}
</script>