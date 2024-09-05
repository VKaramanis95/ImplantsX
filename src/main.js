import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Toaster from "@meforma/vue-toaster";
import VueFeather from "vue-feather";
import "./assets/custom.scss";
import i18n from './i18n';


const app = createApp(App).use(router).use(Toaster).use(i18n);
app.component(VueFeather.name, VueFeather).mount("#app");