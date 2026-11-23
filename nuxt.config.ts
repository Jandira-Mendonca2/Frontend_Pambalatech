// https://nuxt.com/docs/api/configuration/nuxt-config
// import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

// export default defineNuxtConfig({
//   modules: ['vuetify-nuxt-module', '@vite-pwa/nuxt'],
//   css: [
//     '@mdi/font/css/materialdesignicons.css',
//   ],
//   compatibilityDate: '2025-07-15',
//   devtools: { enabled: true },
//   build: {
//     transpile: ['vuetify'],
//   },

//   vite: {
//     plugins: [
//       // @ts-expect-error
//       vuetify({ autoImport: true }),
//     ],
//     vue: {
//       template: {
//         transformAssetUrls,
//       },
//     },
//   },
//   vuetify: {
//     moduleOptions: {
//       prefixComposables: 'auto',
//     },

//     vuetifyOptions: {
//       blueprint: 'md3',

//       icons: {
//         defaultSet: 'mdi',
//       },
//     },
//   },

// })


import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: [
    'vuetify-nuxt-module',
    '@vite-pwa/nuxt',
  ],

  css: [
    'vuetify/styles',
    '@mdi/font/css/materialdesignicons.css',
  ],

  compatibilityDate: '2025-07-15',

  devtools: {
    enabled: true,
  },

  build: {
    transpile: ['vuetify'],
  },

  vuetify: {
    moduleOptions: {
      prefixComposables: 'auto',
    },

    vuetifyOptions: {
      icons: {
        defaultSet: 'mdi',
      },
    },
  },
})

