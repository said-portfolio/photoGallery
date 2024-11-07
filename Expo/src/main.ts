//import './assets/main.css';
import '@/css/styles.scss'
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import '@mdi/font/css/materialdesignicons.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

// Vuetify
import 'vuetify/styles';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { createVuetify } from 'vuetify';
import { fa } from 'vuetify/iconsets/fa';
import { mdi } from 'vuetify/iconsets/mdi';

const app = createApp(App);
const vuetify = createVuetify({
  theme: {
    defaultTheme: 'dark',
  },
  icons: {
    defaultSet: 'mdi',
    sets: {
      mdi,
      fa,
    },
  },
  ssr: true,
  components,
  directives,
});

app.use(createPinia());
app.use(router);
app.use(vuetify);

app.mount('#app');
