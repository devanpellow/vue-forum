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
  apiKey: 'AIzaSyB4cAxc9PVy58bCEvNbD0ku5SbWbzd1TBg',
  authDomain: 'vue-school-forum-c9233.firebaseapp.com',
  databaseURL: 'https://vue-school-forum-c9233.firebaseio.com',
  projectId: 'vue-school-forum-c9233',
  storageBucket: 'vue-school-forum-c9233.appspot.com',
  messagingSenderId: '882404549440',
  appId: '1:882404549440:web:5d8d14128e7d18e9f210a5',
  measurementId: 'G-W6T0QBP7TY'
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
  components: { App }
})
