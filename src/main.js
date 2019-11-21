/* eslint-disable no-unused-vars */
import Vue from 'vue'
import App from './App.vue'
import styles from './scss/index.scss'
require('./scss/index.scss')

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
