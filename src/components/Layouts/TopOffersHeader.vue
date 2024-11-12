<template>
    <div class="top-header-area">
      <div class="container">
        <div class="row align-items-center">
          <div class="text-carousel-offer">
            <div class="carousel-content-offer">
              <router-link to="/pricing"><span>Single dental implant from 1200$</span></router-link>
              <router-link to="/pricing"><span>All on X from 8000$</span></router-link>
              <router-link to="/pricing"><span>Hollywood Smile from 800$</span></router-link>
              <router-link to="/pricing"><span>Veneers from 700$</span></router-link>
              <!-- Duplicate the content to create a seamless loop -->
              <router-link to="/pricing"><span>Single dental implant from 1200$</span></router-link>
              <router-link to="/pricing"><span>All on X from 8000$</span></router-link>
              <router-link to="/pricing"><span>Hollywood Smile from 800$</span></router-link>
              <router-link to="/pricing"><span>Veneers from 700$</span></router-link>
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
  
      spans.forEach(span => {
        // Mouse events
        span.addEventListener('mouseenter', () => {
          carousel.style.animationPlayState = 'paused';
        });
        span.addEventListener('mouseleave', () => {
          carousel.style.animationPlayState = 'running';
        });
  
        // Touch events
        span.addEventListener('touchstart', () => {
          carousel.style.animationPlayState = 'paused';
        });
        span.addEventListener('touchend', () => {
          carousel.style.animationPlayState = 'running';
        });
      });
    }
  }
  </script>
  