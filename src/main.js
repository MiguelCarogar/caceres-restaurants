// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import './../node_modules/jquery/dist/jquery.min.js'
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './../node_modules/bootstrap/dist/js/bootstrap.min.js'

import i18n from '@/i18n'
import CSV from './../csv-parser-library/csv.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  template: '<App/>',
  components: { App },
  created () {
    CSV.fetch({url: './static/csv-files/restaurantes.csv'}).then(data => {
      console.log(data)
    })
  }
})
