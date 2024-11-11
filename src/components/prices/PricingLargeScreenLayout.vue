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
            <div class="pricing-list-tab">
                <div class="tabs">
                    <ul class="tabs__header" style="display: flex; justify-content: center;">
                        <li 
                            class="tabs__header-item" style="padding: 10px;" 
                            v-for="tab in tabs" 
                            v-on:click="selectTab (tab.id)" 
                            v-bind:class="{ 'active': activeTab == tab.id }"
                            :key="tab.id"
                        >
                            {{tab.name}}
                        </li>
                    </ul>
                </div>
                <div class="tabs__container">
                    <div 
                        class="tabs__list"
                        ref='tabsList'
                    >
                        <div 
                            class="tabs__list-tab"
                            v-for="tab in tabs"
                            v-bind:class="{ 'active': activeTab == tab.id }"
                            :key="tab.id"
                        >
                            <div class="row" style="display: flex; align-items: stretch; justify-content: center;">
                                <div 
                                    class="col-lg-3 col-sm-6"
                                    v-for="item in tab.items"
                                    :key="item.id"
                                    style="display: flex;"
                                >
                                    <div class="single-pricing-table" style="width: 100%;">
                                        <div class="pricing-header">
                                            <h3>{{item.title}}</h3>
                                        </div>

                                        <div class="price">${{item.price}}</div>

                                        <ul class="pricing-features">
                                            <li
                                                v-for="features in item.pricingFeatures"
                                                :key="features.id"
                                                :class="features.class"
                                            >
                                                {{features.feature}}
                                            </li>
                                        </ul>

                                        <div class="pricing-btn">
                                            <router-link :to="item.btnLink" class="default-btn">
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
    name: 'PricingLargeScreenLayout',
    data () {
        return {
            activeTab: 1,
            offsetRight: 0,
            tabs: [
                {
                    id: 1,
                    name: 'All on 4',
                    items: [
                        
                        {
                            id: 1,
                            title: this.$t('prices_packages_standard'),
                            price: '59',
                            btnLink: '/contact-us',
                            pricingFeatures: [
                                {
                                    id: 1,
                                    feature: '4 Dental Implants (LABEL)',
                                    class: '',
                                },
                                {
                                    id: 2,
                                    feature: '12 Temporary Teeth (Fixed Denture)',
                                    class: '',
                                },
                                {
                                    id: 3,
                                    feature: '12 Permanent Teeth',
                                    class: '',
                                },
                                {
                                    id: 4,
                                    feature: '3D Dental tomography &Panoramic X-Ray',
                                    class: '',
                                },
                                {
                                    id: 5,
                                    feature: 'Anesthetics',
                                    class: '',
                                },
                                {
                                    id: 6,
                                    feature: 'Anti-biotics, Pain killers, mouth wash etc.',
                                    class: '',
                                },
                                {
                                    id: 7,
                                    feature: 'Laboratory Fees',
                                    class: '',
                                },
                                {
                                    id: 8,
                                    feature: 'The Dentist’s Time & Work',
                                    //class: 'color-gray',
                                    class: '',
                                },
                                {
                                    id: 9,
                                    feature: 'Requires 2 visits, each visit takes 6-7 days within 3 to 6 months’ time scale.',
                                    //class: 'color-gray',
                                    class: '',
                                },
                            ]
                        },
                        {
                            id: 2,
                            title: this.$t('prices_packages_premium'),
                            price: '79',
                            btnLink: '/contact-us',
                            pricingFeatures: [
                            {
                                    id: 1,
                                    feature: '4 Dental Implants (LABEL)',
                                    class: '',
                                },
                                {
                                    id: 2,
                                    feature: '12 Temporary Teeth (Fixed Denture)',
                                    class: '',
                                },
                                {
                                    id: 3,
                                    feature: '12 Permanent Teeth',
                                    class: '',
                                },
                                {
                                    id: 4,
                                    feature: '3D Dental tomography &Panoramic X-Ray',
                                    class: '',
                                },
                                {
                                    id: 5,
                                    feature: 'Anesthetics',
                                    class: '',
                                },
                                {
                                    id: 6,
                                    feature: 'Anti-biotics, Pain killers, mouth wash etc.',
                                    class: '',
                                },
                                {
                                    id: 7,
                                    feature: 'Laboratory Fees',
                                    class: '',
                                },
                                {
                                    id: 8,
                                    feature: 'The Dentist’s Time & Work',
                                    //class: 'color-gray',
                                    class: '',
                                },
                                {
                                    id: 9,
                                    feature: 'Requires 2 visits, each visit takes 6-7 days within 3 to 6 months’ time scale.',
                                    //class: 'color-gray',
                                    class: '',
                                },
                            ]
                        },
                        {
                            id: 3,
                            title: this.$t('prices_packages_gold'),
                            price: '99',
                            btnLink: '/contact-us',
                            pricingFeatures: [
                            {
                                    id: 1,
                                    feature: '4 Dental Implants (LABEL)',
                                    class: '',
                                },
                                {
                                    id: 2,
                                    feature: '12 Temporary Teeth (Fixed Denture)',
                                    class: '',
                                },
                                {
                                    id: 3,
                                    feature: '12 Permanent Teeth',
                                    class: '',
                                },
                                {
                                    id: 4,
                                    feature: '3D Dental tomography &Panoramic X-Ray',
                                    class: '',
                                },
                                {
                                    id: 5,
                                    feature: 'Anesthetics',
                                    class: '',
                                },
                                {
                                    id: 6,
                                    feature: 'Anti-biotics, Pain killers, mouth wash etc.',
                                    class: '',
                                },
                                {
                                    id: 7,
                                    feature: 'Laboratory Fees',
                                    class: '',
                                },
                                {
                                    id: 8,
                                    feature: 'The Dentist’s Time & Work',
                                    //class: 'color-gray',
                                    class: '',
                                },
                                {
                                    id: 9,
                                    feature: 'Requires 2 visits, each visit takes 6-7 days within 3 to 6 months’ time scale.',
                                    //class: 'color-gray',
                                    class: '',
                                },
                            ]
                        },
                    ]
                },
                {
                    id: 2,
                    name: 'All on 6',
                    items: [
                        
                        {
                            id: 1,
                            title: this.$t('prices_packages_standard'),
                            price: '259',
                            btnLink: '/contact-us',
                            pricingFeatures: [
                            {
                                    id: 1,
                                    feature: '6 Dental Implants (LABEL)',
                                    class: '',
                                },
                                {
                                    id: 2,
                                    feature: '12 Temporary Teeth (Fixed Denture)',
                                    class: '',
                                },
                                {
                                    id: 3,
                                    feature: '12 Permanent Teeth',
                                    class: '',
                                },
                                {
                                    id: 4,
                                    feature: '3D Dental tomography &Panoramic X-Ray',
                                    class: '',
                                },
                                {
                                    id: 5,
                                    feature: 'Anesthetics',
                                    class: '',
                                },
                                {
                                    id: 6,
                                    feature: 'Anti-biotics, Pain killers, mouth wash etc.',
                                    class: '',
                                },
                                {
                                    id: 7,
                                    feature: 'Laboratory Fees',
                                    class: '',
                                },
                                {
                                    id: 8,
                                    feature: 'The Dentist’s Time & Work',
                                    //class: 'color-gray',
                                    class: '',
                                },
                                {
                                    id: 9,
                                    feature: 'Requires 2 visits, each visit takes 6-7 days within 3 to 6 months’ time scale.',
                                    //class: 'color-gray',
                                    class: '',
                                },
                            ]
                        },
                        {
                            id: 2,
                            title: this.$t('prices_packages_premium'),
                            price: '279',
                            btnLink: '/contact-us',
                            pricingFeatures: [
                            {
                                    id: 1,
                                    feature: '6 Dental Implants (LABEL)',
                                    class: '',
                                },
                                {
                                    id: 2,
                                    feature: '12 Temporary Teeth (Fixed Denture)',
                                    class: '',
                                },
                                {
                                    id: 3,
                                    feature: '12 Permanent Teeth',
                                    class: '',
                                },
                                {
                                    id: 4,
                                    feature: '3D Dental tomography &Panoramic X-Ray',
                                    class: '',
                                },
                                {
                                    id: 5,
                                    feature: 'Anesthetics',
                                    class: '',
                                },
                                {
                                    id: 6,
                                    feature: 'Anti-biotics, Pain killers, mouth wash etc.',
                                    class: '',
                                },
                                {
                                    id: 7,
                                    feature: 'Laboratory Fees',
                                    class: '',
                                },
                                {
                                    id: 8,
                                    feature: 'The Dentist’s Time & Work',
                                    //class: 'color-gray',
                                    class: '',
                                },
                                {
                                    id: 9,
                                    feature: 'Requires 2 visits, each visit takes 6-7 days within 3 to 6 months’ time scale.',
                                    //class: 'color-gray',
                                    class: '',
                                },
                            ]
                        },
                        {
                            id: 3,
                            title: this.$t('prices_packages_gold'),
                            price: '399',
                            btnLink: '/contact-us',
                            pricingFeatures: [
                            {
                                    id: 1,
                                    feature: '6 Dental Implants (LABEL)',
                                    class: '',
                                },
                                {
                                    id: 2,
                                    feature: '12 Temporary Teeth (Fixed Denture)',
                                    class: '',
                                },
                                {
                                    id: 3,
                                    feature: '12 Permanent Teeth',
                                    class: '',
                                },
                                {
                                    id: 4,
                                    feature: '3D Dental tomography &Panoramic X-Ray',
                                    class: '',
                                },
                                {
                                    id: 5,
                                    feature: 'Anesthetics',
                                    class: '',
                                },
                                {
                                    id: 6,
                                    feature: 'Anti-biotics, Pain killers, mouth wash etc.',
                                    class: '',
                                },
                                {
                                    id: 7,
                                    feature: 'Laboratory Fees',
                                    class: '',
                                },
                                {
                                    id: 8,
                                    feature: 'The Dentist’s Time & Work',
                                    //class: 'color-gray',
                                    class: '',
                                },
                                {
                                    id: 9,
                                    feature: 'Requires 2 visits, each visit takes 6-7 days within 3 to 6 months’ time scale.',
                                    //class: 'color-gray',
                                    class: '',
                                },
                            ]
                        },
                    ]
                },
                {
                    id: 3,
                    name: this.$t('prices_implants'),
                    items: [
                        {
                            id: 1,
                            title: this.$t('prices_packages_basic'),
                            price: '139',
                            btnLink: '/contact-us',
                            pricingFeatures: [
                                {
                                    id: 1,
                                    feature: 'Cancer Services',
                                    class: '',
                                },
                                {
                                    id: 2,
                                    feature: 'Cardiovascular Services',
                                    class: '',
                                },
                                {
                                    id: 3,
                                    feature: 'Weight Management',
                                    class: '',
                                },
                                {
                                    id: 4,
                                    feature: 'Dental Services',
                                    class: '',
                                },
                                {
                                    id: 5,
                                    feature: 'Womens Health',
                                    class: '',
                                },
                                {
                                    id: 6,
                                    feature: 'Emergency Medicine',
                                    class: '',
                                },
                                {
                                    id: 7,
                                    feature: 'Family Medicine',
                                    class: '',
                                },
                                {
                                    id: 8,
                                    feature: 'Gynecologic Oncology',
                                    class: 'color-gray',
                                },
                                {
                                    id: 9,
                                    feature: 'Neurosurgery',
                                    class: 'color-gray',
                                },
                                {
                                    id: 10,
                                    feature: 'Radiation Oncology',
                                    class: 'color-gray',
                                },
                            ]
                        },
                        {
                            id: 2,
                            title: this.$t('prices_packages_standard'),
                            price: '259',
                            btnLink: '/contact-us',
                            pricingFeatures: [
                                {
                                    id: 1,
                                    feature: 'Cancer Services',
                                    class: '',
                                },
                                {
                                    id: 2,
                                    feature: 'Cardiovascular Services',
                                    class: '',
                                },
                                {
                                    id: 3,
                                    feature: 'Weight Management',
                                    class: '',
                                },
                                {
                                    id: 4,
                                    feature: 'Dental Services',
                                    class: '',
                                },
                                {
                                    id: 5,
                                    feature: 'Womens Health',
                                    class: '',
                                },
                                {
                                    id: 6,
                                    feature: 'Emergency Medicine',
                                    class: '',
                                },
                                {
                                    id: 7,
                                    feature: 'Family Medicine',
                                    class: '',
                                },
                                {
                                    id: 8,
                                    feature: 'Gynecologic Oncology',
                                    class: '',
                                },
                                {
                                    id: 9,
                                    feature: 'Neurosurgery',
                                    class: 'color-gray',
                                },
                                {
                                    id: 10,
                                    feature: 'Radiation Oncology',
                                    class: 'color-gray',
                                },
                            ]
                        },
                        {
                            id: 3,
                            title: this.$t('prices_packages_premium'),
                            price: '279',
                            btnLink: '/contact-us',
                            pricingFeatures: [
                                {
                                    id: 1,
                                    feature: 'Cancer Services',
                                    class: '',
                                },
                                {
                                    id: 2,
                                    feature: 'Cardiovascular Services',
                                    class: '',
                                },
                                {
                                    id: 3,
                                    feature: 'Weight Management',
                                    class: '',
                                },
                                {
                                    id: 4,
                                    feature: 'Dental Services',
                                    class: '',
                                },
                                {
                                    id: 5,
                                    feature: 'Womens Health',
                                    class: '',
                                },
                                {
                                    id: 6,
                                    feature: 'Emergency Medicine',
                                    class: '',
                                },
                                {
                                    id: 7,
                                    feature: 'Family Medicine',
                                    class: '',
                                },
                                {
                                    id: 8,
                                    feature: 'Gynecologic Oncology',
                                    class: '',
                                },
                                {
                                    id: 9,
                                    feature: 'Neurosurgery',
                                    class: '',
                                },
                                {
                                    id: 10,
                                    feature: 'Radiation Oncology',
                                    class: 'color-gray',
                                },
                            ]
                        },
                        {
                            id: 4,
                            title: this.$t('prices_packages_gold'),
                            price: '399',
                            btnLink: '/contact-us',
                            pricingFeatures: [
                                {
                                    id: 1,
                                    feature: 'Cancer Services',
                                    class: '',
                                },
                                {
                                    id: 2,
                                    feature: 'Cardiovascular Services',
                                    class: '',
                                },
                                {
                                    id: 3,
                                    feature: 'Weight Management',
                                    class: '',
                                },
                                {
                                    id: 4,
                                    feature: 'Dental Services',
                                    class: '',
                                },
                                {
                                    id: 5,
                                    feature: 'Womens Health',
                                    class: '',
                                },
                                {
                                    id: 6,
                                    feature: 'Emergency Medicine',
                                    class: '',
                                },
                                {
                                    id: 7,
                                    feature: 'Family Medicine',
                                    class: '',
                                },
                                {
                                    id: 8,
                                    feature: 'Gynecologic Oncology',
                                    class: '',
                                },
                                {
                                    id: 9,
                                    feature: 'Neurosurgery',
                                    class: '',
                                },
                                {
                                    id: 10,
                                    feature: 'Radiation Oncology',
                                    class: '',
                                },
                            ]
                        },
                    ]
                },
                {
                    id: 4,
                    name: this.$t('prices_rehab'),
                    items: [
                        {
                            id: 1,
                            title: this.$t('prices_packages_basic'),
                            price: '139',
                            btnLink: '/contact-us',
                            pricingFeatures: [
                                {
                                    id: 1,
                                    feature: 'Cancer Services',
                                    class: '',
                                },
                                {
                                    id: 2,
                                    feature: 'Cardiovascular Services',
                                    class: '',
                                },
                                {
                                    id: 3,
                                    feature: 'Weight Management',
                                    class: '',
                                },
                                {
                                    id: 4,
                                    feature: 'Dental Services',
                                    class: '',
                                },
                                {
                                    id: 5,
                                    feature: 'Womens Health',
                                    class: '',
                                },
                                {
                                    id: 6,
                                    feature: 'Emergency Medicine',
                                    class: '',
                                },
                                {
                                    id: 7,
                                    feature: 'Family Medicine',
                                    class: '',
                                },
                                {
                                    id: 8,
                                    feature: 'Gynecologic Oncology',
                                    class: 'color-gray',
                                },
                                {
                                    id: 9,
                                    feature: 'Neurosurgery',
                                    class: 'color-gray',
                                },
                                {
                                    id: 10,
                                    feature: 'Radiation Oncology',
                                    class: 'color-gray',
                                },
                            ]
                        },
                        {
                            id: 2,
                            title: this.$t('prices_packages_standard'),
                            price: '259',
                            btnLink: '/contact-us',
                            pricingFeatures: [
                                {
                                    id: 1,
                                    feature: 'Cancer Services',
                                    class: '',
                                },
                                {
                                    id: 2,
                                    feature: 'Cardiovascular Services',
                                    class: '',
                                },
                                {
                                    id: 3,
                                    feature: 'Weight Management',
                                    class: '',
                                },
                                {
                                    id: 4,
                                    feature: 'Dental Services',
                                    class: '',
                                },
                                {
                                    id: 5,
                                    feature: 'Womens Health',
                                    class: '',
                                },
                                {
                                    id: 6,
                                    feature: 'Emergency Medicine',
                                    class: '',
                                },
                                {
                                    id: 7,
                                    feature: 'Family Medicine',
                                    class: '',
                                },
                                {
                                    id: 8,
                                    feature: 'Gynecologic Oncology',
                                    class: '',
                                },
                                {
                                    id: 9,
                                    feature: 'Neurosurgery',
                                    class: 'color-gray',
                                },
                                {
                                    id: 10,
                                    feature: 'Radiation Oncology',
                                    class: 'color-gray',
                                },
                            ]
                        },
                        {
                            id: 3,
                            title: this.$t('prices_packages_premium'),
                            price: '279',
                            btnLink: '/contact-us',
                            pricingFeatures: [
                                {
                                    id: 1,
                                    feature: 'Cancer Services',
                                    class: '',
                                },
                                {
                                    id: 2,
                                    feature: 'Cardiovascular Services',
                                    class: '',
                                },
                                {
                                    id: 3,
                                    feature: 'Weight Management',
                                    class: '',
                                },
                                {
                                    id: 4,
                                    feature: 'Dental Services',
                                    class: '',
                                },
                                {
                                    id: 5,
                                    feature: 'Womens Health',
                                    class: '',
                                },
                                {
                                    id: 6,
                                    feature: 'Emergency Medicine',
                                    class: '',
                                },
                                {
                                    id: 7,
                                    feature: 'Family Medicine',
                                    class: '',
                                },
                                {
                                    id: 8,
                                    feature: 'Gynecologic Oncology',
                                    class: '',
                                },
                                {
                                    id: 9,
                                    feature: 'Neurosurgery',
                                    class: '',
                                },
                                {
                                    id: 10,
                                    feature: 'Radiation Oncology',
                                    class: 'color-gray',
                                },
                            ]
                        },
                        {
                            id: 4,
                            title: this.$t('prices_packages_gold'),
                            price: '399',
                            btnLink: '/contact-us',
                            pricingFeatures: [
                                {
                                    id: 1,
                                    feature: 'Cancer Services',
                                    class: '',
                                },
                                {
                                    id: 2,
                                    feature: 'Cardiovascular Services',
                                    class: '',
                                },
                                {
                                    id: 3,
                                    feature: 'Weight Management',
                                    class: '',
                                },
                                {
                                    id: 4,
                                    feature: 'Dental Services',
                                    class: '',
                                },
                                {
                                    id: 5,
                                    feature: 'Womens Health',
                                    class: '',
                                },
                                {
                                    id: 6,
                                    feature: 'Emergency Medicine',
                                    class: '',
                                },
                                {
                                    id: 7,
                                    feature: 'Family Medicine',
                                    class: '',
                                },
                                {
                                    id: 8,
                                    feature: 'Gynecologic Oncology',
                                    class: '',
                                },
                                {
                                    id: 9,
                                    feature: 'Neurosurgery',
                                    class: '',
                                },
                                {
                                    id: 10,
                                    feature: 'Radiation Oncology',
                                    class: '',
                                },
                            ]
                        },
                    ]
                },
                {
                    id: 5,
                    name: this.$t('prices_zcrowns'),
                    items: [
                        {
                            id: 1,
                            title: this.$t('prices_packages_basic'),
                            price: '139',
                            btnLink: '/contact-us',
                            pricingFeatures: [
                                {
                                    id: 1,
                                    feature: 'Cancer Services',
                                    class: '',
                                },
                                {
                                    id: 2,
                                    feature: 'Cardiovascular Services',
                                    class: '',
                                },
                                {
                                    id: 3,
                                    feature: 'Weight Management',
                                    class: '',
                                },
                                {
                                    id: 4,
                                    feature: 'Dental Services',
                                    class: '',
                                },
                                {
                                    id: 5,
                                    feature: 'Womens Health',
                                    class: '',
                                },
                                {
                                    id: 6,
                                    feature: 'Emergency Medicine',
                                    class: '',
                                },
                                {
                                    id: 7,
                                    feature: 'Family Medicine',
                                    class: '',
                                },
                                {
                                    id: 8,
                                    feature: 'Gynecologic Oncology',
                                    class: 'color-gray',
                                },
                                {
                                    id: 9,
                                    feature: 'Neurosurgery',
                                    class: 'color-gray',
                                },
                                {
                                    id: 10,
                                    feature: 'Radiation Oncology',
                                    class: 'color-gray',
                                },
                            ]
                        },
                        {
                            id: 2,
                            title: this.$t('prices_packages_standard'),
                            price: '259',
                            btnLink: '/contact-us',
                            pricingFeatures: [
                                {
                                    id: 1,
                                    feature: 'Cancer Services',
                                    class: '',
                                },
                                {
                                    id: 2,
                                    feature: 'Cardiovascular Services',
                                    class: '',
                                },
                                {
                                    id: 3,
                                    feature: 'Weight Management',
                                    class: '',
                                },
                                {
                                    id: 4,
                                    feature: 'Dental Services',
                                    class: '',
                                },
                                {
                                    id: 5,
                                    feature: 'Womens Health',
                                    class: '',
                                },
                                {
                                    id: 6,
                                    feature: 'Emergency Medicine',
                                    class: '',
                                },
                                {
                                    id: 7,
                                    feature: 'Family Medicine',
                                    class: '',
                                },
                                {
                                    id: 8,
                                    feature: 'Gynecologic Oncology',
                                    class: '',
                                },
                                {
                                    id: 9,
                                    feature: 'Neurosurgery',
                                    class: 'color-gray',
                                },
                                {
                                    id: 10,
                                    feature: 'Radiation Oncology',
                                    class: 'color-gray',
                                },
                            ]
                        },
                        {
                            id: 3,
                            title: this.$t('prices_packages_premium'),
                            price: '279',
                            btnLink: '/contact-us',
                            pricingFeatures: [
                                {
                                    id: 1,
                                    feature: 'Cancer Services',
                                    class: '',
                                },
                                {
                                    id: 2,
                                    feature: 'Cardiovascular Services',
                                    class: '',
                                },
                                {
                                    id: 3,
                                    feature: 'Weight Management',
                                    class: '',
                                },
                                {
                                    id: 4,
                                    feature: 'Dental Services',
                                    class: '',
                                },
                                {
                                    id: 5,
                                    feature: 'Womens Health',
                                    class: '',
                                },
                                {
                                    id: 6,
                                    feature: 'Emergency Medicine',
                                    class: '',
                                },
                                {
                                    id: 7,
                                    feature: 'Family Medicine',
                                    class: '',
                                },
                                {
                                    id: 8,
                                    feature: 'Gynecologic Oncology',
                                    class: '',
                                },
                                {
                                    id: 9,
                                    feature: 'Neurosurgery',
                                    class: '',
                                },
                                {
                                    id: 10,
                                    feature: 'Radiation Oncology',
                                    class: 'color-gray',
                                },
                            ]
                        },
                        {
                            id: 4,
                            title: this.$t('prices_packages_gold'),
                            price: '399',
                            btnLink: '/contact-us',
                            pricingFeatures: [
                                {
                                    id: 1,
                                    feature: 'Cancer Services',
                                    class: '',
                                },
                                {
                                    id: 2,
                                    feature: 'Cardiovascular Services',
                                    class: '',
                                },
                                {
                                    id: 3,
                                    feature: 'Weight Management',
                                    class: '',
                                },
                                {
                                    id: 4,
                                    feature: 'Dental Services',
                                    class: '',
                                },
                                {
                                    id: 5,
                                    feature: 'Womens Health',
                                    class: '',
                                },
                                {
                                    id: 6,
                                    feature: 'Emergency Medicine',
                                    class: '',
                                },
                                {
                                    id: 7,
                                    feature: 'Family Medicine',
                                    class: '',
                                },
                                {
                                    id: 8,
                                    feature: 'Gynecologic Oncology',
                                    class: '',
                                },
                                {
                                    id: 9,
                                    feature: 'Neurosurgery',
                                    class: '',
                                },
                                {
                                    id: 10,
                                    feature: 'Radiation Oncology',
                                    class: '',
                                },
                            ]
                        },
                    ]
                },
                {
                    id: 6,
                    name: this.$t('prices_zbridges'),
                    items: [
                        {
                            id: 1,
                            title: this.$t('prices_packages_basic'),
                            price: '139',
                            btnLink: '/contact-us',
                            pricingFeatures: [
                                {
                                    id: 1,
                                    feature: 'Cancer Services',
                                    class: '',
                                },
                                {
                                    id: 2,
                                    feature: 'Cardiovascular Services',
                                    class: '',
                                },
                                {
                                    id: 3,
                                    feature: 'Weight Management',
                                    class: '',
                                },
                                {
                                    id: 4,
                                    feature: 'Dental Services',
                                    class: '',
                                },
                                {
                                    id: 5,
                                    feature: 'Womens Health',
                                    class: '',
                                },
                                {
                                    id: 6,
                                    feature: 'Emergency Medicine',
                                    class: '',
                                },
                                {
                                    id: 7,
                                    feature: 'Family Medicine',
                                    class: '',
                                },
                                {
                                    id: 8,
                                    feature: 'Gynecologic Oncology',
                                    class: 'color-gray',
                                },
                                {
                                    id: 9,
                                    feature: 'Neurosurgery',
                                    class: 'color-gray',
                                },
                                {
                                    id: 10,
                                    feature: 'Radiation Oncology',
                                    class: 'color-gray',
                                },
                            ]
                        },
                        {
                            id: 2,
                            title: this.$t('prices_packages_standard'),
                            price: '259',
                            btnLink: '/contact-us',
                            pricingFeatures: [
                                {
                                    id: 1,
                                    feature: 'Cancer Services',
                                    class: '',
                                },
                                {
                                    id: 2,
                                    feature: 'Cardiovascular Services',
                                    class: '',
                                },
                                {
                                    id: 3,
                                    feature: 'Weight Management',
                                    class: '',
                                },
                                {
                                    id: 4,
                                    feature: 'Dental Services',
                                    class: '',
                                },
                                {
                                    id: 5,
                                    feature: 'Womens Health',
                                    class: '',
                                },
                                {
                                    id: 6,
                                    feature: 'Emergency Medicine',
                                    class: '',
                                },
                                {
                                    id: 7,
                                    feature: 'Family Medicine',
                                    class: '',
                                },
                                {
                                    id: 8,
                                    feature: 'Gynecologic Oncology',
                                    class: '',
                                },
                                {
                                    id: 9,
                                    feature: 'Neurosurgery',
                                    class: 'color-gray',
                                },
                                {
                                    id: 10,
                                    feature: 'Radiation Oncology',
                                    class: 'color-gray',
                                },
                            ]
                        },
                        {
                            id: 3,
                            title: this.$t('prices_packages_premium'),
                            price: '279',
                            btnLink: '/contact-us',
                            pricingFeatures: [
                                {
                                    id: 1,
                                    feature: 'Cancer Services',
                                    class: '',
                                },
                                {
                                    id: 2,
                                    feature: 'Cardiovascular Services',
                                    class: '',
                                },
                                {
                                    id: 3,
                                    feature: 'Weight Management',
                                    class: '',
                                },
                                {
                                    id: 4,
                                    feature: 'Dental Services',
                                    class: '',
                                },
                                {
                                    id: 5,
                                    feature: 'Womens Health',
                                    class: '',
                                },
                                {
                                    id: 6,
                                    feature: 'Emergency Medicine',
                                    class: '',
                                },
                                {
                                    id: 7,
                                    feature: 'Family Medicine',
                                    class: '',
                                },
                                {
                                    id: 8,
                                    feature: 'Gynecologic Oncology',
                                    class: '',
                                },
                                {
                                    id: 9,
                                    feature: 'Neurosurgery',
                                    class: '',
                                },
                                {
                                    id: 10,
                                    feature: 'Radiation Oncology',
                                    class: 'color-gray',
                                },
                            ]
                        },
                        {
                            id: 4,
                            title: this.$t('prices_packages_gold'),
                            price: '399',
                            btnLink: '/contact-us',
                            pricingFeatures: [
                                {
                                    id: 1,
                                    feature: 'Cancer Services',
                                    class: '',
                                },
                                {
                                    id: 2,
                                    feature: 'Cardiovascular Services',
                                    class: '',
                                },
                                {
                                    id: 3,
                                    feature: 'Weight Management',
                                    class: '',
                                },
                                {
                                    id: 4,
                                    feature: 'Dental Services',
                                    class: '',
                                },
                                {
                                    id: 5,
                                    feature: 'Womens Health',
                                    class: '',
                                },
                                {
                                    id: 6,
                                    feature: 'Emergency Medicine',
                                    class: '',
                                },
                                {
                                    id: 7,
                                    feature: 'Family Medicine',
                                    class: '',
                                },
                                {
                                    id: 8,
                                    feature: 'Gynecologic Oncology',
                                    class: '',
                                },
                                {
                                    id: 9,
                                    feature: 'Neurosurgery',
                                    class: '',
                                },
                                {
                                    id: 10,
                                    feature: 'Radiation Oncology',
                                    class: '',
                                },
                            ]
                        },
                    ]
                },
                {
                    id: 7,
                    name: this.$t('prices_veneers'),
                    items: [
                        {
                            id: 1,
                            title: this.$t('prices_packages_basic'),
                            price: '139',
                            btnLink: '/contact-us',
                            pricingFeatures: [
                                {
                                    id: 1,
                                    feature: 'Cancer Services',
                                    class: '',
                                },
                                {
                                    id: 2,
                                    feature: 'Cardiovascular Services',
                                    class: '',
                                },
                                {
                                    id: 3,
                                    feature: 'Weight Management',
                                    class: '',
                                },
                                {
                                    id: 4,
                                    feature: 'Dental Services',
                                    class: '',
                                },
                                {
                                    id: 5,
                                    feature: 'Womens Health',
                                    class: '',
                                },
                                {
                                    id: 6,
                                    feature: 'Emergency Medicine',
                                    class: '',
                                },
                                {
                                    id: 7,
                                    feature: 'Family Medicine',
                                    class: '',
                                },
                                {
                                    id: 8,
                                    feature: 'Gynecologic Oncology',
                                    class: 'color-gray',
                                },
                                {
                                    id: 9,
                                    feature: 'Neurosurgery',
                                    class: 'color-gray',
                                },
                                {
                                    id: 10,
                                    feature: 'Radiation Oncology',
                                    class: 'color-gray',
                                },
                            ]
                        },
                        {
                            id: 2,
                            title: this.$t('prices_packages_standard'),
                            price: '259',
                            btnLink: '/contact-us',
                            pricingFeatures: [
                                {
                                    id: 1,
                                    feature: 'Cancer Services',
                                    class: '',
                                },
                                {
                                    id: 2,
                                    feature: 'Cardiovascular Services',
                                    class: '',
                                },
                                {
                                    id: 3,
                                    feature: 'Weight Management',
                                    class: '',
                                },
                                {
                                    id: 4,
                                    feature: 'Dental Services',
                                    class: '',
                                },
                                {
                                    id: 5,
                                    feature: 'Womens Health',
                                    class: '',
                                },
                                {
                                    id: 6,
                                    feature: 'Emergency Medicine',
                                    class: '',
                                },
                                {
                                    id: 7,
                                    feature: 'Family Medicine',
                                    class: '',
                                },
                                {
                                    id: 8,
                                    feature: 'Gynecologic Oncology',
                                    class: '',
                                },
                                {
                                    id: 9,
                                    feature: 'Neurosurgery',
                                    class: 'color-gray',
                                },
                                {
                                    id: 10,
                                    feature: 'Radiation Oncology',
                                    class: 'color-gray',
                                },
                            ]
                        },
                        {
                            id: 3,
                            title: this.$t('prices_packages_premium'),
                            price: '279',
                            btnLink: '/contact-us',
                            pricingFeatures: [
                                {
                                    id: 1,
                                    feature: 'Cancer Services',
                                    class: '',
                                },
                                {
                                    id: 2,
                                    feature: 'Cardiovascular Services',
                                    class: '',
                                },
                                {
                                    id: 3,
                                    feature: 'Weight Management',
                                    class: '',
                                },
                                {
                                    id: 4,
                                    feature: 'Dental Services',
                                    class: '',
                                },
                                {
                                    id: 5,
                                    feature: 'Womens Health',
                                    class: '',
                                },
                                {
                                    id: 6,
                                    feature: 'Emergency Medicine',
                                    class: '',
                                },
                                {
                                    id: 7,
                                    feature: 'Family Medicine',
                                    class: '',
                                },
                                {
                                    id: 8,
                                    feature: 'Gynecologic Oncology',
                                    class: '',
                                },
                                {
                                    id: 9,
                                    feature: 'Neurosurgery',
                                    class: '',
                                },
                                {
                                    id: 10,
                                    feature: 'Radiation Oncology',
                                    class: 'color-gray',
                                },
                            ]
                        },
                        {
                            id: 4,
                            title: this.$t('prices_packages_gold'),
                            price: '399',
                            btnLink: '/contact-us',
                            pricingFeatures: [
                                {
                                    id: 1,
                                    feature: 'Cancer Services',
                                    class: '',
                                },
                                {
                                    id: 2,
                                    feature: 'Cardiovascular Services',
                                    class: '',
                                },
                                {
                                    id: 3,
                                    feature: 'Weight Management',
                                    class: '',
                                },
                                {
                                    id: 4,
                                    feature: 'Dental Services',
                                    class: '',
                                },
                                {
                                    id: 5,
                                    feature: 'Womens Health',
                                    class: '',
                                },
                                {
                                    id: 6,
                                    feature: 'Emergency Medicine',
                                    class: '',
                                },
                                {
                                    id: 7,
                                    feature: 'Family Medicine',
                                    class: '',
                                },
                                {
                                    id: 8,
                                    feature: 'Gynecologic Oncology',
                                    class: '',
                                },
                                {
                                    id: 9,
                                    feature: 'Neurosurgery',
                                    class: '',
                                },
                                {
                                    id: 10,
                                    feature: 'Radiation Oncology',
                                    class: '',
                                },
                            ]
                        },
                    ]
                },
                {
                    id: 8,
                    name: this.$t('prices_hsmile'),
                    items: [
                        {
                            id: 1,
                            title: this.$t('prices_packages_basic'),
                            price: '139',
                            btnLink: '/contact-us',
                            pricingFeatures: [
                                {
                                    id: 1,
                                    feature: 'Cancer Services',
                                    class: '',
                                },
                                {
                                    id: 2,
                                    feature: 'Cardiovascular Services',
                                    class: '',
                                },
                                {
                                    id: 3,
                                    feature: 'Weight Management',
                                    class: '',
                                },
                                {
                                    id: 4,
                                    feature: 'Dental Services',
                                    class: '',
                                },
                                {
                                    id: 5,
                                    feature: 'Womens Health',
                                    class: '',
                                },
                                {
                                    id: 6,
                                    feature: 'Emergency Medicine',
                                    class: '',
                                },
                                {
                                    id: 7,
                                    feature: 'Family Medicine',
                                    class: '',
                                },
                                {
                                    id: 8,
                                    feature: 'Gynecologic Oncology',
                                    class: 'color-gray',
                                },
                                {
                                    id: 9,
                                    feature: 'Neurosurgery',
                                    class: 'color-gray',
                                },
                                {
                                    id: 10,
                                    feature: 'Radiation Oncology',
                                    class: 'color-gray',
                                },
                            ]
                        },
                        {
                            id: 2,
                            title: this.$t('prices_packages_standard'),
                            price: '259',
                            btnLink: '/contact-us',
                            pricingFeatures: [
                                {
                                    id: 1,
                                    feature: 'Cancer Services',
                                    class: '',
                                },
                                {
                                    id: 2,
                                    feature: 'Cardiovascular Services',
                                    class: '',
                                },
                                {
                                    id: 3,
                                    feature: 'Weight Management',
                                    class: '',
                                },
                                {
                                    id: 4,
                                    feature: 'Dental Services',
                                    class: '',
                                },
                                {
                                    id: 5,
                                    feature: 'Womens Health',
                                    class: '',
                                },
                                {
                                    id: 6,
                                    feature: 'Emergency Medicine',
                                    class: '',
                                },
                                {
                                    id: 7,
                                    feature: 'Family Medicine',
                                    class: '',
                                },
                                {
                                    id: 8,
                                    feature: 'Gynecologic Oncology',
                                    class: '',
                                },
                                {
                                    id: 9,
                                    feature: 'Neurosurgery',
                                    class: 'color-gray',
                                },
                                {
                                    id: 10,
                                    feature: 'Radiation Oncology',
                                    class: 'color-gray',
                                },
                            ]
                        },
                        {
                            id: 3,
                            title: this.$t('prices_packages_premium'),
                            price: '279',
                            btnLink: '/contact-us',
                            pricingFeatures: [
                                {
                                    id: 1,
                                    feature: 'Cancer Services',
                                    class: '',
                                },
                                {
                                    id: 2,
                                    feature: 'Cardiovascular Services',
                                    class: '',
                                },
                                {
                                    id: 3,
                                    feature: 'Weight Management',
                                    class: '',
                                },
                                {
                                    id: 4,
                                    feature: 'Dental Services',
                                    class: '',
                                },
                                {
                                    id: 5,
                                    feature: 'Womens Health',
                                    class: '',
                                },
                                {
                                    id: 6,
                                    feature: 'Emergency Medicine',
                                    class: '',
                                },
                                {
                                    id: 7,
                                    feature: 'Family Medicine',
                                    class: '',
                                },
                                {
                                    id: 8,
                                    feature: 'Gynecologic Oncology',
                                    class: '',
                                },
                                {
                                    id: 9,
                                    feature: 'Neurosurgery',
                                    class: '',
                                },
                                {
                                    id: 10,
                                    feature: 'Radiation Oncology',
                                    class: 'color-gray',
                                },
                            ]
                        },
                        {
                            id: 4,
                            title: this.$t('prices_packages_gold'),
                            price: '399',
                            btnLink: '/contact-us',
                            pricingFeatures: [
                                {
                                    id: 1,
                                    feature: 'Cancer Services',
                                    class: '',
                                },
                                {
                                    id: 2,
                                    feature: 'Cardiovascular Services',
                                    class: '',
                                },
                                {
                                    id: 3,
                                    feature: 'Weight Management',
                                    class: '',
                                },
                                {
                                    id: 4,
                                    feature: 'Dental Services',
                                    class: '',
                                },
                                {
                                    id: 5,
                                    feature: 'Womens Health',
                                    class: '',
                                },
                                {
                                    id: 6,
                                    feature: 'Emergency Medicine',
                                    class: '',
                                },
                                {
                                    id: 7,
                                    feature: 'Family Medicine',
                                    class: '',
                                },
                                {
                                    id: 8,
                                    feature: 'Gynecologic Oncology',
                                    class: '',
                                },
                                {
                                    id: 9,
                                    feature: 'Neurosurgery',
                                    class: '',
                                },
                                {
                                    id: 10,
                                    feature: 'Radiation Oncology',
                                    class: '',
                                },
                            ]
                        },
                    ]
                },
                {
                    id: 9,
                    name: this.$t('prices_whitening'),
                    items: [
                        {
                            id: 1,
                            title: this.$t('prices_packages_basic'),
                            price: '139',
                            btnLink: '/contact-us',
                            pricingFeatures: [
                                {
                                    id: 1,
                                    feature: 'Cancer Services',
                                    class: '',
                                },
                                {
                                    id: 2,
                                    feature: 'Cardiovascular Services',
                                    class: '',
                                },
                                {
                                    id: 3,
                                    feature: 'Weight Management',
                                    class: '',
                                },
                                {
                                    id: 4,
                                    feature: 'Dental Services',
                                    class: '',
                                },
                                {
                                    id: 5,
                                    feature: 'Womens Health',
                                    class: '',
                                },
                                {
                                    id: 6,
                                    feature: 'Emergency Medicine',
                                    class: '',
                                },
                                {
                                    id: 7,
                                    feature: 'Family Medicine',
                                    class: '',
                                },
                                {
                                    id: 8,
                                    feature: 'Gynecologic Oncology',
                                    class: 'color-gray',
                                },
                                {
                                    id: 9,
                                    feature: 'Neurosurgery',
                                    class: 'color-gray',
                                },
                                {
                                    id: 10,
                                    feature: 'Radiation Oncology',
                                    class: 'color-gray',
                                },
                            ]
                        },
                        {
                            id: 2,
                            title: this.$t('prices_packages_standard'),
                            price: '259',
                            btnLink: '/contact-us',
                            pricingFeatures: [
                                {
                                    id: 1,
                                    feature: 'Cancer Services',
                                    class: '',
                                },
                                {
                                    id: 2,
                                    feature: 'Cardiovascular Services',
                                    class: '',
                                },
                                {
                                    id: 3,
                                    feature: 'Weight Management',
                                    class: '',
                                },
                                {
                                    id: 4,
                                    feature: 'Dental Services',
                                    class: '',
                                },
                                {
                                    id: 5,
                                    feature: 'Womens Health',
                                    class: '',
                                },
                                {
                                    id: 6,
                                    feature: 'Emergency Medicine',
                                    class: '',
                                },
                                {
                                    id: 7,
                                    feature: 'Family Medicine',
                                    class: '',
                                },
                                {
                                    id: 8,
                                    feature: 'Gynecologic Oncology',
                                    class: '',
                                },
                                {
                                    id: 9,
                                    feature: 'Neurosurgery',
                                    class: 'color-gray',
                                },
                                {
                                    id: 10,
                                    feature: 'Radiation Oncology',
                                    class: 'color-gray',
                                },
                            ]
                        },
                        {
                            id: 3,
                            title: this.$t('prices_packages_premium'),
                            price: '279',
                            btnLink: '/contact-us',
                            pricingFeatures: [
                                {
                                    id: 1,
                                    feature: 'Cancer Services',
                                    class: '',
                                },
                                {
                                    id: 2,
                                    feature: 'Cardiovascular Services',
                                    class: '',
                                },
                                {
                                    id: 3,
                                    feature: 'Weight Management',
                                    class: '',
                                },
                                {
                                    id: 4,
                                    feature: 'Dental Services',
                                    class: '',
                                },
                                {
                                    id: 5,
                                    feature: 'Womens Health',
                                    class: '',
                                },
                                {
                                    id: 6,
                                    feature: 'Emergency Medicine',
                                    class: '',
                                },
                                {
                                    id: 7,
                                    feature: 'Family Medicine',
                                    class: '',
                                },
                                {
                                    id: 8,
                                    feature: 'Gynecologic Oncology',
                                    class: '',
                                },
                                {
                                    id: 9,
                                    feature: 'Neurosurgery',
                                    class: '',
                                },
                                {
                                    id: 10,
                                    feature: 'Radiation Oncology',
                                    class: 'color-gray',
                                },
                            ]
                        },
                        {
                            id: 4,
                            title: this.$t('prices_packages_gold'),
                            price: '399',
                            btnLink: '/contact-us',
                            pricingFeatures: [
                                {
                                    id: 1,
                                    feature: 'Cancer Services',
                                    class: '',
                                },
                                {
                                    id: 2,
                                    feature: 'Cardiovascular Services',
                                    class: '',
                                },
                                {
                                    id: 3,
                                    feature: 'Weight Management',
                                    class: '',
                                },
                                {
                                    id: 4,
                                    feature: 'Dental Services',
                                    class: '',
                                },
                                {
                                    id: 5,
                                    feature: 'Womens Health',
                                    class: '',
                                },
                                {
                                    id: 6,
                                    feature: 'Emergency Medicine',
                                    class: '',
                                },
                                {
                                    id: 7,
                                    feature: 'Family Medicine',
                                    class: '',
                                },
                                {
                                    id: 8,
                                    feature: 'Gynecologic Oncology',
                                    class: '',
                                },
                                {
                                    id: 9,
                                    feature: 'Neurosurgery',
                                    class: '',
                                },
                                {
                                    id: 10,
                                    feature: 'Radiation Oncology',
                                    class: '',
                                },
                            ]
                        },
                    ]
                },
            ]
        }
    },
    methods: {
        selectTab (id) {
            let tabsList = this.$refs.tabsList
            this.activeTab = id
            this.offsetRight = tabsList.clientWidth * (id - 1)
            tabsList.style.right = this.offsetRight + 'px'
        }
    },
    mounted () {
        let tabsList = this.$refs.tabsList
        tabsList.style.right = this.offsetRight + 'px'
    },
}
</script>