import Vue from 'vue'
import App from './components/App.vue'
import SecretQuote from './components/SecretQuote.vue'
import Login from './components/Login.vue'
import ListMapView from './components/ListMapView.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.use(VueRouter)
import auth from './auth'

import lazyload from 'vue-lazyload'
var VueValidator = require('vue-validator')

Vue.use(lazyload, {
  // error: './img/error.png',
  // loading: './img/loading-spin.svg'
})

//install vue-validator
Vue.use(VueValidator),{
  
}

//custom filters
Vue.filter('short', function (value) {
  return parseFloat(value).toFixed(3);
})

// Vue.http.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('id_token');

// Check the user's auth status when the app starts
// auth.checkAuth()

export var router = new VueRouter()

router.map({
  'list': {
    component: ListMapView
  },
  '/login': {
    component: Login
  }
  // ,
  // '/signup': {
  //   component: Signup
  // }
})

router.redirect({
  '*': '/login'
})

router.start(App, '#app')

