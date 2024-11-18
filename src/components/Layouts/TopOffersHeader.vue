<template>
    <div class="top-header-area">
      <div class="container">
        <div class="row align-items-center">
          <div class="text-carousel-offer">
            <div class="carousel-content-offer">
              <router-link to="/pricing"><span>{{ $t('top_bar_offer_implant') }}</span></router-link>
              <router-link to="/pricing"><span>{{ $t('top_bar_offer_allx') }}</span></router-link>
              <router-link to="/pricing"><span>{{ $t('top_bar_offer_hs') }}</span></router-link>
              <router-link to="/pricing"><span>{{ $t('top_bar_offer_veneers') }}</span></router-link>
              <!-- Duplicate the content to create a seamless loop -->
              <router-link to="/pricing"><span>{{ $t('top_bar_offer_implant') }}</span></router-link>
              <router-link to="/pricing"><span>{{ $t('top_bar_offer_allx') }}</span></router-link>
              <router-link to="/pricing"><span>{{ $t('top_bar_offer_hs') }}</span></router-link>
              <router-link to="/pricing"><span>{{ $t('top_bar_offer_veneers') }}</span></router-link>
              </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TopHeader',
    mounted() {
      const carousel = this.$el.querySelector('.carousel-content-offer');
      const spans = carousel.querySelectorAll('span');
      let interactionOccurred = false; // Track whether the user has interacted
  
      spans.forEach(span => {
        // Hover behavior
        span.addEventListener('mouseenter', () => {
          if (!interactionOccurred) {
            carousel.style.animationPlayState = 'paused';
          }
        });
        span.addEventListener('mouseleave', () => {
          if (!interactionOccurred) {
            carousel.style.animationPlayState = 'running';
          }
        });
  
        // Touch events
        span.addEventListener('touchstart', () => {
          if (!interactionOccurred) {
            carousel.style.animationPlayState = 'paused';
          }
        });
        span.addEventListener('touchend', () => {
          if (!interactionOccurred) {
            carousel.style.animationPlayState = 'running';
          }
        });
  
        // Click or touch event to resume animation and disable hover effects
        span.addEventListener('click', () => {
          carousel.style.animationPlayState = 'running';
          interactionOccurred = true; // Mark that interaction has occurred
          // Remove hover and touch behavior after click/touch
          span.removeEventListener('mouseenter', pauseAnimation);
          span.removeEventListener('mouseleave', resumeAnimation);
          span.removeEventListener('touchstart', pauseAnimation);
          span.removeEventListener('touchend', resumeAnimation);
        });
  
        // Helper functions for hover and touch
        const pauseAnimation = () => {
          if (!interactionOccurred) {
            carousel.style.animationPlayState = 'paused';
          }
        };
  
        const resumeAnimation = () => {
          if (!interactionOccurred) {
            carousel.style.animationPlayState = 'running';
          }
        };
      });
    }
  }
  </script>
  