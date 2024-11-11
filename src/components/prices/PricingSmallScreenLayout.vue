<template>
    <div class="pricing-area pt-100 pb-70">
        <div class="container">
            <div class="section-title">
                <span class="sub-title">
                    <i class="flaticon-hashtag-symbol"></i>
                    {{ $t('prices_span') }}
                </span>
                <h2>{{ $t('prices_h2') }}</h2>
            </div>

            <div class="accordion">
                <div 
                    class="accordion-item"
                    v-for="(tab, index) in tabs"
                    :key="tab.id"
                >
                    <button 
                        class="accordion-header-prices"
                        @click="toggleAccordion(index)"
                        :class="{ active: tab.isOpen }"
                    >
                        <span style="color: black">{{tab.name}}</span> 
                        <span class="plus-icon-container">
                            <i class='bx bx-plus'></i>
                        </span>     
                    </button>
                    <div class="accordion-content" v-if="tab.isOpen">
                        <div class="sub-accordion">
                            <div 
                                class="accordion-item"
                                v-for="(item, itemIndex) in tab.items"
                                :key="itemIndex"
                            >
                                <button 
                                    class="accordion-header-prices"
                                    @click="toggleSubAccordion(index, itemIndex)"
                                    :class="{ active: item.isOpen }"
                                >
                                    <span>{{ item.title }}</span>
                                    <span class="plus-icon-container">
                                        <i class='bx bx-plus'></i>
                                    </span>
                                </button>
                                <div class="accordion-content" v-if="item.isOpen">
                                    <div 
                                        class="single-pricing-table"
                                        v-for="(subItem, subIndex) in item.subItems"
                                        :key="subIndex"
                                    >
                                        <div class="pricing-header">
                                            <h3>{{ subItem.title }}</h3>
                                        </div>
                                        <div class="price">${{ subItem.price }}</div>
                                        <ul class="pricing-features">
                                            <li
                                                v-for="feature in subItem.pricingFeatures"
                                                :key="feature.id"
                                                :class="feature.class"
                                            >
                                                {{ feature.feature }}
                                            </li>
                                        </ul>
                                        <div class="pricing-btn">
                                            <router-link :to="subItem.btnLink" class="default-btn">
                                                Buy Now
                                            </router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PricingSmallScreenLayout',
    data () {
        return {
            tabs: [
                {
                    id: 1,
                    name: 'All on 4',
                    isOpen: false,
                    items: [
                        {
                            title: this.$t('prices_packages_standard'),
                            price: '59',
                            btnLink: '/contact-us',
                            isOpen: false,
                            subItems: [
                                {
                                    title: this.$t('prices_packages_standard'),
                                    price: '30',
                                    btnLink: '/contact-us',
                                    pricingFeatures: [
                                        { id: 1, feature: '4 Dental Implants (LABEL)', class: '' },
                                        { id: 2, feature: '12 Temporary Teeth (Fixed Denture)', class: '' },
                                        { id: 3, feature: '12 Permanent Teeth', class: '' },
                                        { id: 4, feature: '3D Dental tomography &Panoramic X-Ray', class: '' },
                                        { id: 5, feature: 'Anesthetics', class: '' },
                                        { id: 6, feature: 'Anti-biotics, Pain killers, mouth wash etc.', class: '' },
                                        { id: 7, feature: 'Laboratory Fees', class: '' },
                                        { id: 8, feature: 'The Dentist’s Time & Work', class: '' },
                                        { id: 9, feature: 'Requires 2 visits, each visit takes 6-7 days within 3 to 6 months’ time scale.', class: '' }//class: 'color-gray',
                                    ]
                                },
                                // Add more subItems as needed
                            ]
                        },
                        {
                           title: this.$t('prices_packages_premium'),
                            price: '59',
                            btnLink: '/contact-us',
                            isOpen: false,
                            subItems: [
                                {
                                   title: this.$t('prices_packages_premium'),
                                    price: '30',
                                    btnLink: '/contact-us',
                                    pricingFeatures: [
                                        { id: 1, feature: '4 Dental Implants (LABEL)', class: '' },
                                        { id: 2, feature: '12 Temporary Teeth (Fixed Denture)', class: '' },
                                        { id: 3, feature: '12 Permanent Teeth', class: '' },
                                        { id: 4, feature: '3D Dental tomography &Panoramic X-Ray', class: '' },
                                        { id: 5, feature: 'Anesthetics', class: '' },
                                        { id: 6, feature: 'Anti-biotics, Pain killers, mouth wash etc.', class: '' },
                                        { id: 7, feature: 'Laboratory Fees', class: '' },
                                        { id: 8, feature: 'The Dentist’s Time & Work', class: '' },
                                        { id: 9, feature: 'Requires 2 visits, each visit takes 6-7 days within 3 to 6 months’ time scale.', class: '' }//class: 'color-gray',
                                    ]
                                },
                                // Add more subItems as needed
                            ]
                        },
                        {
                            title: this.$t('prices_packages_gold'),
                            price: '59',
                            btnLink: '/contact-us',
                            isOpen: false,
                            subItems: [
                                {
                                    title: this.$t('prices_packages_gold'),
                                    price: '30',
                                    btnLink: '/contact-us',
                                    pricingFeatures: [
                                        { id: 1, feature: '4 Dental Implants (LABEL)', class: '' },
                                        { id: 2, feature: '12 Temporary Teeth (Fixed Denture)', class: '' },
                                        { id: 3, feature: '12 Permanent Teeth', class: '' },
                                        { id: 4, feature: '3D Dental tomography &Panoramic X-Ray', class: '' },
                                        { id: 5, feature: 'Anesthetics', class: '' },
                                        { id: 6, feature: 'Anti-biotics, Pain killers, mouth wash etc.', class: '' },
                                        { id: 7, feature: 'Laboratory Fees', class: '' },
                                        { id: 8, feature: 'The Dentist’s Time & Work', class: '' },
                                        { id: 9, feature: 'Requires 2 visits, each visit takes 6-7 days within 3 to 6 months’ time scale.', class: '' }//class: 'color-gray',
                                    ]
                                },
                                // Add more subItems as needed
                            ]
                        },
                        // Add more items as needed
                    ]
                },
                {
                    id: 2,
                    name: 'All on 6',
                    isOpen: false,
                    items: [
                        {
                            title: this.$t('prices_packages_standard'),
                            price: '59',
                            btnLink: '/contact-us',
                            isOpen: false,
                            subItems: [
                                {
                                    title: this.$t('prices_packages_standard'),
                                    price: '30',
                                    btnLink: '/contact-us',
                                    pricingFeatures: [
                                        { id: 1, feature: '6 Dental Implants (LABEL)', class: '' },
                                        { id: 2, feature: '12 Temporary Teeth (Fixed Denture)', class: '' },
                                        { id: 3, feature: '12 Permanent Teeth', class: '' },
                                        { id: 4, feature: '3D Dental tomography &Panoramic X-Ray', class: '' },
                                        { id: 5, feature: 'Anesthetics', class: '' },
                                        { id: 6, feature: 'Anti-biotics, Pain killers, mouth wash etc.', class: '' },
                                        { id: 7, feature: 'Laboratory Fees', class: '' },
                                        { id: 8, feature: 'The Dentist’s Time & Work', class: '' },
                                        { id: 9, feature: 'Requires 2 visits, each visit takes 6-7 days within 3 to 6 months’ time scale.', class: '' }//class: 'color-gray',
                                    ]
                                },
                                // Add more subItems as needed
                            ]
                        },
                        {
                           title: this.$t('prices_packages_premium'),
                            price: '59',
                            btnLink: '/contact-us',
                            isOpen: false,
                            subItems: [
                                {
                                   title: this.$t('prices_packages_premium'),
                                    price: '30',
                                    btnLink: '/contact-us',
                                    pricingFeatures: [
                                        { id: 1, feature: '6 Dental Implants (LABEL)', class: '' },
                                        { id: 2, feature: '12 Temporary Teeth (Fixed Denture)', class: '' },
                                        { id: 3, feature: '12 Permanent Teeth', class: '' },
                                        { id: 4, feature: '3D Dental tomography &Panoramic X-Ray', class: '' },
                                        { id: 5, feature: 'Anesthetics', class: '' },
                                        { id: 6, feature: 'Anti-biotics, Pain killers, mouth wash etc.', class: '' },
                                        { id: 7, feature: 'Laboratory Fees', class: '' },
                                        { id: 8, feature: 'The Dentist’s Time & Work', class: '' },
                                        { id: 9, feature: 'Requires 2 visits, each visit takes 6-7 days within 3 to 6 months’ time scale.', class: '' }//class: 'color-gray',
                                    ]
                                },
                                // Add more subItems as needed
                            ]
                        },
                        {
                            title: this.$t('prices_packages_gold'),
                            price: '59',
                            btnLink: '/contact-us',
                            isOpen: false,
                            subItems: [
                                {
                                    title: this.$t('prices_packages_gold'),
                                    price: '30',
                                    btnLink: '/contact-us',
                                    pricingFeatures: [
                                        { id: 1, feature: '6 Dental Implants (LABEL)', class: '' },
                                        { id: 2, feature: '12 Temporary Teeth (Fixed Denture)', class: '' },
                                        { id: 3, feature: '12 Permanent Teeth', class: '' },
                                        { id: 4, feature: '3D Dental tomography &Panoramic X-Ray', class: '' },
                                        { id: 5, feature: 'Anesthetics', class: '' },
                                        { id: 6, feature: 'Anti-biotics, Pain killers, mouth wash etc.', class: '' },
                                        { id: 7, feature: 'Laboratory Fees', class: '' },
                                        { id: 8, feature: 'The Dentist’s Time & Work', class: '' },
                                        { id: 9, feature: 'Requires 2 visits, each visit takes 6-7 days within 3 to 6 months’ time scale.', class: '' }//class: 'color-gray',
                                    ]
                                },
                                // Add more subItems as needed
                            ]
                        },
                        // Add more items as needed
                    ]
                },
                {
                    id: 3,
                    name: this.$t('prices_implants'),
                    isOpen: false,
                    items: [
                        {
                            title: this.$t('prices_packages_standard'),
                            price: '59',
                            btnLink: '/contact-us',
                            isOpen: false,
                            subItems: [
                                {
                                    title: this.$t('prices_packages_standard'),
                                    price: '30',
                                    btnLink: '/contact-us',
                                    pricingFeatures: [
                                        { id: 1, feature: '1 or more impplants (LABEL)', class: '' },
                                        { id: 2, feature: '12 Temporary Teeth (Fixed Denture)', class: '' },
                                        { id: 3, feature: '12 Permanent Teeth', class: '' },
                                        { id: 4, feature: '3D Dental tomography &Panoramic X-Ray', class: '' },
                                        { id: 5, feature: 'Anesthetics', class: '' },
                                        { id: 6, feature: 'Anti-biotics, Pain killers, mouth wash etc.', class: '' },
                                        { id: 7, feature: 'Laboratory Fees', class: '' },
                                        { id: 8, feature: 'The Dentist’s Time & Work', class: '' },
                                        { id: 9, feature: 'Requires 2 visits, each visit takes 6-7 days within 3 to 6 months’ time scale.', class: '' }//class: 'color-gray',
                                    ]
                                },
                                // Add more subItems as needed
                            ]
                        },
                        {
                           title: this.$t('prices_packages_premium'),
                            price: '59',
                            btnLink: '/contact-us',
                            isOpen: false,
                            subItems: [
                                {
                                   title: this.$t('prices_packages_premium'),
                                    price: '30',
                                    btnLink: '/contact-us',
                                    pricingFeatures: [
                                        { id: 1, feature: '1 or more impplants (LABEL)', class: '' },
                                        { id: 2, feature: '12 Temporary Teeth (Fixed Denture)', class: '' },
                                        { id: 3, feature: '12 Permanent Teeth', class: '' },
                                        { id: 4, feature: '3D Dental tomography &Panoramic X-Ray', class: '' },
                                        { id: 5, feature: 'Anesthetics', class: '' },
                                        { id: 6, feature: 'Anti-biotics, Pain killers, mouth wash etc.', class: '' },
                                        { id: 7, feature: 'Laboratory Fees', class: '' },
                                        { id: 8, feature: 'The Dentist’s Time & Work', class: '' },
                                        { id: 9, feature: 'Requires 2 visits, each visit takes 6-7 days within 3 to 6 months’ time scale.', class: '' }//class: 'color-gray',
                                    ]
                                },
                                // Add more subItems as needed
                            ]
                        },
                        {
                            title: this.$t('prices_packages_gold'),
                            price: '59',
                            btnLink: '/contact-us',
                            isOpen: false,
                            subItems: [
                                {
                                    title: this.$t('prices_packages_gold'),
                                    price: '30',
                                    btnLink: '/contact-us',
                                    pricingFeatures: [
                                        { id: 1, feature: '1 or more impplants (LABEL)', class: '' },
                                        { id: 2, feature: '12 Temporary Teeth (Fixed Denture)', class: '' },
                                        { id: 3, feature: '12 Permanent Teeth', class: '' },
                                        { id: 4, feature: '3D Dental tomography &Panoramic X-Ray', class: '' },
                                        { id: 5, feature: 'Anesthetics', class: '' },
                                        { id: 6, feature: 'Anti-biotics, Pain killers, mouth wash etc.', class: '' },
                                        { id: 7, feature: 'Laboratory Fees', class: '' },
                                        { id: 8, feature: 'The Dentist’s Time & Work', class: '' },
                                        { id: 9, feature: 'Requires 2 visits, each visit takes 6-7 days within 3 to 6 months’ time scale.', class: '' }//class: 'color-gray',
                                    ]
                                },
                                // Add more subItems as needed
                            ]
                        },
                        // Add more items as needed
                    ]
                },
                {
                    id: 4,
                    name: this.$t('prices_rehab'),
                    isOpen: false,
                    items: [
                        {
                            title: this.$t('prices_packages_standard'),
                            price: '59',
                            btnLink: '/contact-us',
                            isOpen: false,
                            subItems: [
                                {
                                    title: this.$t('prices_packages_standard'),
                                    price: '30',
                                    btnLink: '/contact-us',
                                    pricingFeatures: [
                                        { id: 1, feature: '1 or more impplants (LABEL)', class: '' },
                                        { id: 2, feature: '12 Temporary Teeth (Fixed Denture)', class: '' },
                                        { id: 3, feature: '12 Permanent Teeth', class: '' },
                                        { id: 4, feature: '3D Dental tomography &Panoramic X-Ray', class: '' },
                                        { id: 5, feature: 'Anesthetics', class: '' },
                                        { id: 6, feature: 'Anti-biotics, Pain killers, mouth wash etc.', class: '' },
                                        { id: 7, feature: 'Laboratory Fees', class: '' },
                                        { id: 8, feature: 'The Dentist’s Time & Work', class: '' },
                                        { id: 9, feature: 'Requires 2 visits, each visit takes 6-7 days within 3 to 6 months’ time scale.', class: '' }//class: 'color-gray',
                                    ]
                                },
                                // Add more subItems as needed
                            ]
                        },
                        {
                           title: this.$t('prices_packages_premium'),
                            price: '59',
                            btnLink: '/contact-us',
                            isOpen: false,
                            subItems: [
                                {
                                   title: this.$t('prices_packages_premium'),
                                    price: '30',
                                    btnLink: '/contact-us',
                                    pricingFeatures: [
                                        { id: 1, feature: '1 or more impplants (LABEL)', class: '' },
                                        { id: 2, feature: '12 Temporary Teeth (Fixed Denture)', class: '' },
                                        { id: 3, feature: '12 Permanent Teeth', class: '' },
                                        { id: 4, feature: '3D Dental tomography &Panoramic X-Ray', class: '' },
                                        { id: 5, feature: 'Anesthetics', class: '' },
                                        { id: 6, feature: 'Anti-biotics, Pain killers, mouth wash etc.', class: '' },
                                        { id: 7, feature: 'Laboratory Fees', class: '' },
                                        { id: 8, feature: 'The Dentist’s Time & Work', class: '' },
                                        { id: 9, feature: 'Requires 2 visits, each visit takes 6-7 days within 3 to 6 months’ time scale.', class: '' }//class: 'color-gray',
                                    ]
                                },
                                // Add more subItems as needed
                            ]
                        },
                        {
                            title: this.$t('prices_packages_gold'),
                            price: '59',
                            btnLink: '/contact-us',
                            isOpen: false,
                            subItems: [
                                {
                                    title: this.$t('prices_packages_gold'),
                                    price: '30',
                                    btnLink: '/contact-us',
                                    pricingFeatures: [
                                        { id: 1, feature: '1 or more impplants (LABEL)', class: '' },
                                        { id: 2, feature: '12 Temporary Teeth (Fixed Denture)', class: '' },
                                        { id: 3, feature: '12 Permanent Teeth', class: '' },
                                        { id: 4, feature: '3D Dental tomography &Panoramic X-Ray', class: '' },
                                        { id: 5, feature: 'Anesthetics', class: '' },
                                        { id: 6, feature: 'Anti-biotics, Pain killers, mouth wash etc.', class: '' },
                                        { id: 7, feature: 'Laboratory Fees', class: '' },
                                        { id: 8, feature: 'The Dentist’s Time & Work', class: '' },
                                        { id: 9, feature: 'Requires 2 visits, each visit takes 6-7 days within 3 to 6 months’ time scale.', class: '' }//class: 'color-gray',
                                    ]
                                },
                                // Add more subItems as needed
                            ]
                        },
                        // Add more items as needed
                    ]
                },
                {
                    id: 5,
                    name: this.$t('prices_zcrowns'),
                    isOpen: false,
                    items: [
                        {
                            title: this.$t('prices_packages_standard'),
                            price: '59',
                            btnLink: '/contact-us',
                            isOpen: false,
                            subItems: [
                                {
                                    title: this.$t('prices_packages_standard'),
                                    price: '30',
                                    btnLink: '/contact-us',
                                    pricingFeatures: [
                                        { id: 1, feature: '1 or more impplants (LABEL)', class: '' },
                                        { id: 2, feature: '12 Temporary Teeth (Fixed Denture)', class: '' },
                                        { id: 3, feature: '12 Permanent Teeth', class: '' },
                                        { id: 4, feature: '3D Dental tomography &Panoramic X-Ray', class: '' },
                                        { id: 5, feature: 'Anesthetics', class: '' },
                                        { id: 6, feature: 'Anti-biotics, Pain killers, mouth wash etc.', class: '' },
                                        { id: 7, feature: 'Laboratory Fees', class: '' },
                                        { id: 8, feature: 'The Dentist’s Time & Work', class: '' },
                                        { id: 9, feature: 'Requires 2 visits, each visit takes 6-7 days within 3 to 6 months’ time scale.', class: '' }//class: 'color-gray',
                                    ]
                                },
                                // Add more subItems as needed
                            ]
                        },
                        {
                           title: this.$t('prices_packages_premium'),
                            price: '59',
                            btnLink: '/contact-us',
                            isOpen: false,
                            subItems: [
                                {
                                   title: this.$t('prices_packages_premium'),
                                    price: '30',
                                    btnLink: '/contact-us',
                                    pricingFeatures: [
                                        { id: 1, feature: '1 or more impplants (LABEL)', class: '' },
                                        { id: 2, feature: '12 Temporary Teeth (Fixed Denture)', class: '' },
                                        { id: 3, feature: '12 Permanent Teeth', class: '' },
                                        { id: 4, feature: '3D Dental tomography &Panoramic X-Ray', class: '' },
                                        { id: 5, feature: 'Anesthetics', class: '' },
                                        { id: 6, feature: 'Anti-biotics, Pain killers, mouth wash etc.', class: '' },
                                        { id: 7, feature: 'Laboratory Fees', class: '' },
                                        { id: 8, feature: 'The Dentist’s Time & Work', class: '' },
                                        { id: 9, feature: 'Requires 2 visits, each visit takes 6-7 days within 3 to 6 months’ time scale.', class: '' }//class: 'color-gray',
                                    ]
                                },
                                // Add more subItems as needed
                            ]
                        },
                        {
                            title: this.$t('prices_packages_gold'),
                            price: '59',
                            btnLink: '/contact-us',
                            isOpen: false,
                            subItems: [
                                {
                                    title: this.$t('prices_packages_gold'),
                                    price: '30',
                                    btnLink: '/contact-us',
                                    pricingFeatures: [
                                        { id: 1, feature: '1 or more impplants (LABEL)', class: '' },
                                        { id: 2, feature: '12 Temporary Teeth (Fixed Denture)', class: '' },
                                        { id: 3, feature: '12 Permanent Teeth', class: '' },
                                        { id: 4, feature: '3D Dental tomography &Panoramic X-Ray', class: '' },
                                        { id: 5, feature: 'Anesthetics', class: '' },
                                        { id: 6, feature: 'Anti-biotics, Pain killers, mouth wash etc.', class: '' },
                                        { id: 7, feature: 'Laboratory Fees', class: '' },
                                        { id: 8, feature: 'The Dentist’s Time & Work', class: '' },
                                        { id: 9, feature: 'Requires 2 visits, each visit takes 6-7 days within 3 to 6 months’ time scale.', class: '' }//class: 'color-gray',
                                    ]
                                },
                                // Add more subItems as needed
                            ]
                        },
                        // Add more items as needed
                    ]
                },
                {
                    id: 6,
                    name: this.$t('prices_zbridges'),
                    isOpen: false,
                    items: [
                        {
                            title: this.$t('prices_packages_standard'),
                            price: '59',
                            btnLink: '/contact-us',
                            isOpen: false,
                            subItems: [
                                {
                                    title: this.$t('prices_packages_standard'),
                                    price: '30',
                                    btnLink: '/contact-us',
                                    pricingFeatures: [
                                        { id: 1, feature: '1 or more impplants (LABEL)', class: '' },
                                        { id: 2, feature: '12 Temporary Teeth (Fixed Denture)', class: '' },
                                        { id: 3, feature: '12 Permanent Teeth', class: '' },
                                        { id: 4, feature: '3D Dental tomography &Panoramic X-Ray', class: '' },
                                        { id: 5, feature: 'Anesthetics', class: '' },
                                        { id: 6, feature: 'Anti-biotics, Pain killers, mouth wash etc.', class: '' },
                                        { id: 7, feature: 'Laboratory Fees', class: '' },
                                        { id: 8, feature: 'The Dentist’s Time & Work', class: '' },
                                        { id: 9, feature: 'Requires 2 visits, each visit takes 6-7 days within 3 to 6 months’ time scale.', class: '' }//class: 'color-gray',
                                    ]
                                },
                                // Add more subItems as needed
                            ]
                        },
                        {
                           title: this.$t('prices_packages_premium'),
                            price: '59',
                            btnLink: '/contact-us',
                            isOpen: false,
                            subItems: [
                                {
                                   title: this.$t('prices_packages_premium'),
                                    price: '30',
                                    btnLink: '/contact-us',
                                    pricingFeatures: [
                                        { id: 1, feature: '1 or more impplants (LABEL)', class: '' },
                                        { id: 2, feature: '12 Temporary Teeth (Fixed Denture)', class: '' },
                                        { id: 3, feature: '12 Permanent Teeth', class: '' },
                                        { id: 4, feature: '3D Dental tomography &Panoramic X-Ray', class: '' },
                                        { id: 5, feature: 'Anesthetics', class: '' },
                                        { id: 6, feature: 'Anti-biotics, Pain killers, mouth wash etc.', class: '' },
                                        { id: 7, feature: 'Laboratory Fees', class: '' },
                                        { id: 8, feature: 'The Dentist’s Time & Work', class: '' },
                                        { id: 9, feature: 'Requires 2 visits, each visit takes 6-7 days within 3 to 6 months’ time scale.', class: '' }//class: 'color-gray',
                                    ]
                                },
                                // Add more subItems as needed
                            ]
                        },
                        {
                            title: this.$t('prices_packages_gold'),
                            price: '59',
                            btnLink: '/contact-us',
                            isOpen: false,
                            subItems: [
                                {
                                    title: this.$t('prices_packages_gold'),
                                    price: '30',
                                    btnLink: '/contact-us',
                                    pricingFeatures: [
                                        { id: 1, feature: '1 or more impplants (LABEL)', class: '' },
                                        { id: 2, feature: '12 Temporary Teeth (Fixed Denture)', class: '' },
                                        { id: 3, feature: '12 Permanent Teeth', class: '' },
                                        { id: 4, feature: '3D Dental tomography &Panoramic X-Ray', class: '' },
                                        { id: 5, feature: 'Anesthetics', class: '' },
                                        { id: 6, feature: 'Anti-biotics, Pain killers, mouth wash etc.', class: '' },
                                        { id: 7, feature: 'Laboratory Fees', class: '' },
                                        { id: 8, feature: 'The Dentist’s Time & Work', class: '' },
                                        { id: 9, feature: 'Requires 2 visits, each visit takes 6-7 days within 3 to 6 months’ time scale.', class: '' }//class: 'color-gray',
                                    ]
                                },
                                // Add more subItems as needed
                            ]
                        },
                        // Add more items as needed
                    ]
                },
                {
                    id: 7,
                    name: this.$t('prices_veneers'),
                    isOpen: false,
                    items: [
                        {
                            title: this.$t('prices_packages_standard'),
                            price: '59',
                            btnLink: '/contact-us',
                            isOpen: false,
                            subItems: [
                                {
                                    title: this.$t('prices_packages_standard'),
                                    price: '30',
                                    btnLink: '/contact-us',
                                    pricingFeatures: [
                                        { id: 1, feature: '1 or more impplants (LABEL)', class: '' },
                                        { id: 2, feature: '12 Temporary Teeth (Fixed Denture)', class: '' },
                                        { id: 3, feature: '12 Permanent Teeth', class: '' },
                                        { id: 4, feature: '3D Dental tomography &Panoramic X-Ray', class: '' },
                                        { id: 5, feature: 'Anesthetics', class: '' },
                                        { id: 6, feature: 'Anti-biotics, Pain killers, mouth wash etc.', class: '' },
                                        { id: 7, feature: 'Laboratory Fees', class: '' },
                                        { id: 8, feature: 'The Dentist’s Time & Work', class: '' },
                                        { id: 9, feature: 'Requires 2 visits, each visit takes 6-7 days within 3 to 6 months’ time scale.', class: '' }//class: 'color-gray',
                                    ]
                                },
                                // Add more subItems as needed
                            ]
                        },
                        {
                           title: this.$t('prices_packages_premium'),
                            price: '59',
                            btnLink: '/contact-us',
                            isOpen: false,
                            subItems: [
                                {
                                   title: this.$t('prices_packages_premium'),
                                    price: '30',
                                    btnLink: '/contact-us',
                                    pricingFeatures: [
                                        { id: 1, feature: '1 or more impplants (LABEL)', class: '' },
                                        { id: 2, feature: '12 Temporary Teeth (Fixed Denture)', class: '' },
                                        { id: 3, feature: '12 Permanent Teeth', class: '' },
                                        { id: 4, feature: '3D Dental tomography &Panoramic X-Ray', class: '' },
                                        { id: 5, feature: 'Anesthetics', class: '' },
                                        { id: 6, feature: 'Anti-biotics, Pain killers, mouth wash etc.', class: '' },
                                        { id: 7, feature: 'Laboratory Fees', class: '' },
                                        { id: 8, feature: 'The Dentist’s Time & Work', class: '' },
                                        { id: 9, feature: 'Requires 2 visits, each visit takes 6-7 days within 3 to 6 months’ time scale.', class: '' }//class: 'color-gray',
                                    ]
                                },
                                // Add more subItems as needed
                            ]
                        },
                        {
                            title: this.$t('prices_packages_gold'),
                            price: '59',
                            btnLink: '/contact-us',
                            isOpen: false,
                            subItems: [
                                {
                                    title: this.$t('prices_packages_gold'),
                                    price: '30',
                                    btnLink: '/contact-us',
                                    pricingFeatures: [
                                        { id: 1, feature: '1 or more impplants (LABEL)', class: '' },
                                        { id: 2, feature: '12 Temporary Teeth (Fixed Denture)', class: '' },
                                        { id: 3, feature: '12 Permanent Teeth', class: '' },
                                        { id: 4, feature: '3D Dental tomography &Panoramic X-Ray', class: '' },
                                        { id: 5, feature: 'Anesthetics', class: '' },
                                        { id: 6, feature: 'Anti-biotics, Pain killers, mouth wash etc.', class: '' },
                                        { id: 7, feature: 'Laboratory Fees', class: '' },
                                        { id: 8, feature: 'The Dentist’s Time & Work', class: '' },
                                        { id: 9, feature: 'Requires 2 visits, each visit takes 6-7 days within 3 to 6 months’ time scale.', class: '' }//class: 'color-gray',
                                    ]
                                },
                                // Add more subItems as needed
                            ]
                        },
                        // Add more items as needed
                    ]
                },
                {
                    id: 8,
                    name: this.$t('prices_hsmile'),
                    isOpen: false,
                    items: [
                        {
                            title: this.$t('prices_packages_standard'),
                            price: '59',
                            btnLink: '/contact-us',
                            isOpen: false,
                            subItems: [
                                {
                                    title: this.$t('prices_packages_standard'),
                                    price: '30',
                                    btnLink: '/contact-us',
                                    pricingFeatures: [
                                        { id: 1, feature: '1 or more impplants (LABEL)', class: '' },
                                        { id: 2, feature: '12 Temporary Teeth (Fixed Denture)', class: '' },
                                        { id: 3, feature: '12 Permanent Teeth', class: '' },
                                        { id: 4, feature: '3D Dental tomography &Panoramic X-Ray', class: '' },
                                        { id: 5, feature: 'Anesthetics', class: '' },
                                        { id: 6, feature: 'Anti-biotics, Pain killers, mouth wash etc.', class: '' },
                                        { id: 7, feature: 'Laboratory Fees', class: '' },
                                        { id: 8, feature: 'The Dentist’s Time & Work', class: '' },
                                        { id: 9, feature: 'Requires 2 visits, each visit takes 6-7 days within 3 to 6 months’ time scale.', class: '' }//class: 'color-gray',
                                    ]
                                },
                                // Add more subItems as needed
                            ]
                        },
                        {
                           title: this.$t('prices_packages_premium'),
                            price: '59',
                            btnLink: '/contact-us',
                            isOpen: false,
                            subItems: [
                                {
                                   title: this.$t('prices_packages_premium'),
                                    price: '30',
                                    btnLink: '/contact-us',
                                    pricingFeatures: [
                                        { id: 1, feature: '1 or more impplants (LABEL)', class: '' },
                                        { id: 2, feature: '12 Temporary Teeth (Fixed Denture)', class: '' },
                                        { id: 3, feature: '12 Permanent Teeth', class: '' },
                                        { id: 4, feature: '3D Dental tomography &Panoramic X-Ray', class: '' },
                                        { id: 5, feature: 'Anesthetics', class: '' },
                                        { id: 6, feature: 'Anti-biotics, Pain killers, mouth wash etc.', class: '' },
                                        { id: 7, feature: 'Laboratory Fees', class: '' },
                                        { id: 8, feature: 'The Dentist’s Time & Work', class: '' },
                                        { id: 9, feature: 'Requires 2 visits, each visit takes 6-7 days within 3 to 6 months’ time scale.', class: '' }//class: 'color-gray',
                                    ]
                                },
                                // Add more subItems as needed
                            ]
                        },
                        {
                            title: this.$t('prices_packages_gold'),
                            price: '59',
                            btnLink: '/contact-us',
                            isOpen: false,
                            subItems: [
                                {
                                    title: this.$t('prices_packages_gold'),
                                    price: '30',
                                    btnLink: '/contact-us',
                                    pricingFeatures: [
                                        { id: 1, feature: '1 or more impplants (LABEL)', class: '' },
                                        { id: 2, feature: '12 Temporary Teeth (Fixed Denture)', class: '' },
                                        { id: 3, feature: '12 Permanent Teeth', class: '' },
                                        { id: 4, feature: '3D Dental tomography &Panoramic X-Ray', class: '' },
                                        { id: 5, feature: 'Anesthetics', class: '' },
                                        { id: 6, feature: 'Anti-biotics, Pain killers, mouth wash etc.', class: '' },
                                        { id: 7, feature: 'Laboratory Fees', class: '' },
                                        { id: 8, feature: 'The Dentist’s Time & Work', class: '' },
                                        { id: 9, feature: 'Requires 2 visits, each visit takes 6-7 days within 3 to 6 months’ time scale.', class: '' }//class: 'color-gray',
                                    ]
                                },
                                // Add more subItems as needed
                            ]
                        },
                        // Add more items as needed
                    ]
                },
                {
                    id: 9,
                    name: this.$t('prices_whitening'),
                    isOpen: false,
                    items: [
                        {
                            title: this.$t('prices_packages_standard'),
                            price: '59',
                            btnLink: '/contact-us',
                            isOpen: false,
                            subItems: [
                                {
                                    title: this.$t('prices_packages_standard'),
                                    price: '30',
                                    btnLink: '/contact-us',
                                    pricingFeatures: [
                                        { id: 1, feature: '1 or more impplants (LABEL)', class: '' },
                                        { id: 2, feature: '12 Temporary Teeth (Fixed Denture)', class: '' },
                                        { id: 3, feature: '12 Permanent Teeth', class: '' },
                                        { id: 4, feature: '3D Dental tomography &Panoramic X-Ray', class: '' },
                                        { id: 5, feature: 'Anesthetics', class: '' },
                                        { id: 6, feature: 'Anti-biotics, Pain killers, mouth wash etc.', class: '' },
                                        { id: 7, feature: 'Laboratory Fees', class: '' },
                                        { id: 8, feature: 'The Dentist’s Time & Work', class: '' },
                                        { id: 9, feature: 'Requires 2 visits, each visit takes 6-7 days within 3 to 6 months’ time scale.', class: '' }//class: 'color-gray',
                                    ]
                                },
                                // Add more subItems as needed
                            ]
                        },
                        {
                           title: this.$t('prices_packages_premium'),
                            price: '59',
                            btnLink: '/contact-us',
                            isOpen: false,
                            subItems: [
                                {
                                   title: this.$t('prices_packages_premium'),
                                    price: '30',
                                    btnLink: '/contact-us',
                                    pricingFeatures: [
                                        { id: 1, feature: '1 or more impplants (LABEL)', class: '' },
                                        { id: 2, feature: '12 Temporary Teeth (Fixed Denture)', class: '' },
                                        { id: 3, feature: '12 Permanent Teeth', class: '' },
                                        { id: 4, feature: '3D Dental tomography &Panoramic X-Ray', class: '' },
                                        { id: 5, feature: 'Anesthetics', class: '' },
                                        { id: 6, feature: 'Anti-biotics, Pain killers, mouth wash etc.', class: '' },
                                        { id: 7, feature: 'Laboratory Fees', class: '' },
                                        { id: 8, feature: 'The Dentist’s Time & Work', class: '' },
                                        { id: 9, feature: 'Requires 2 visits, each visit takes 6-7 days within 3 to 6 months’ time scale.', class: '' }//class: 'color-gray',
                                    ]
                                },
                                // Add more subItems as needed
                            ]
                        },
                        {
                            title: this.$t('prices_packages_gold'),
                            price: '59',
                            btnLink: '/contact-us',
                            isOpen: false,
                            subItems: [
                                {
                                    title: this.$t('prices_packages_gold'),
                                    price: '30',
                                    btnLink: '/contact-us',
                                    pricingFeatures: [
                                        { id: 1, feature: '1 or more impplants (LABEL)', class: '' },
                                        { id: 2, feature: '12 Temporary Teeth (Fixed Denture)', class: '' },
                                        { id: 3, feature: '12 Permanent Teeth', class: '' },
                                        { id: 4, feature: '3D Dental tomography &Panoramic X-Ray', class: '' },
                                        { id: 5, feature: 'Anesthetics', class: '' },
                                        { id: 6, feature: 'Anti-biotics, Pain killers, mouth wash etc.', class: '' },
                                        { id: 7, feature: 'Laboratory Fees', class: '' },
                                        { id: 8, feature: 'The Dentist’s Time & Work', class: '' },
                                        { id: 9, feature: 'Requires 2 visits, each visit takes 6-7 days within 3 to 6 months’ time scale.', class: '' }//class: 'color-gray',
                                    ]
                                },
                                // Add more subItems as needed
                            ]
                        },
                        // Add more items as needed
                    ]
                },
                
            ]
        }
    },
    methods: {
        toggleAccordion(index) {
            this.tabs.forEach((tab, tabIndex) => {
                if (index === tabIndex) {
                    tab.isOpen = !tab.isOpen;
                } else {
                    tab.isOpen = false;
                }
            });
        },
        toggleSubAccordion(tabIndex, itemIndex) {
            this.tabs[tabIndex].items.forEach((item, index) => {
                if (itemIndex === index) {
                    item.isOpen = !item.isOpen;
                } else {
                    item.isOpen = false;
                }
            });
        }
    }
}
</script>