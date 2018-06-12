import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    restaurants: [],
    selectedRestaurant: {}
  },
  mutations: {
    setRestaurants (state, restaurants) {
      state.restaurants = restaurants
    },
    setSelectedRestaurant (state, restaurant) {
      state.selectedRestaurant = restaurant
    }
  }
})

export default store
