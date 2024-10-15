<template>
  <div class="container" ref="container">
    <div class="row">
      <div class="col-lg-6 services-details">
        <div class="clinic-text" style="padding-top:20px">
          <h2>{{ $t('our_clinic_equipment_h2') }}</h2>
        </div>
        <div class="services-details-desc">
          <p>
            {{ $t('our_clinic_equipment_p') }}
          </p>
        </div>
      </div>

      <div class="services-details-area ptb-80">
        <h3><u>{{ $t('our_clinic_equipment_title') }}</u></h3>

        <div class="container">
          <div class="row align-items-center" v-for="(product, index) in products" :key="index">
            <div class="col-lg-6 services-details-image">
              <img :src="product.image" :alt="`image-${index}`" />
            </div>
            <div class="col-lg-6 services-details">
              <div class="services-details-desc">
                <h3>{{ $t(product.h3) }}</h3>
                <p>
                  <span v-html="$t(product.p)"></span>
                </p>
              </div>
            </div>
          </div>
          <div class="separate" v-for="(_, index) in products.length - 1" :key="`sep-${index}`"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OurEquipmentSmallScreen',
  data() {
    return {
      playAnimation: false,
      products: [
        {
          image: require("../../assets/images/OurClinic/equipment/microspoce.webp"),
          h3: "our_clinic_equipment_product1_h3",
          p: "our_clinic_equipment_product1_p"
        },
        {
          image: require("../../assets/images/OurClinic/equipment/itero-scanner.webp"),
          h3: "our_clinic_equipment_product2_h3",
          p: "our_clinic_equipment_product2_p"
        },
        {
          image: require("../../assets/images/OurClinic/equipment/computerGuidedimplantology.webp"),
          h3: "our_clinic_equipment_product3_h3",
          p: "our_clinic_equipment_product3_p"
        },
        {
          image: require("../../assets/images/OurClinic/equipment/piezotom.webp"),
          h3: "our_clinic_equipment_product4_h3",
          p: "our_clinic_equipment_product4_p"
        },
        {
          image: require("../../assets/images/OurClinic/equipment/panoramic-machine.webp"),
          h3: "our_clinic_equipment_product5_h3",
          p: "our_clinic_equipment_product5_p",
          
        }
      ]
    };
  },
  mounted() {
        window.addEventListener('scroll', this.handleScroll);
        this.handleScroll(); // Call handleScroll once on mount to initialize elements in viewport
    },
    destroyed() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            let elements = document.querySelectorAll('.glide-in');
            elements.forEach(element => {
                if (this.isElementInViewport(element)) {
                    element.classList.add('glide-in-visible');
                }
            });
        },
        isElementInViewport(el) {
            var rect = el.getBoundingClientRect();
            return (
                rect.top < window.innerHeight * 0.9 &&  // Adjust this value to make the element visible earlier
                rect.bottom > window.innerHeight * 0.1  // Adjust this value as needed
            );
        },
    }
};
</script>