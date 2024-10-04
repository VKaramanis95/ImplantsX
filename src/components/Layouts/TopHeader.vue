<template>
    <div class="top-header-area">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-12">
                    <ul class="top-header-information">
                        <li>
                            <a href="https://maps.app.goo.gl/72VDiSrhE6kvJq2X6" target="_blank">
                                <i class='bx bxs-map'></i>
                                {{ $t('top_nav_kalamata') }}
                            </a>
                        </li>

                        <li>
                            <i class='bx bx-envelope-open'></i>
                            <a href="mailto:smilemakeover4u@gmail.com"> {{ $t('email') }}</a>
                        </li>
                    </ul>
                </div>

                <div class="col-lg-6 col-md-12">
                    <ul class="top-header-optional">
                        <li>
                            <a href="https://www.facebook.com/" alt="Facebook Icon" target="_blank"><i class='bx bxl-facebook'></i></a>
                            <a href="https://twitter.com/?lang=en" target="_blank" alt="Twitter Icon"><i class='bx bxl-twitter'></i></a>
                            <a href="https://www.linkedin.com/"  alt="Twitter Icon" target="_blank"><i class='bx bxl-linkedin'></i></a>
                            <a href="https://www.instagram.com/" alt="Twitter Icon" target="_blank"><i class='bx bxl-instagram'></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TopHeader'
}
</script>