<template>
  <div>
    <!-- Render the current layout component dynamically -->
    <component :is="currentLayout" />
  </div>
</template>

<script>
import { markRaw } from 'vue'; // Import markRaw for performance optimization

export default {
  data() {
    return {
      currentLayout: null, // Holds the current layout component
    };
  },
  computed: {
    isSmallScreen() {
      // Check if screen width is less than or equal to 1280px for small screens
      return window.innerWidth <= 1280;
    },
  },
  async mounted() {
    // Load the appropriate layout based on the initial screen size
    await this.loadLayout();

    // Set up a resize event listener to handle screen resizing
    window.addEventListener('resize', this.loadLayout);
  },
  beforeDestroy() {
    // Clean up the resize event listener
    window.removeEventListener('resize', this.loadLayout);
  },
  methods: {
    async loadLayout() {
      if (this.isSmallScreen) {
        const { default: AboutUsHomePageSmallScreen } = await import('./AboutUsHomePageSmallScreen.vue');
        this.currentLayout = markRaw(AboutUsHomePageSmallScreen); // Mark as raw to prevent reactivity
        this.loadSmallScreenScripts();
      } else {
        const { default: AboutUsHomePageBigScreen } = await import('./AboutUsHomePageBigScreen.vue');
        this.currentLayout = markRaw(AboutUsHomePageBigScreen); // Mark as raw to prevent reactivity
        this.loadLargeScreenScripts();
      }
    },
    loadSmallScreenScripts() {
      const script = document.createElement('script');
      script.src = 'path/to/small-screen-script.js'; // Specify the script URL for small screens
      script.async = true;
      document.head.appendChild(script);
    },
    loadLargeScreenScripts() {
      const script = document.createElement('script');
      script.src = 'path/to/large-screen-script.js'; // Specify the script URL for large screens
      script.async = true;
      document.head.appendChild(script);
    },
  },
};
</script>
