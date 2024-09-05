<template>
    <div class="widget-area"> 
        <div class="widget widget_grin_posts_thumb">
            <h3 class="widget-title"><u>{{ $t('blog_tourism_sidebar_upcomingevents') }}</u></h3>

            <div class="item">
                <a class="thumb">
                    <img src="../../assets/images/dental-tourism/blog-sidebar/watersports.webp" alt="W Watersports Festival" class="cover">
                </a>
                <div class="info">
                    <span>May 1, 2024</span>
                    <h4 class="title usmall">
                        <a href="https://event.marriott.com/klxwh-w-costa-navarino/events/messinia/make-a-splash-at-the-watersports-festival" target="_blank">W Watersports Festival (21-24 June)</a>
                
                    </h4>
                </div>
            </div>

            <div class="item">
                <a class="thumb">
                    <img src="../../assets/images/dental-tourism/blog-sidebar/fashion.webp" alt="W Watersports Festival" class="cover">

                </a>
                <div class="info">
                    <span>May 27, 2022</span>
                    <h4 class="title usmall">
                        <a href="https://event.marriott.com/klxwh-w-costa-navarino/events/messinia/a-weekend-dedicated-to-fashion" target="_blank">A weekend dedicated to fashion (7-8 June)</a>
                    </h4>
                </div>
            </div>

            <div class="item">
                <a class="thumb">
                    <img src="../../assets/images/dental-tourism/blog-sidebar/luis.webp" alt="W Watersports Festival" class="cover">
                </a>
                 <div class="info">
                    <span>April 27, 2022</span>
                    <h4 class="title usmall">
                        <a href="https://event.marriott.com/klxwh-w-costa-navarino/events/messinia/sunset-session-with-luis-yiann" target="_blank">Sunset Session with Luis Yiann(14-15 June)</a>
                    </h4>
                </div>
            </div>
        </div>
        <div class="widget widget_grin_posts_thumb">
            <h3 class="widget-title"><u>{{ $t('blog_tourism_sidebar_popularevents') }}</u></h3>

            <div class="item">
                <router-link to="#" class="thumb">
                    <span class="fullimage cover bg1" role="img"></span>
                </router-link>
                <div class="info">
                    <span>November 27, 2022</span>
                    <h4 class="title usmall">
                        <router-link to="#">
                            The Secrets of Ancient Olympia
                        </router-link>
                    </h4>
                </div>
            </div>

            <div class="item">
                <router-link to="#" class="thumb">
                    <span class="fullimage cover bg2" role="img"></span>
                </router-link>
                <div class="info">
                    <span>November 27, 2022</span>
                    <h4 class="title usmall">
                        <router-link to="#">
                            7 + 1 reasons we love Messinia
                        </router-link>
                    </h4>
                </div>
            </div>

            <div class="item">
                <router-link to="/#" class="thumb">
                    <span class="fullimage cover bg3" role="img"></span>
                </router-link>
                <div class="info">
                    <span>November 27, 2022</span>
                    <h4 class="title usmall">
                        <router-link to="#">6 things to do in Kalamata to get to know the city</router-link>
                    </h4>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
export default {
    name: 'BlogSideBarDentalTourism'
}
</script>