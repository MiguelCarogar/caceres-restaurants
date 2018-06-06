<template lang="pug">
  .content
    language-switcher
    .home {{ $t('caceresRestaurantsTitle') }}
    .content
      .restaurants(v-for="restaurant in restaurants")
        .restaurant {{ restaurant.name }}
</template>

<script>
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'
import CSV from './../../csv-parser-library/csv.js'
import store from '@/store/index'
import inputJsonTransformer from '@/services/input-json-transformer'
import { mapState } from 'vuex'
export default {
  name: 'Home',

  components: { LanguageSwitcher },

  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },

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
