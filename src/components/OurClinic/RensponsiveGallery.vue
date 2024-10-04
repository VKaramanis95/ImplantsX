<template>
    <div>
      <!-- Render different layouts based on screen size -->
      <div v-if="isSmallScreen"> <!-- Assuming you have computed property isSmallScreen -->
        <!-- Small screen layout -->
        <RensponsiveGallerySmallScreen />
      </div>
      <div v-else>
        <!-- Large screen layout -->
        <RensponsiveGalleryBigScreen />
      </div>
    </div>
  </template>
  
  <script>
  import RensponsiveGallerySmallScreen from './RensponsiveGallerySmallScreen.vue';
  import RensponsiveGalleryBigScreen from './RensponsiveGalleryBigScreen.vue';
  
  export default {
    components: {
        RensponsiveGallerySmallScreen,
        RensponsiveGalleryBigScreen
    },
    computed: {
      isSmallScreen() {
        // Example: Check if screen width is less than 768px for small screen
        return window.innerWidth <= 768;
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
  