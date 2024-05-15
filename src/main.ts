import "./assets/main.css";

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import vSelect from 'vue-select'

// Third party installations
import VueApexCharts from "vue3-apexcharts";

import App from './App.vue';
import router from './router';

const app = createApp(App)

app.use(createPinia())
app.component("v-select", vSelect)
app.use(router)
app.use(VueApexCharts)

app.mount('#app')
