<template>
    <div class="widget-area"> 
        <div class="widget widget_grin_posts_thumb">
            <h3 class="widget-title">Recent posts</h3>

            <div class="item">
                <router-link to="/veneers-natural-color" class="thumb">
                    <span class="fullimage cover bg3" role="img"></span>
                </router-link>
                <div class="info">
                     
                    <h4 class="title usmall">
                       <router-link to="/veneers-natural-color">{{ $t('zircven_sidebar_title') }}</router-link>

                    </h4>
                </div>
            </div>
            <div class="item">
                <router-link to="/veneers-benefits" class="thumb">
                    <span class="fullimage cover bg3" role="img"></span>
                </router-link>
                <div class="info">
                     
                    <h4 class="title usmall">
                       <router-link to="/veneers-benefits">{{ $t('zircven_sidebar_title1') }}</router-link>

                    </h4>
                </div>
            </div>
            <div class="item">
                <router-link to="/veneers-consumption" class="thumb">
                    <span class="fullimage cover bg3" role="img"></span>
                </router-link>
                <div class="info">
                     
                    <h4 class="title usmall">
                        <router-link to="/veneers-consumption">{{ $t('zircven_sidebar_title2') }}</router-link>

                    </h4>
                </div>
            </div>
            
        </div>
        <div class="widget widget_grin_posts_thumb">
            <h3 class="widget-title">Most Popular Posts</h3>

            <div class="item">
                <router-link to="/veneers-fall" class="thumb">
                    <span class="fullimage cover bg1" role="img"></span>
                </router-link>
                <div class="info">
                     
                    <h4 class="title usmall">
                      
                        <router-link to="/veneers-fall">{{ $t('zircven_sidebar_title3') }}</router-link>

                    </h4>
                </div>
            </div>

            <div class="item">
                <router-link to="/veneers-longevity" class="thumb">
                    <span class="fullimage cover bg1" role="img"></span>
                </router-link>
                <div class="info">
                     
                    <h4 class="title usmall">
                      
                        <router-link to="/veneers-longevity">{{ $t('zircven_sidebar_title4') }}</router-link>

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