import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
  en: {
    caceresRestaurantsTitle: 'Cáceres Restaurants',
    vote: 'Vote'
  },

  es: {
    caceresRestaurantsTitle: 'Restaurantes de Cáceres',
    vote: 'Vota'
  }
}

const i18n = new VueI18n({
  messages,
  locale: 'en'
})

export default i18n
