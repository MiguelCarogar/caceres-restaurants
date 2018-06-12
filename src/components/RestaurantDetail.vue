<template lang="pug">
  .card.mb-4.box-shadow
    img(src="/static/logo.png").card-img-top
    .card-body
      p.card-text {{ selectedRestaurant.name }}
      .valorations(v-for="restaurantDb in restaurantsDb")
        .valoration(v-if="restaurantDb.name === selectedRestaurant.name")
          p.puntuation {{ restaurantDb.puntuation }}
          button(@click="addPoint(restaurantDb)") {{ $t('vote') }}
          button(@click="goToHome()") {{ $t('home') }}

</template>

<script>
  import { mapState } from 'vuex'

  import { db } from '@/firebase.js'
  export default {
    computed: {
      ...mapState(['selectedRestaurant'])
    },
    methods: {
      addPoint (restaurantDb) {
        db.ref('restaurants')
          .child(restaurantDb['.key'])
          .child('puntuation')
          .set(restaurantDb.puntuation++)
      },
      goToHome () {
        this.$router.push({ name: 'Home' })
      }
    },
    firebase: {
      restaurantsDb: db.ref('restaurants')
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
