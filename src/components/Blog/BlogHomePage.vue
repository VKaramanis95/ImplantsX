<template>
    <div class="blog-area pt-100 pb-70">
        <div class="container">
            <div class="row align-items-center">
                <div class="section-title">
                    <span class="sub-title">
                        <i class="flaticon-hashtag-symbol"></i>
                        {{ $t('blog_mainpage_span') }}
                    </span>
                    <h2>{{ $t('blog_mainpage_title') }}</h2>
                </div>

                
            </div>

            <div class="row">
                <div class="col-lg-4 col-md-6">
                    <div class="single-blog">
                        <div class="blog-image">
                            <router-link to="/pediatric-dentistry">
                                <img src="../../assets/images/blog/pediatric-dentistry/pediatric_allblog.webp" alt="image">
                            </router-link>

            
                        </div>
                        <div class="blog-content">
                            <h3>
                                <router-link to="/blog-details">
                                    {{ $t('blog_allpage_pediatric_title') }}
                                </router-link>
                            </h3>
                            <p>{{ $t('blog_allpage_pediatric_p') }}</p>
                            <router-link to="/pediatric-dentistry" class="blog-btn">
                                {{ $t('button_read_more') }}
                            </router-link>

                           
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="single-blog">
                        <div class="blog-image">
                            <router-link to="/preventive-dentistry">
                                <img src="../../assets/images/blog/preventive-dentistry/preventive_dentistry_allblog.webp" alt="image">
                            </router-link>

            
                        </div>
                        <div class="blog-content">
                            <h3>
                                <router-link to="/preventive-dentistry">
                                    {{ $t('blog_allpage_preventive_title') }}
                                </router-link>
                            </h3>
                            <p>{{ $t('blog_allpage_preventive_p') }}</p>
                            <router-link to="/preventive-dentistry" class="blog-btn">
                                {{ $t('button_read_more') }}
                            </router-link>

                            
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="single-blog">
                        <div class="blog-image">
                            <router-link to="/preventive-dentistry">
                                <img src="../../assets/images/blog/white-smile-secrets/white_smile_allblog.webp" alt="image">
                            </router-link>

            
                        </div>
                        <div class="blog-content">
                            <h3>
                                <router-link to="/white-smile-secrets">
                                    {{ $t('blog_allpage_white_smile_secrets_title') }}
                                </router-link>
                            </h3>
                            <p>{{ $t('blog_allpage_white_smile_secrets_p') }}</p>
                            <router-link to="/white-smile-secrets" class="blog-btn">
                                {{ $t('button_read_more') }}
                            </router-link>

                            
                        </div>
                    </div>
                </div>
            </div>
            <div class="view-all-btn-container">
              <router-link to="/blog" class="default-btn">{{ $t('button_view_all') }}</router-link>
          </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Blog'
}
</script>
