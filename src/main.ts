import "./assets/main.css";

import { createApp } from 'vue';
import { createPinia } from 'pinia';

// Third party installations
import VueApexCharts from "vue3-apexcharts";

import App from './App.vue';
import router from './router';

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueApexCharts)

app.mount('#app')
