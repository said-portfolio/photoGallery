import './assets/main.css';

// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

const app = createApp(App);
const vuetify = createVuetify({
  ssr: true,
  components,
  directives,
});

app.use(createPinia());
app.use(router);
app.use(vuetify);

app.mount('#app');
