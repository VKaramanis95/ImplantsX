import { createWebHistory, createRouter } from "vue-router";


import OurClinic from "../components/Pages/OurClinic.vue"
import HomePage from "../components/Pages/HomePage.vue"
import TestimonialsPage from "../components/Pages/TestimonialsPage.vue"
import DentistPage from "../components/Pages/DentistPage.vue"
import Etsetsenekou from "../components/Pages/Etsetsenekou.vue"
import KLabropoulou from "../components/Pages/KLabropoulou.vue"
import GDimakis from "../components/Pages/GDimakis.vue"
import Gvosiki from "../components/Pages/Gvosiki.vue"
import Niliopoulou from "../components/Pages/Niliopoulou.vue"


import ServicesPage  from "../components/Pages/ServicesPage.vue"
import AllXDetails from "../components/services-details/AllXDetails.vue"
import FullMouthRehab from "../components/services-details/FullMouthRehab.vue"
import ZirconiaCr from "../components/services-details/ZirconiaCr.vue"
import Bridges from "../components/services-details/Bridges.vue"

import ZircAndVeneers from "../components/services-details/ZircAndVeneers.vue"




import Whitening from "../components/services-details/Whitening.vue"
import HollywoodSmile from "../components/services-details/HollywoodSmile.vue"
import DentalVeneersResin from "../components/services-details/DentalVeneersResin.vue"
import DentalVeneersPorcelain from "../components/services-details/DentalVeneersPorcelain.vue"
import Implants from "../components/services-details/Implants.vue"
import InvOrthodontics from "../components/services-details/InvOrthodontics.vue"
import Denture from "../components/services-details/Denture.vue"
import OnInLays from "../components/services-details/OnInLays.vue"
import ConsciousSedation from "../components/services-details/ConsciousSedation.vue"
import Periodology from "../components/services-details/Periodology.vue"
import OrofacialPain from "../components/services-details/OrofacialPain.vue"
import FaceImprovement from "../components/services-details/FaceImprovement.vue"
import PrpTherapy from "../components/services-details/PrpTherapy.vue"
import BotoxEtc from "../components/services-details/BotoxEtc.vue"
import AlternativeTherapies from "../components/services-details/AlternativeTherapies.vue"

import GalleryPage  from "../components/Pages/GalleryPage.vue"
import ContactUsPage from "../components/Pages/ContactUsPage.vue"
import ContactThanks from "../components/Pages/ContactThanks.vue"
import DentalTourismPage from "../components/Pages/DentalTourismPage.vue"
import Prices from "../components/Pages/Prices.vue"
import FaqPage from "../components/Pages/FaqPage.vue";
import BlogPage from "../components/Pages/BlogPage.vue"
import BlogPediatricDentistry from "../components/Pages/BlogPediatricDentistry.vue"
import BlogPreventiveDentistry from "../components/Pages/BlogPreventiveDentistry.vue"
import BlogPreventiveSleepApnea from "../components/Pages/BlogPreventiveSleepApnea.vue"
import BlogPreventiveSportsSplints from "../components/Pages/BlogPreventiveSportsSplints.vue"
import BlogWhiteSmileSecrets from "../components/Pages/BlogWhiteSmileSecrets.vue"
import BlogMouthSmell from "../components/Pages/BlogMouthSmell.vue"
import BlogHowBrushProperly from "../components/Pages/BlogHowBrushProperly.vue"
import BlogImplantsPain from "../components/Pages/BlogImplantsPain.vue"
import BlogImplantsGuideAfterSurgery from "../components/Pages/BlogImplantsGuideAfterSurgery.vue"
import BlogDailyImplantsCare from "../components/Pages/BlogDailyImplantsCare.vue"
import BlogImplantsRejectionPosibility from "../components/Pages/BlogImplantsRejectionPosibility.vue"
import BlogWisdomToothExtraction from "../components/Pages/BlogWisdomToothExtraction.vue"
import BlogFirstTimeDentist from "../components/Pages/BlogFirstTimeDentist.vue"
import BlogPrpFacelifting from "../components/Pages/BlogPrpFacelifting.vue"
import BlogCbtc from "../components/Pages/BlogCbtc.vue"
import BlogBoneCrafts from "../components/Pages/BlogBoneCrafts.vue"
import BlogAllxAll6OrAll4 from "../components/Pages/BlogAllxAll6OrAll4.vue"
import BlogAllxImplantsDentureCare from "../components/Pages/BlogAllxImplantsDentureCare.vue"
import BlogAllxWhySmileMakeOver from "../components/Pages/BlogAllxWhySmileMakeOver.vue"
import BlogAllxAdditionalAdhesives from "../components/Pages/BlogAllxAdditionalAdhesives.vue"
import BlogImplantsLoseTeeth from "../components/Pages/BlogImplantsLoseTeeth.vue"
import BlogImplantsGoldStandard from "../components/Pages/BlogImplantsGoldStandard.vue"
import BlogImplantsQuality from "../components/Pages/BlogImplantsQuality.vue"
import BlogImplantsEatAnything from "../components/Pages/BlogImplantsEatAnything.vue"
import BlogImplantsAdditionalProcedure from "../components/Pages/BlogImplantsAdditionalProcedure.vue"
import BlogImplantsIsPainful from "../components/Pages/BlogImplantsIsPainful.vue"
import BlogZircVenColor from "../components/Pages/BlogZircVenColor.vue"
import BlogZircVenBenefits from "../components/Pages/BlogZircVenBenefits.vue"
import BlogZircVenConsumption from "../components/Pages/BlogZircVenConsumption.vue"
import BlogZircVenFall from "../components/Pages/BlogZircVenFall.vue"
import BlogZircVenLongevity from "../components/Pages/BlogZircVenLongevity.vue"



const routes = [

 
  { path: "/",name:"HomePage", component:HomePage},
  { path: "/our-clinic", name:"OurClinic",  component:OurClinic},
  
  { path: "/testimonials", name:"TestimonialsPage",  component:TestimonialsPage},

  { path: "/our-team", name:"DentistPage",  component:DentistPage},
  { path: "/tsetsenekou", name:"Etsetsenekou",  component:Etsetsenekou},
  { path: "/labropoulou", name:"KLabropoulou",  component:KLabropoulou},
  { path: "/dimakis", name:"GDimakis",  component:GDimakis},
  { path: "/iliopoulou", name:"Niliopoulou",  component:Niliopoulou},
  { path: "/vosiki", name:"Gvosiki",  component:Gvosiki},
  

  { path: "/services",name:"ServicesPage", component:ServicesPage},
  
  {path: "/all-on-x-details",name:"AllXDetails", component:AllXDetails},
  {path: "/full-mouth-rehabilitation",name:"FullMouthRehab", component:FullMouthRehab},

  {path: "/zirconia-crowns",name:"ZirconiaCr",component:ZirconiaCr},
  {path: "/zirconia-bridges", name:"Bridges",component:Bridges},
  {path: "/whitening",name:"Whitening",component:Whitening},
  {path: "/hollywood-smile",name:"HollywoodSmile",component:HollywoodSmile},


  {path: "/resin-veneers", name:"DentalVeneersResin",component:DentalVeneersResin},
  {path: "/porcelain-veneers", name:"DentalVeneersPorcelain",component:DentalVeneersPorcelain},
  {path: "/implants",name:"Implants",component:Implants},
  {path: "/invisible-orthodontics",name:"InvOrthodontics",component:InvOrthodontics},
  {path: "/denture",name:"Denture",component:Denture},
  {path: "/inlays-onlays",name:"OnInLays",component:OnInLays},
  { path: "/conscious-sedation",name:"ConsciousSedation", component:ConsciousSedation },
  { path: "/periodology",name:"Periodology", component:Periodology },
  { path: "/orofacial-pain", name:"OrofacialPain",component:OrofacialPain },
  { path: "/face-improvement",name:"FaceImprovement", component:FaceImprovement},
  { path: "/prp-therapy",name:"PrpTherapy", component:PrpTherapy},
  { path: "/botox-etc",name:"BotoxEtc", component:BotoxEtc},
  { path: "/alternative-therapies",name:"AlternativeTherapies",component:AlternativeTherapies},
  { path: "/veneers",name:"ZircAndVeneers",component:ZircAndVeneers},

  { path: "/veneers-natural-color",name:"BlogZircVenColor",component:BlogZircVenColor},
  { path: "/veneers-benefits",name:"BlogZircVenBenefits",component:BlogZircVenBenefits},
  { path: "/veneers-consumption",name:"BlogZircVenConsumption",component:BlogZircVenConsumption},
  { path: "/veneers-fall",name:"BlogZircVenFall",component:BlogZircVenFall},
  { path: "/veneers-longevity",name:"BlogZircVenLongevity",component: BlogZircVenLongevity},

 

  { path: "/gallery",name:"GalleryPage", component:GalleryPage},

  { path: "/contact-us",name:"ContactUsPage", component:ContactUsPage},
  { path: "/thanks",name:"ContactThanks", component:ContactThanks},

  { path: "/dental-tourism",name:"DentalTourismPage",component:DentalTourismPage},
  { path: "/pricing",name:"Prices", component:Prices},

  { path: "/faq",name:"FaqPage", component:FaqPage},
  
  { path: "/blog",name:"BlogPage", component:BlogPage},
  { path: "/pediatric-dentistry",name:"BlogPediatricDentistry", component:BlogPediatricDentistry},
  { path: "/preventive-dentistry",name:"BlogPreventiveDentistry", component:BlogPreventiveDentistry},
  { path: "/sleep-apnea",name:"BlogPreventiveSleepApnea", component:BlogPreventiveSleepApnea},
  { path: "/sport-splints",name:"BlogPreventiveSportsSplints", component:BlogPreventiveSportsSplints},
  { path: "/white-smile-secrets",name:"BlogWhiteSmileSecrets", component:BlogWhiteSmileSecrets},
  { path: "/mouth-smell", name:"BlogMouthSmell", component:BlogMouthSmell},
  { path: "/brush-properly",name:"BlogHowBrushProperly",  component:BlogHowBrushProperly},
  { path: "/implants-pain", name:"BlogImplantsPain", component:BlogImplantsPain},

  { path: "/all6-or-all4", name:"BlogAllxAll6OrAll4", component:BlogAllxAll6OrAll4},
  { path: "/implants-denture-care", name:"BlogAllxImplantsDentureCare", component:BlogAllxImplantsDentureCare},  
  { path: "/why-smile-make-over", name:"BlogAllxWhySmileMakeOver", component:BlogAllxWhySmileMakeOver},
  { path: "/additional-adhesives", name:"BlogAllxAdditionalAdhesives", component:BlogAllxAdditionalAdhesives},
  { path: "/why-we-lose-teeth", name:"BlogImplantsLoseTeeth", component:BlogImplantsLoseTeeth},
  { path: "/implants-gold-standards", name:"BlogImplantsGoldStandard", component:BlogImplantsGoldStandard},
  { path: "/implants-quality", name:"BlogImplantsQuality", component:BlogImplantsQuality},
  { path: "/implants-eat-anything", name:"BlogImplantsEatAnything", component:BlogImplantsEatAnything},
  { path: "/implants-additional-procedure", name:"BlogImplantsAdditionalProcedure", component: BlogImplantsAdditionalProcedure},
  { path: "/implants-are-painful", name:"BlogImplantsIsPainful", component: BlogImplantsIsPainful},
 
  

  { path: "/after-surgery",name:"BlogImplantsGuideAfterSurgery.vue",  component:BlogImplantsGuideAfterSurgery.vue},
  { path: "/daily-care",name:"BlogDailyImplantsCare",  component:BlogDailyImplantsCare},

  { path: "/implants-rejection-podibility",name:"BlogImplantsRejectionPosibility", component:BlogImplantsRejectionPosibility},
  { path: "/wisdom-tooth-extraction",name:"BlogWisdomToothExtraction", component:BlogWisdomToothExtraction},
  { path: "/first-time",name:"BlogFirstTimeDentist", component:BlogFirstTimeDentist},
  { path: "/prp-facelift",name:"BlogPrpFacelifting", component:BlogPrpFacelifting},
  { path: "/cbct-tomography",name:"BlogCbtc", component:BlogCbtc},
  { path: "/bone-crafts",name:"BlogBoneCrafts", component:BlogBoneCrafts},


];

const router = createRouter({
  history: createWebHistory(""),
  base: process.env.NODE_ENV === "production" ? "" : "/",
  linkExactActiveClass: "active",
  routes,
  scrollBehavior() {
    return { top: 0, behavior: "smooth" };
  },
});

export default router;
