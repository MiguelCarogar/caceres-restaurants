import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    restaurants: []
  },
  mutations: {
    setRestaurants (state, restaurants) {
      state.restaurants = restaurants
    }
  },
  actions: {
    fetchResturants () {

    }
  }
})

export default store
