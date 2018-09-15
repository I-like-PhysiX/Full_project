// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import {store} from './store'
import * as firebase from 'firebase'
import AlertCmp from './components/Shared/Alert.vue'

Vue.use(Vuetify)
Vue.config.productionTip = false
Vue.component('app-alert', AlertCmp)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created(){
    firebase.initializeApp({
      apiKey: 'AIzaSyBUaPSu2YKsOhzSmS27Gqc4idGh97ifvGI',
      authDomain: 'full-project-e823c.firebaseapp.com',
      databaseURL: 'https://full-project-e823c.firebaseio.com',
      projectId: 'full-project-e823c',
      storageBucket: 'full-project-e823c.appspot.com',
    })
  }
})
