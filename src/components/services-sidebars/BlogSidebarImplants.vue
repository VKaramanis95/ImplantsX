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
                       <router-link to="/why-we-lose-teeth">{{ $t('implant_sidebar_title_lose_teeth') }}</router-link>

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
                        <router-link to="/implants-gold-standards">{{ $t('implant_sidebar_title_gold_standard') }}</router-link>

                    </h4>
                </div>
            </div>
            <div class="item">
                <router-link to="/blog-details" class="thumb">
                    <span class="fullimage cover bg2" role="img"></span></router-link>
                <div class="info">
                    <span>November 27, 2022</span>
                    <h4 class="title usmall">
                      <!--   <router-link to="/blog-details">
                            Dental Implant or zirconia Bridges ?
                        </router-link>-->
                        <router-link to="/implants-quality">{{ $t('implant_sidebar_title_quality_implant') }}</router-link>

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
                        <router-link to="/implants-eat-anything">{{ $t('implant_sidebar_title_eat_anything') }}</router-link>

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
                        <router-link to="/implants-additional-procedure">{{ $t('implant_sidebar_title_additional_procedure') }}</router-link>

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
                        <!--<router-link to="/after-surgery">
                            Οδηγίες μετά το χειρουργείο
                        </router-link>-->
                        <router-link to="/implants-are-painful">{{ $t('implant_sidebar_title_is_painful') }}</router-link>

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