import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import axiosPlugin from './axios';

const app = createApp(App);
app.use(axiosPlugin);
app.mount('#app');
