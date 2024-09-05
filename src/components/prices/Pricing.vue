<template>
    <div>
      <!-- Render different layouts based on screen size -->
      <div v-if="isSmallScreen"> <!-- Assuming you have computed property isSmallScreen -->
        <!-- Small screen layout -->
        <PricingSmallScreenLayout />
      </div>
      <div v-else>
        <!-- Large screen layout -->
        <PricingLargeScreenLayout />
      </div>
    </div>
  </template>
  
  <script>
  import PricingSmallScreenLayout from './PricingSmallScreenLayout.vue';
  import PricingLargeScreenLayout from './PricingLargeScreenLayout.vue';
  
  export default {
    components: {
      PricingSmallScreenLayout,
      PricingLargeScreenLayout
    },
    computed: {
      isSmallScreen() {
        // Example: Check if screen width is less than 768px for small screen
        return window.innerWidth <= 1280;
      }
    },
    mounted() {
      if (this.isSmallScreen) {
        this.loadSmallScreenScripts();
      } else {
        this.loadLargeScreenScripts();
      }
    },
    methods: {
      loadSmallScreenScripts() {
        const script = document.createElement('script');
       
        script.async = true;
        document.head.appendChild(script);
      },
      loadLargeScreenScripts() {
        const script = document.createElement('script');
        
        script.async = true;
        document.head.appendChild(script);
      }
    }
  }
  </script>
  