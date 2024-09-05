<template>
    <div class="widget-area"> 
        <div class="widget widget_grin_posts_thumb">
            <h3 class="widget-title">Recent posts</h3>

            <div class="item">
                <router-link to="/blog-details" class="thumb">
                    <span class="fullimage cover bg1" role="img"></span>
                </router-link>
                <div class="info">
                    <span>November 27, 2022</span>
                    <h4 class="title usmall">
                        <router-link to="/blog-details">
                            New Technology Make for Dental Operation
                        </router-link>
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
                        <router-link to="/blog-details">
                            Regular Dental care make Your Smile Brighter
                        </router-link>
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
                        <router-link to="/blog-details">Dental Hygiene for All Age to Make Smile</router-link>
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
                        <router-link to="/blog-details">
                            New Technology Make for Dental Operation
                        </router-link>
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
                        <router-link to="/blog-details">
                            Regular Dental care make Your Smile Brighter
                        </router-link>
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
                        <router-link to="/blog-details">Dental Hygiene for All Age to Make Smile</router-link>
                    </h4>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
export default {
    name: 'BlogSidebar'
}
</script>