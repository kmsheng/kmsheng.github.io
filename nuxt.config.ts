// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  modules: [
   '@nuxtjs/i18n'
  ],
  i18n: {
    locales: [
      {
        code: 'en',
        file: 'en-US.json'
      },
      {
        code: 'zh',
        file: 'zh-TW.json'
      }
    ],
    lazy: true,
    langDir: 'langs',
    defaultLocale: 'en',
    detectBrowserLanguage: false,
    vueI18n: {
      legacy: false,
      locale: 'en'
    }
  }
})
