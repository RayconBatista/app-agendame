import { createApp } from 'vue';

// Local Imports
import App from './App.vue';
import store from '@/store';
import router from '@/router';
import Notifications from '@kyvg/vue3-notification';

// Externals Imposts libs
import '@/ui/assets/css/tailwind.css';
import pinia from '@/config/plugins/pinia';
import '@/config/plugins/axios';
import '@/config/plugins/yup';
import { useMeStore } from '@/store/me';

const app = createApp(App)
app.use(pinia)

// const meStore = useMeStore()

// meStore.getMe()
//   .finally(() => {
//     app
//       .use(router)
//       .use(Notifications)
//       .mount('#app')
// })

createApp(App)
    .use(router)
    // .use(store)
    .use(pinia)
    .use(Notifications)
    .mount('#app')
