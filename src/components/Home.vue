<template lang="pug">
  .content
    header
      #navbarHeader.collapse.bg-dark
        .container
          .row
            .col-sm-8.col-md-7.py-4
              language-switcher
      .navbar.navbar-dark.bg-dark.box-shadow
        .container.d-flex.justify-content-between
          .navbar-brand.d-flex.align-items-center {{ $t('caceresRestaurantsTitle') }}
          button(
            data-target="#navbarHeader",
            type="button",
            data-toggle="collapse",
            aria-controls="navbarHeader",
            aria-expanded="false",
            aria-label="Toggle navigation").navbar-toggler.collapsed
            span.navbar-toggler-icon
    main
      section.jumbotron.text-center
        .container
          h1.jumbotron-heading {{ $t('caceresRestaurantsTitle') }}
      .album.py-5.bg-light
        .container
          .row
            .col-md-4(v-for="restaurant in restaurantsByPuntuation")
              restaurant-component(:restaurant="restaurant")
</template>

<script>
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'
import RestaurantComponent from '@/components/restaurant.vue'

import store from '@/store/index'

import { mapState } from 'vuex'

import { db } from '@/firebase.js'

export default {
  name: 'Home',

  components: { LanguageSwitcher, RestaurantComponent },

  computed: {
    ...mapState(['restaurants']),

    restaurantsByPuntuation () {
      return this.restaurants.sort((rest1, rest2) => rest2.puntuation - rest1.puntuation)
    }
  },

  firebase: {
    restaurantsDb: db.ref('restaurants')
  },

  created () {
    store.commit('setRestaurants', this.restaurantsDb)
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
