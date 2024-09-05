<template>
    <div>
      <!-- Render different layouts based on screen size -->
      <div v-if="isSmallScreen"> <!-- Assuming you have computed property isSmallScreen -->
        <!-- Small screen layout -->
        <SmallScreensFaq />
      </div>
      <div v-else>
        <!-- Large screen layout -->
        <BigScreensFaq />
      </div>
    </div>
  </template>
  
  <script>
  import SmallScreensFaq from './SmallScreensFaq.vue';
  import BigScreensFaq from './BigScreensFaq.vue';
  
  export default {
    components: {
        SmallScreensFaq,
        BigScreensFaq
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
  