import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import RestaurantDetail from '@/components/RestaurantDetail.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/restaurant/:name',
      name: 'restaurantDetails',
      component: RestaurantDetail
    }
  ]
})
