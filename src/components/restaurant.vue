<template lang="pug">
  .card.mb-4.box-shadow
    img(src="/static/logo.png").card-img-top
    .card-body
      p.card-text {{ restaurant.name }}
      .valorations(v-for="restaurantDb in restaurantsDb")
        .valoration(v-if="restaurantDb.name === restaurant.name")
          p.puntuation {{ restaurantDb.puntuation }}
          button(@click="addPoint(restaurantDb)") {{ $t('vote') }}
          button(@click="goToDetails(restaurant)") {{$t('details')}}
</template>

<script>
  import { db } from '@/firebase.js'
  export default {
    props: {
      restaurant: { type: Object, required: true }
    },
    firebase: {
      restaurantsDb: db.ref('restaurants')
    },
    methods: {
      addPoint (restaurantDb) {
        db.ref('restaurants')
          .child(restaurantDb['.key'])
          .child('puntuation')
          .set(restaurantDb.puntuation++)
      },
      goToDetails (restaurant) {
        const name = restaurant.name
        this.$store.commit('setSelectedRestaurant', restaurant)
        this.$router.push({ name: 'restaurantDetails', params: { name } })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
