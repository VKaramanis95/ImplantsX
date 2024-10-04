<template>
  <div>
    <!-- Dynamically render the appropriate layout based on screen size -->
    <component :is="currentLayout" />
  </div>
</template>

<script>
import { markRaw } from 'vue'; // Import markRaw for performance optimization

export default {
  data() {
    return {
      currentLayout: null, // Holds the currently active layout component
    };
  },
  computed: {
    isSmallScreen() {
      // Check if the screen width is less than or equal to 768px
      return window.innerWidth <= 768;
    },
  },
  async mounted() {
    // Load the appropriate layout component on mount
    await this.loadLayout();

    // Add event listener for window resize to update layout dynamically
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    // Remove the event listener when the component is destroyed
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    async loadLayout() {
      // Load the small screen or large screen layout based on current size
      if (this.isSmallScreen) {
        const { default: DentalTourismPageSmallScreen } = await import('./DentalTourismPageSmallScreen.vue');
        this.currentLayout = markRaw(DentalTourismPageSmallScreen);
        this.loadSmallScreenScripts();
      } else {
        const { default: DentalTourismPageBigScreen } = await import('./DentalTourismPageBigScreen.vue');
        this.currentLayout = markRaw(DentalTourismPageBigScreen);
        this.loadLargeScreenScripts();
      }
    },
    handleResize() {
      // Load the layout when the window is resized
      this.loadLayout();
    },
    loadSmallScreenScripts() {
      // Load scripts specific to small screen layout
      const script = document.createElement('script');
      script.src = 'path/to/small-screen-script.js'; // Specify the actual script URL
      script.async = true;
      document.head.appendChild(script);
    },
    loadLargeScreenScripts() {
      // Load scripts specific to large screen layout
      const script = document.createElement('script');
      script.src = 'path/to/large-screen-script.js'; // Specify the actual script URL
      script.async = true;
      document.head.appendChild(script);
    },
  },
};
</script>
