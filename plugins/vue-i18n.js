import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default ({app, store}) => {
  // Set i18n instance on app
  // This way we can use it in middleware and pages asyncData/fetch

  app.i18n = new VueI18n({
    locales: [
      {
        code: 'tr',
        name: 'Türkçe',
      },
      {
        code: 'en',
        name: 'English',
      },
    ],
    fallbackLocale: 'tr',
    locale: store.state.locale,
    messages: {
      tr: require('~/locales/tr/tr.json'),
      en: require('~/locales/en/en.json'),
    },
  })
}
