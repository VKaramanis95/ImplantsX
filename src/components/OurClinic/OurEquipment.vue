<template>
    <div>
      <!-- Render different layouts based on screen size -->
      <div v-if="isSmallScreen"> <!-- Assuming you have computed property isSmallScreen -->
        <!-- Small screen layout -->
        <OurEquipmentSmallScreen />
      </div>
      <div v-else>
        <!-- Large screen layout -->
        <OurEquipmentBigScreen />
      </div>
    </div>
  </template>
  
  <script>
  import OurEquipmentSmallScreen from './OurEquipmentSmallScreen.vue';
  import OurEquipmentBigScreen from './OurEquipmentBigScreen.vue';
  
  export default {
    components: {
        OurEquipmentSmallScreen,
        OurEquipmentBigScreen
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
  