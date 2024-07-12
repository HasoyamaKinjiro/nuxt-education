import { defineNuxtConfig } from 'nuxt/config';
import vuetify from 'vite-plugin-vuetify';

export default defineNuxtConfig({
    devtools: { enabled: false },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {}
        }
    },
    css: ['@/assets/css/tailwind.css', 'vuetify/styles'],
    build: {
        transpile: ['vuetify']
    },
    plugins: ['@/plugins/vuetify'],
    modules: [
        '@nuxtjs/tailwindcss',
        function (options, nuxt) {
            nuxt.hooks.hook('vite:extendConfig', (config) => {
                config.plugins?.push(vuetify({ autoImport: true }));
            });
        }
    ],
    app: {
        head: {
            title: 'Nuxt project',
            meta: [
                { name: 'description', content: 'Everything about Nuxt 3' }
            ],
            link: [
                { rel: 'stylesheet', href: '' }
            ]
        }
    },
    vite: {
        vue: {
            template: {
                transformAssetUrls: {
                    'v-img': ['src'],
                    'v-card': ['src']
                }
            }
        }
    },
    compatibilityDate: '2024-07-12'
});
