import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../components/HomePage.vue'
import AppLogin from '../components/AppLogin.vue'
import AppStartpage from '../components/AppStartpage.vue'
import AppTrailer from '../components/AppTrailer.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'appStartpage',
      component: AppStartpage
    },
    {
      path: '/homePage',
      name: 'homePage',
      component: HomePage
    },
    {
      path: '/login',
      name: 'AppLogin',
      component: AppLogin
    },
    {
      path: '/trailer/:trailerID',
      name: 'trailer',
      component: AppTrailer 
    }
  ]
})
