<template>
    <div class="doctor-area ptb-100">
        <div class="container">
            <!-- Dentists Section -->
            <div class="section-title">
                <h2><u>{{ $t('all_dentists') }}</u></h2>
            </div>

            <div class="row" v-for="(doctorRow, rowIndex) in chunkedDoctors" :key="`dentist-${rowIndex}`" :class="{'d-flex justify-content-center': isLastRow(rowIndex, chunkedDoctors)}">
                <div class="col-lg-4 col-md-6" v-for="doctor in doctorRow" :key="doctor.name">
                    <div class="single-doctor">
                        <router-link :to="doctor.profileLink">
                            <img :src="doctor.image" :alt="doctor.name">
                        </router-link>

                        <div class="doctor-content">
                            <h3>
                                <router-link :to="doctor.profileLink">
                                    {{ doctor.name }}
                                </router-link>
                            </h3>
                            <span>{{ doctor.specialization }}</span>

                            <div class="share-link">
                                <a v-for="social in doctor.socialLinks" :href="social.link" target="_blank" :key="social.platform">
                                    <i :class="social.icon"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Dental Technicians Section -->
            <div class="section-title">
                <h2><u>{{ $t('all_dental_technician') }}</u></h2>
            </div>

            <div class="row" v-for="(techRow, rowIndex) in chunkedTechnicians" :key="`technician-${rowIndex}`" :class="{'d-flex justify-content-center': isLastRow(rowIndex, chunkedTechnicians)}">
                <div class="col-lg-4 col-md-6" v-for="tech in techRow" :key="tech.name">
                    <div class="single-doctor">
                        <router-link :to="tech.profileLink">
                            <img :src="tech.image" :alt="tech.name">
                        </router-link>

                        <div class="doctor-content">
                            <h3>
                                <router-link :to="tech.profileLink">
                                    {{ tech.name }}
                                </router-link>
                            </h3>
                            <span>{{ tech.specialization }}</span>

                            <div class="share-link">
                                <a v-for="social in tech.socialLinks" :href="social.link" target="_blank" :key="social.platform">
                                    <i :class="social.icon"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Office Staff Section -->
            <div class="section-title">
                <h2><u>{{ $t('all_office_staff') }}</u></h2>
            </div>

            <div class="row" v-for="(staffRow, rowIndex) in chunkedStaff" :key="`staff-${rowIndex}`" :class="{'d-flex justify-content-center': isLastRow(rowIndex, chunkedStaff)}">
                <div class="col-lg-4 col-md-6" v-for="staff in staffRow" :key="staff.name">
                    <div class="single-doctor">
                        <router-link :to="staff.profileLink">
                            <img :src="staff.image" :alt="staff.name">
                        </router-link>

                        <div class="doctor-content">
                            <h3>
                                <router-link :to="staff.profileLink">
                                    {{ staff.name }}
                                </router-link>
                            </h3>
                            <span>{{ staff.specialization }}</span>

                            <div class="share-link">
                                <a v-for="social in staff.socialLinks" :href="social.link" target="_blank" :key="social.platform">
                                    <i :class="social.icon"></i>
                                </a>
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
    name: 'AllDoctors',
    data() {
        return {
            dentists: [
                {
                    name: this.$t('our_team_tsetsenekou'),
                    profileLink: '/tsetsenekou',
                    image: require('../../assets/images/OurTeam/tsetsenekou/tsetsenekou_allteam.webp'),
                    specialization: this.$t('all_dentists_tsetsenekou_spec'),
                    socialLinks: [
                        { platform: 'facebook', link: 'https://www.facebook.com/', icon: 'bx bxl-facebook' },
                        { platform: 'twitter', link: 'https://twitter.com/?lang=en', icon: 'bx bxl-twitter' },
                        { platform: 'linkedin', link: 'https://www.linkedin.com/in/efstathia-tsetsenekou/', icon: 'bx bxl-linkedin' },
                        { platform: 'instagram', link: 'https://www.instagram.com/', icon: 'bx bxl-instagram' },
                    ],
                },
                {
                    name: this.$t('our_team_labropoulou'),
                    profileLink: '/labropoulou',
                    image: require('../../assets/images/OurTeam/labropoulou/labropoulou_allteam.webp'),
                    specialization: this.$t('all_dentists_labropoulou_spec'),
                    socialLinks: [
                        { platform: 'facebook', link: 'https://www.facebook.com/', icon: 'bx bxl-facebook' },
                        { platform: 'twitter', link: 'https://twitter.com/?lang=en', icon: 'bx bxl-twitter' },
                        { platform: 'linkedin', link: 'https://www.linkedin.com/in/', icon: 'bx bxl-linkedin' },
                        { platform: 'instagram', link: 'https://www.instagram.com/', icon: 'bx bxl-instagram' },
                    ],
                },
                {
                    name: this.$t('our_team_dimakis'),
                    profileLink: '/dimakis',
                    image: require('../../assets/images/OurTeam/dimakis/dimakis_allteam.webp'),
                    specialization: this.$t('all_dentists_labropoulou_spec'),
                    socialLinks: [
                        { platform: 'facebook', link: 'https://www.facebook.com/', icon: 'bx bxl-facebook' },
                        { platform: 'twitter', link: 'https://twitter.com/?lang=en', icon: 'bx bxl-twitter' },
                        { platform: 'linkedin', link: 'https://www.linkedin.com/in/', icon: 'bx bxl-linkedin' },
                        { platform: 'instagram', link: 'https://www.instagram.com/', icon: 'bx bxl-instagram' },
                    ],
                },
            ],
            dentalTechnicians: [
                {
                    name: this.$t('tech_name1'),
                    profileLink: '/tech1',
                    image: require('../../assets/images/OurTeam/labropoulou/labropoulou_allteam.webp'),
                    specialization: this.$t('tech_spec1'),
                    socialLinks: [
                        { platform: 'facebook', link: 'https://www.facebook.com/', icon: 'bx bxl-facebook' },
                        { platform: 'twitter', link: 'https://twitter.com/?lang=en', icon: 'bx bxl-twitter' },
                        { platform: 'linkedin', link: 'https://www.linkedin.com/in/tech1/', icon: 'bx bxl-linkedin' },
                        { platform: 'instagram', link: 'https://www.instagram.com/', icon: 'bx bxl-instagram' },
                    ],
                },
                {
                    name: this.$t('tech_name2'),
                    profileLink: '/tech2',
                    image: require('../../assets/images/OurTeam/labropoulou/labropoulou_allteam.webp'),
                    specialization: this.$t('tech_spec2'),
                    socialLinks: [
                        { platform: 'facebook', link: 'https://www.facebook.com/', icon: 'bx bxl-facebook' },
                        { platform: 'twitter', link: 'https://twitter.com/?lang=en', icon: 'bx bxl-twitter' },
                        { platform: 'linkedin', link: 'https://www.linkedin.com/in/', icon: 'bx bxl-linkedin' },
                        { platform: 'instagram', link: 'https://www.instagram.com/', icon: 'bx bxl-instagram' },
                    ],
                },
            ],
            officeStaff: [
                {
                    name: this.$t('staff_name1'),
                    profileLink: '/staff1',
                    image: require('../../assets/images/OurTeam/labropoulou/labropoulou_allteam.webp'),
                    specialization: this.$t('staff_spec1'),
                    socialLinks: [
                        { platform: 'facebook', link: 'https://www.facebook.com/', icon: 'bx bxl-facebook' },
                        { platform: 'twitter', link: 'https://twitter.com/?lang=en', icon: 'bx bxl-twitter' },
                        { platform: 'linkedin', link: 'https://www.linkedin.com/in/staff1/', icon: 'bx bxl-linkedin' },
                        { platform: 'instagram', link: 'https://www.instagram.com/', icon: 'bx bxl-instagram' },
                    ],
                },
                {
                    name: this.$t('staff_name2'),
                    profileLink: '/staff2',
                    image: require('../../assets/images/OurTeam/labropoulou/labropoulou_allteam.webp'),
                    specialization: this.$t('staff_spec2'),
                    socialLinks: [
                        { platform: 'facebook', link: 'https://www.facebook.com/', icon: 'bx bxl-facebook' },
                        { platform: 'twitter', link: 'https://twitter.com/?lang=en', icon: 'bx bxl-twitter' },
                        { platform: 'linkedin', link: 'https://www.linkedin.com/in/', icon: 'bx bxl-linkedin' },
                        { platform: 'instagram', link: 'https://www.instagram.com/', icon: 'bx bxl-instagram' },
                    ],
                },
            ],
        };
    },
    computed: {
        chunkedDoctors() {
            return this.chunkArray(this.dentists);
        },
        chunkedTechnicians() {
            return this.chunkArray(this.dentalTechnicians);
        },
        chunkedStaff() {
            return this.chunkArray(this.officeStaff);
        },
    },
    methods: {
        chunkArray(arr) {
            const chunkSize = 3;
            const chunkedArray = [];
            for (let i = 0; i < arr.length; i += chunkSize) {
                chunkedArray.push(arr.slice(i, i + chunkSize));
            }
            return chunkedArray;
        },
        isLastRow(rowIndex, chunkedArray) {
            return rowIndex === chunkedArray.length - 1 && chunkedArray[rowIndex].length < 3;
        },
    },
};
</script>

<style>
.single-doctor {
    display: flex;
    flex-direction: column;
    justify-content: space-between; /* Ensures consistent spacing */
    min-height: 200px; /* Minimum height to ensure uniformity */
    padding: 20px; /* Optional: padding for aesthetics */
}

.doctor-content {
    flex-grow: 1; /* Takes up remaining space */
}
</style>