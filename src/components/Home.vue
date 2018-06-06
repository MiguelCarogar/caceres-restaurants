<template lang="pug">
  main
    section.jumbotron.text-center
      .container
        h1.jumbotron-heading {{ $t('caceresRestaurantsTitle') }}
        language-switcher
    .album.py-5.bg-light
      .container
        .row
          .col-md-4(v-for="restaurant in restaurants")
            restaurant-component(:restaurant="restaurant")
</template>

<script>
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'
import RestaurantComponent from '@/components/restaurant.vue'

import CSV from './../../csv-parser-library/csv.js'
import store from '@/store/index'
import inputJsonTransformer from '@/services/input-json-transformer'

import { mapState } from 'vuex'
export default {
  name: 'Home',

  components: { LanguageSwitcher, RestaurantComponent },

  computed: {
    ...mapState(['restaurants'])
  },

  created () {
    CSV.fetch({url: './static/csv-files/restaurantes.csv'}).then(data => {
      store.commit('setRestaurants', inputJsonTransformer.transform(data.records))
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
