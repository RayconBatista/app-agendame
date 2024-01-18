import { createApp } from 'vue';

// Local Imports
import App from './App.vue';
import store from '@/store';
import router from '@/router';

// Externals Imposts libs
import '@/ui/assets/css/tailwind.css';
import '@/config/plugins/yup';
import Notifications from '@kyvg/vue3-notification';

createApp(App)
    .use(router)
    .use(store)
    .use(Notifications)
    .mount('#app')
