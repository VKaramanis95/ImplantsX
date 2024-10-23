<template>
    <div class="blog-area pt-100 pb-100" ref="blogRow">
        <div class="container">
            <div class="row">
                <div v-for="(post, index) in paginatedPosts" :key="index" class="col-lg-4 col-md-6">
                    <div class="single-blog">
                        <div class="blog-image">
                            <router-link :to="post.link">
                                <img :src="post.image" :alt="$t(post.altKey)" />
                            </router-link>
                        </div>
                        <div class="blog-content">
                            <h3>
                                <router-link :to="post.link">
                                    {{ $t(post.titleKey) }}
                                </router-link>
                            </h3>
                            <p>{{ $t(post.excerptKey) }}</p>
                            <router-link :to="post.link" class="blog-btn">
                                <b>{{ $t('blog_allpage_more') }}</b>
                            </router-link>

                           
                        </div>
                    </div>
                </div>
            </div>
            <div class="pagination" v-if="showPagination">
                <button @click="prevPage" :disabled="currentPage === 1">{{ $t('gallery_button_previous') }}</button>
                <span>{{ $t('gallery_page') }} {{ currentPage }} {{ $t('gallery_from') }}  {{ totalPages }}</span>
                <button @click="nextPage" :disabled="currentPage === totalPages">{{ $t('gallery_button_next') }}</button>
            </div>
        </div>
    </div>
</template>



<script>
export default {
    name: 'Blog',
    data() {
        return {
            posts: [
                // Define your blog posts here as objects with properties like 'titleKey', 'excerptKey', 'image', 'link', 'author', etc.
                {
                    titleKey: 'blog_allpage_pediatric_title',
                    excerptKey: 'blog_allpage_pediatric_p',
                    image: require('@/assets/images/blog/pediatric-dentistry/pediatric_allblog.webp'),
                    altKey: 'image_alt_pediatric',
                    link: '/pediatric-dentistry',
                   
                },
                {
                    titleKey: 'blog_allpage_preventive_title',
                    excerptKey: 'blog_allpage_preventive_p',
                    image: require('@/assets/images/blog/preventive-dentistry/preventive_dentistry_allblog.webp'),
                    altKey: 'image_alt_pediatric',
                    link: '/preventive-dentistry',
                   
                },
                
                {
                    titleKey: 'blog_allpage_mouth_smell_title',
                    excerptKey: 'blog_allpage_mouth_smell_p',
                    image: require('@/assets/images/blog/mouth-smell/mouth_smell_blog_all.webp'),
                    altKey: 'image_alt_pediatric',
                    link: '/mouth-smell',
                   
                },
                {
                    titleKey: 'blog_allpage_mouth_brush_title',
                    excerptKey: 'blog_allpage_mouth_brush_p',
                    image: require('@/assets/images/blog/brushing/mouth-brushing-allblog.webp'),
                    altKey: 'image_alt_pediatric',
                    link: '/brush-properly',
                   
                },
                {
                    titleKey: 'blog_allpage_white_smile_secrets_title',
                    excerptKey: 'blog_allpage_white_smile_secrets_p',
                    image: require('@/assets/images/blog/white-smile-secrets/white_smile_allblog.webp'),
                    altKey: 'image_alt_pediatric',
                    link: '/white-smile-secrets',
                   
                },
                {
                    titleKey: 'blog_allpage_implants_pain_title',
                    excerptKey: 'blog_allpage_implants_pain_p',
                    image: require('@/assets/images/blog/implants-pain/implantspain-allblog.webp'),
                    altKey: 'image_alt_pediatric',
                    link: '/implants-pain',
                   
                },
                
                {
                    titleKey: 'blog_allpage_implants_rejection_possibility_title',
                    excerptKey: 'blog_allpage_implants_rejection_possibility_p',
                    image: require('@/assets/images/blog/implants-rejection-possibility/rejection_allblog.webp'),
                    altKey: 'image_alt_pediatric',
                    link: '/implants-rejection-podibility',
                    
                },
                {
                    titleKey: 'blog_allpage_wisdom_tooth_extraction_title',
                    excerptKey: 'blog_allpage_wisdom_tooth_extraction_p',
                    image: require('@/assets/images/blog/wisdom-tooth/wisdom-teeth-allblog.webp'),
                    altKey: 'image_alt_pediatric',
                    link: '/wisdom-tooth-extraction',
                    
                },
                {
                    titleKey: 'blog_allpage_dentist_first_title',
                    excerptKey: 'blog_allpage_dentist_first_p',
                    image: require('@/assets/images/blog/first-time/first_time_allblog.webp'),
                    altKey: 'image_alt_pediatric',
                    link: '/first-time',
                    
                },
                {
                    titleKey: 'blog_allpage_prp_facelift_title',
                    excerptKey: 'blog_allpage_prp_facelift_p',
                    image: require('@/assets/images/blog/prp-facelift/prp_facelift_main.webp'),
                    altKey: 'image_alt_pediatric',
                    link: '/prp-facelift',
                    
                },
                {
                    titleKey: 'blog_allpage_cbct_title  ',
                    excerptKey: 'blog_allpage_cbct_p',
                    image: require('@/assets/images/blog/cbtc/cbtc.webp'),
                    altKey: 'image_alt_pediatric',
                    link: '/cbct-tomography',
                    
                },
            ],
            perPage: 6,
            currentPage: 1
        };
    },
    computed: {
        paginatedPosts() {
            const startIndex = (this.currentPage - 1) * this.perPage;
            const endIndex = startIndex + this.perPage;
            return this.posts.slice(startIndex, endIndex);
        },
        totalPages() {
            return Math.ceil(this.posts.length / this.perPage);
        },
        showPagination() {
            return this.totalPages > 1;
        }
    },
    methods: {
        scrollToTopOfBlog() {
            const blogRow = this.$refs.blogRow;
            if (blogRow) {
                blogRow.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        },
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.currentPage++;
                this.scrollToTopOfBlog();
            }
        },
        prevPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
                this.scrollToTopOfBlog();
            }
        }
    }
};
</script>

<style>
.single-blog {
    display: flex; /* Use flexbox to control layout */
    flex-direction: column; /* Stack child elements vertically */
    height: 100%; /* Ensure each element takes up full height of its parent */
    padding-bottom: 20px;
}

.single-blog .blog-content {
    flex: 1; /* Allow blog content to expand to fill remaining space */
    display: flex; /* Nested flexbox for alignment */
    flex-direction: column; /* Ensure content stacks properly */
    justify-content: space-between; /* Distribute space evenly between elements */
}


</style>