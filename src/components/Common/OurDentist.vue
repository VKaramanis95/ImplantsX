<template>
  <div class="doctor-area pb-70">
      <div class="section-title">
          <span class="sub-title">
              <i class="flaticon-hashtag-symbol"></i>
              {{ $t('our_dentists_home_page_span') }}
          </span>
          <h2> {{ $t('our_dentists_home_page_h2') }}</h2>
      </div>
      <div class="container">

          <div class="row">
            <div class="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                  <div class="single-doctor">
                      <router-link to="/tsetsenekou">
                          <img src="../../assets/images/OurTeam/tsetsenekou/tsetsenekou_allteam.webp" alt="image">
                      </router-link>

                      <div class="doctor-content">
                          <h3>
                              <router-link to="/tsetsenekou">
                                {{ $t('our_team_tsetsenekou') }}
                              </router-link>
                          </h3>
                          <span>{{ $t('all_dentists_tsetsenekou_spec') }}</span>

                          <div class="share-link">
                              <a href="https://www.facebook.com/" target="_blank"><i class='bx bxl-facebook'></i></a>
                              <a href="https://twitter.com/?lang=en" target="_blank"><i class='bx bxl-twitter'></i></a>
                              <a href="https://www.linkedin.com/" target="_blank"><i class='bx bxl-linkedin'></i></a>
                              <a href="https://www.instagram.com/" target="_blank"><i class='bx bxl-instagram'></i></a>
                          </div>
                      </div>
                  </div>
              </div>
              
              <div class="col-lg-4 col-md-6">
                  <div class="single-doctor">
                      <router-link to="/labropoulou">
                          <img src="../../assets/images/OurTeam/labropoulou/labropoulou_allteam.webp" alt="image">
                      </router-link>

                      <div class="doctor-content">
                          <h3>
                              <router-link to="/labropoulou">
                                {{ $t('our_team_labropoulou') }}
                              </router-link>
                          </h3>
                          <span>{{ $t('all_dentists_labropoulou_spec') }}</span>

                          <div class="share-link">
                              <a href="https://www.facebook.com/" target="_blank"><i class='bx bxl-facebook'></i></a>
                              <a href="https://twitter.com/?lang=en" target="_blank"><i class='bx bxl-twitter'></i></a>
                              <a href="https://www.linkedin.com/" target="_blank"><i class='bx bxl-linkedin'></i></a>
                              <a href="https://www.instagram.com/" target="_blank"><i class='bx bxl-instagram'></i></a>
                          </div>
                      </div>
                  </div>
              </div>

              <div class="col-lg-4 col-md-6">
                <div class="single-doctor">
                    <router-link to="/labropoulou">
                        <img src="../../assets/images/OurTeam/dimakis/dimakis_allteam.webp" alt="image">
                    </router-link>

                    <div class="doctor-content">
                        <h3>
                            <router-link to="/dimakis">
                              {{ $t('our_team_dimakis') }}
                            </router-link>
                        </h3>
                        <span>{{ $t('all_dentists_dimakis_spec') }}</span>

                        <div class="share-link">
                            <a href="https://www.facebook.com/" target="_blank"><i class='bx bxl-facebook'></i></a>
                            <a href="https://twitter.com/?lang=en" target="_blank"><i class='bx bxl-twitter'></i></a>
                            <a href="https://www.linkedin.com/" target="_blank"><i class='bx bxl-linkedin'></i></a>
                            <a href="https://www.instagram.com/" target="_blank"><i class='bx bxl-instagram'></i></a>
                        </div>
                    </div>
                </div>
            </div>

              

              
          </div>
 
        <div class="view-all-btn-container">
              <router-link to="/our-team" class="default-btn">{{ $t('button_view_all') }}</router-link>
          </div>
      </div>
       
  </div>
</template>

<script>
export default {
  name: 'OurDentist'
}
</script>

