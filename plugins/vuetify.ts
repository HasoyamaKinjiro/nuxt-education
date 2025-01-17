import { createVuetify } from 'vuetify';
import { defineNuxtPlugin } from 'nuxt/app';
import '@mdi/font/css/materialdesignicons.css';

import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

export default defineNuxtPlugin((nuxtApp) => {
    const vuetify = createVuetify({
        components,
        directives
    });

    nuxtApp.vueApp.use(vuetify);
});
