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
                        <router-link to="/all6-or-all4">{{ $t('allx_sidebar_title') }}</router-link>
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
                        <router-link to="/implants-denture-care">{{ $t('allx_sidebar_title1') }}</router-link>
                    </h4>
                </div>
            </div>
            <div class="item">
                <router-link to="/blog-details" class="thumb">
                    <span class="fullimage cover bg2" role="img"></span>
                </router-link>
                <div class="info">
                    <span>November 27, 2022</span>
                    <h4 class="title usmall">
                        <router-link to="/why-smile-make-over">
                            {{ $t('allx_sidebar_title2') }}
                        </router-link>
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
                        <router-link to="/cbct-tomography">
                            Αξονική τομογραφία CBCT
                        </router-link>
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
                        <router-link to="/additional-adhesives">
                            {{ $t('allx_sidebar_title3') }}
                        </router-link>
                    </h4>
                </div>
            </div>

            
<!--
            <div class="item">
                <router-link to="/blog-details" class="thumb">
                    <span class="fullimage cover bg2" role="img"></span>
                </router-link>
                <div class="info">
                    <span>November 27, 2022</span>
                    <h4 class="title usmall">
                        <router-link to="/after-surgery">
                            Οδηγίες μετά το χειρουργείο
                        </router-link>
                    </h4>
                </div>
            </div>-->
        </div>


    </div>
</template>

<script>
export default {
    name: 'BlogSidebarAllonX'
}
</script>