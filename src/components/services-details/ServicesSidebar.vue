<template>
    <div class="widget-area">
        <div class="widget widget_search">
            <form class="search-form">
                <input type="search" class="search-field" placeholder="Search...">
                <button type="submit"><i class='bx bx-search-alt'></i></button>
            </form>
        </div>

        <div class="widget widget_grin_posts_thumb">
            <h3 class="widget-title">Recent posts</h3>

            <div class="item">
                <router-link to="/services-details" class="thumb">
                    <span class="fullimage cover bg1" role="img"></span>
                </router-link>
                <div class="info">
                    <span>November 27, 2022</span>
                    <h4 class="title usmall">
                        <router-link to="/services-details">
                            New Technology Make for Dental Operation
                        </router-link>
                    </h4>
                </div>
            </div>

            <div class="item">
                <router-link to="/services-details" class="thumb">
                    <span class="fullimage cover bg2" role="img"></span>
                </router-link>
                <div class="info">
                    <span>November 27, 2022</span>
                    <h4 class="title usmall">
                        <router-link to="/services-details">
                            Regular Dental care make Your Smile Brighter
                        </router-link>
                    </h4>
                </div>
            </div>

            <div class="item">
                <router-link to="/services-details" class="thumb">
                    <span class="fullimage cover bg3" role="img"></span>
                </router-link>
                <div class="info">
                    <span>November 27, 2022</span>
                    <h4 class="title usmall">
                        <router-link to="/services-details">
                            Dental Hygiene for All Age to Make Smile
                        </router-link>
                    </h4>
                </div>
            </div>
        </div>

        <div class="widget widget_categories">
            <h3 class="widget-title">Categories</h3>

            <ul>
                <li><router-link to="/">Dental</router-link></li>
                <li><router-link to="/">Medical</router-link></li>
                <li><router-link to="/">Dentist</router-link></li>
                <li><router-link to="/">Hygiene</router-link></li>
                <li><router-link to="/">Hospital</router-link></li>
                <li><router-link to="/">Child Care</router-link></li>
            </ul>
        </div>

        <div class="widget widget_tag_cloud">
            <h3 class="widget-title">Popular Tags</h3>

            <div class="tagcloud">
                <router-link to="/">Business</router-link>
                <router-link to="/">Privacy</router-link>
                <router-link to="/">Technology</router-link>
                <router-link to="/">Tips</router-link>
                <router-link to="/">Uncategorized</router-link>
            </div>
        </div>
    
        <div class="widget widget_instagram">
            <h3 class="widget-title">Gallery</h3>

            <ul>
                <li>
                    <div class="box">
                        <img src="../../assets/images/gallery/gallery-1.webp" alt="image">
                        <i class="bx bxl-instagram"></i>
                        <a href="https://www.instagram.com/" target="_blank" class="link-btn"></a>
                    </div>
                </li>

                <li>
                    <div class="box">
                        <img src="../../assets/images/gallery/gallery-2.webp" alt="image">
                        <i class="bx bxl-instagram"></i>
                        <a href="https://www.instagram.com/" target="_blank" class="link-btn"></a>
                    </div>
                </li>

                <li>
                    <div class="box">
                        <img src="../../assets/images/gallery/gallery-3.webp" alt="image">
                        <i class="bx bxl-instagram"></i>
                        <a href="https://www.instagram.com/" target="_blank" class="link-btn"></a>
                    </div>
                </li>

                <li>
                    <div class="box">
                        <img src="../../assets/images/gallery/gallery-4.webp" alt="image">
                        <i class="bx bxl-instagram"></i>
                        <a href="https://www.instagram.com/" target="_blank" class="link-btn"></a>
                    </div>
                </li>

                <li>
                    <div class="box">
                        <img src="../../assets/images/gallery/gallery-5.webp" alt="image">
                        <i class="bx bxl-instagram"></i>
                        <a href="https://www.instagram.com/" target="_blank" class="link-btn"></a>
                    </div>
                </li>

                <li>
                    <div class="box">
                        <img src="../../assets/images/gallery/gallery-6.webp" alt="image">
                        <i class="bx bxl-instagram"></i>
                        <a href="https://www.instagram.com/" target="_blank" class="link-btn"></a>
                    </div>
                </li>

                <li>
                    <div class="box">
                        <img src="../../assets/images/gallery/gallery-7.webp" alt="image">
                        <i class="bx bxl-instagram"></i>
                        <a href="https://www.instagram.com/" target="_blank" class="link-btn"></a>
                    </div>
                </li>

                <li>
                    <div class="box">
                        <img src="../../assets/images/gallery/gallery-8.webp" alt="image">
                        <i class="bx bxl-instagram"></i>
                        <a href="https://www.instagram.com/" target="_blank" class="link-btn"></a>
                    </div>
                </li>

                <li>
                    <div class="box">
                        <img src="../../assets/images/gallery/gallery-9.webp" alt="image">
                        <i class="bx bxl-instagram"></i>
                        <a href="https://www.instagram.com/" target="_blank" class="link-btn"></a>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ServicesSidebar'
}
</script>