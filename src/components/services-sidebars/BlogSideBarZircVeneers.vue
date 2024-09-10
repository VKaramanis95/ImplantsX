<template>
    <div class="widget-area"> 
        <div class="widget widget_grin_posts_thumb">
            <h3 class="widget-title">Recent posts</h3>

            <div class="item">
                <router-link to="/blog-details" class="thumb">
                    <span class="fullimage cover bg3" role="img"></span>
                </router-link>
                <div class="info">
                    <span>November 27, 2022</span>
                    <h4 class="title usmall">
                       <!-- <router-link to="/bone-crafts">Οστικά Μοσχεύματα</router-link>-->
                       <router-link to="/veneers-natural-color">{{ $t('zircven_sidebar_title') }}</router-link>

                    </h4>
                </div>
            </div>
            <div class="item">
                <router-link to="/blog-details" class="thumb">
                    <span class="fullimage cover bg3" role="img"></span>
                </router-link>
                <div class="info">
                    <span>November 27, 2022</span>
                    <h4 class="title usmall">
                       <!-- <router-link to="/bone-crafts">Οστικά Μοσχεύματα</router-link>-->
                       <router-link to="/veneers-benefits">{{ $t('zircven_sidebar_title1') }}</router-link>

                    </h4>
                </div>
            </div>
            <div class="item">
                <router-link to="/blog-details" class="thumb">
                    <span class="fullimage cover bg3" role="img"></span>
                </router-link>
                <div class="info">
                    <span>November 27, 2022</span>
                    <h4 class="title usmall">
                        <!-- <router-link to="/conscious-sedation">Xειρουργείο χωρίς άγχος!</router-link>-->
                        <router-link to="/veneers-consumption">{{ $t('zircven_sidebar_title2') }}</router-link>

                    </h4>
                </div>
            </div>
            
        </div>
        <div class="widget widget_grin_posts_thumb">
            <h3 class="widget-title">Most Popular Posts</h3>

            <div class="item">
                <router-link to="/blog-details" class="thumb">
                    <span class="fullimage cover bg1" role="img"></span>
                </router-link>
                <div class="info">
                    <span>November 27, 2022</span>
                    <h4 class="title usmall">
                       <!-- <router-link to="/cbct-tomography">
                            Αξονική τομογραφία CBCT
                        </router-link>-->
                        <router-link to="/veneers-fall">{{ $t('zircven_sidebar_title3') }}</router-link>

                    </h4>
                </div>
            </div>

            <div class="item">
                <router-link to="/blog-details" class="thumb">
                    <span class="fullimage cover bg1" role="img"></span>
                </router-link>
                <div class="info">
                    <span>November 27, 2022</span>
                    <h4 class="title usmall">
                       <!-- <router-link to="/daily-care">
                            Οδηγίες για καθημερινή φροντίδα
                        </router-link>-->
                        <router-link to="/veneers-longevity">{{ $t('zircven_sidebar_title4') }}</router-link>

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