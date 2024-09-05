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
                        <router-link to="/bone-crafts">Οστικά Μοσχεύματα</router-link>
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
                        <router-link to="/conscious-sedation">Xειρουργείο χωρίς άγχος!</router-link>
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
                            Dental Implant or zirconia Bridges ?
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
                        <router-link to="/daily-care">
                            Οδηγίες για καθημερινή φροντίδα
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
                        <router-link to="/after-surgery">
                            Οδηγίες μετά το χειρουργείο
                        </router-link>
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