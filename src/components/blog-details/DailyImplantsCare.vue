<template>
    <div class="container" ref="container">
        <div class="row">
        
            <div class="services-details-area ptb-80">
                
               
               <p>{{ $t('blog_implants_dailycare_p') }}</p>

               <h3><u>{{ $t('blog_implants_dailycare_general_title') }}</u></h3>
               <p>{{ $t('blog_implants_dailycare_general_p') }}</p>

               <h3><u>{{ $t('blog_implants_dailycare_bridges_title') }}</u></h3>
               <p>{{ $t('blog_implants_dailycare_bridges_p') }}</p>
               <ul>
                <li>
                    {{ $t('blog_implants_dailycare_bridges_li1') }}
                </li>
                <li>
                    {{ $t('blog_implants_dailycare_bridges_li2') }}
                </li>
               </ul>


               <h3><u>{{ $t('blog_implants_dailycare_guide_general_title') }}</u></h3>
               <ol>
                <li>
                    <b>{{ $t('blog_implants_dailycare_guide_toothbrush_title') }}</b>
                    <p>{{ $t('blog_implants_dailycare_guide_toothbrush_p')}}</p>
                </li>
                <li>
                    <b>{{ $t('blog_implants_dailycare_guide_toothbrush_between_title') }}</b>
                    <p>{{ $t('blog_implants_dailycare_guide_toothbrush_between_p')}}</p>
                </li>
                <li>
                    <b>{{ $t('blog_implants_dailycare_guide_brushes_title') }}</b>
                    <p>{{ $t('blog_implants_dailycare_guide_brushes_p')}}</p>
                </li>
                <li>
                    <b>{{ $t('blog_implants_dailycare_guide_floss_title') }}</b>
                    <p>{{ $t('blog_implants_dailycare_guide_floss_p')}}</p>
                </li>
               </ol>

               <h3><u>{{ $t('blog_implants_dailycare_guide_check_title') }}</u></h3>
               <p>{{ $t('blog_implants_dailycare_guide_check_p') }}</p>

            </div>

           

            
        </div>
    </div>
</template>

<script>
export default {
    name: 'DailyImplantsCare'
}
</script>

