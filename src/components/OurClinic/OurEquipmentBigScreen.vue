<template>
    <div class="container" ref="container">
        <div class="row">
            <div class="clinic-text" style="padding:100px 5px;">
                <h2>{{ $t('our_clinic_equipment_h2') }} </h2>
                <p>
                    {{ $t('our_clinic_equipment_p') }}
                </p>
            </div>

            <div class="services-details-area ptb-80">
                <h3><u>{{ $t('our_clinic_equipment_title') }}</u></h3>

                <div class="container">
                    <div
                        v-for="(item, index) in equipment"
                        :key="index"
                        class="row align-items-center"
                    >
                        <div v-if="index % 2 === 0" class="col-lg-6 services-details-image">
                            <img style="width: 568px; height: 312px;" :src="item.image" :alt="item.alt">
                        </div>
                        <div class="col-lg-6 services-details">
                            <div class="services-details-desc">
                                <h3>{{ $t(item.title) }}</h3>
                                <p class="glide-in">
                                    <span v-html="$t(item.description)"></span>
                                    <p v-if="item.beforeListDescription">{{ $t(item.beforeListDescription) }}</p>

                                    <ul v-if="item.list">
                                        <li v-for="(listItem, listIndex) in item.list" :key="listIndex">
                                            {{ $t(listItem) }}
                                        </li>
                                    </ul>
                                    <p v-if="item.afterListDescription">{{ $t(item.afterListDescription) }}</p>

                                </p>
                            </div>
                        </div>
                        <div v-if="index % 2 !== 0" class="col-lg-6 services-details-image">
                            <img :src="item.image" :alt="item.alt">
                        </div>
                        <div class="separate" v-if="index < equipment.length - 1"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'OurEquipmentBigScreen',
    data() {
        return {
            equipment: [
                {
                    image: require('../../assets/images/OurClinic/equipment/microspoce.webp'),
                    alt: 'Microscope',
                    title: 'our_clinic_equipment_product1_h3',
                    description: 'our_clinic_equipment_product1_p'
                },
                {
                    image: require('../../assets/images/OurClinic/equipment/itero-scanner.webp'),
                    alt: 'iTero Scanner',
                    title: 'our_clinic_equipment_product2_h3',
                    description: 'our_clinic_equipment_product2_p'
                },
                {
                    image: require('../../assets/images/OurClinic/equipment/computerGuidedimplantology.webp'),
                    alt: 'Computer Guided Implantology',
                    title: 'our_clinic_equipment_product3_h3',
                    description: 'our_clinic_equipment_product3_p'
                },
                {
                    image: require('../../assets/images/OurClinic/equipment/piezotom.webp'),
                    alt: 'Piezotom',
                    title: 'our_clinic_equipment_product4_h3',
                    description: 'our_clinic_equipment_product4_p'
                },
                {
                    image: require('../../assets/images/OurClinic/equipment/panoramic-machine.webp'),
                    alt: 'Panoramic Machine',
                    title: 'our_clinic_equipment_product5_h3',
                    description: 'our_clinic_equipment_product5_p'
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


