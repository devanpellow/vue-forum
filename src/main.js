// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import firebase from 'firebase'
import App from './App'
import router from './router'
import store from '@/store'
import AppDate from '@/components/AppDate'
Vue.component('AppDate', AppDate)
Vue.config.productionTip = false

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyChTSb8a5xetN0TWFV5lla5ZGKtQv_m234',
  authDomain: 'forum-aa68a.firebaseapp.com',
  databaseURL: 'https://forum-aa68a.firebaseio.com',
  projectId: 'forum-aa68a',
  storageBucket: 'forum-aa68a.appspot.com',
  messagingSenderId: '706176004849',
  appId: '1:706176004849:web:158569204c9c4e88f76f50',
  measurementId: 'G-BY4T56ZBZY'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.analytics()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  beforeCreate () {
    store.dispatch('fetchUser', {id: store.state.authId})
  }
})
