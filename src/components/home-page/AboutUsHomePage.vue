<template>
    <div>
      <!-- Render different layouts based on screen size -->
      <div v-if="isSmallScreen"> <!-- Assuming you have computed property isSmallScreen -->
        <!-- Small screen layout -->
        <AboutUsHomePageSmallScreen />
      </div>
      <div v-else>
        <!-- Large screen layout -->
        <AboutUsHomePageBigScreen />
      </div>
    </div>
  </template>
  
  <script>
  import AboutUsHomePageSmallScreen from './AboutUsHomePageSmallScreen.vue';
  import AboutUsHomePageBigScreen from './AboutUsHomePageBigScreen.vue';
  
  export default {
    components: {
        AboutUsHomePageSmallScreen,
        AboutUsHomePageBigScreen
    },
    computed: {
      isSmallScreen() {
        // Example: Check if screen width is less than 768px for small screen
        return window.innerWidth <= 1262;
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
  