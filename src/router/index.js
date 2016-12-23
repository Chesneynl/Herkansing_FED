import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// Route components
import Agenda from '../pages/Agenda.vue'
import Activities from '../pages/Activities.vue'
import Provinces from '../pages/Provinces.vue'

export default new Router({
  //routers with the component that it should show when landed on that URL.
  //exact means that the url has to be exactly the same as the route
  routes: [
    { path: '/activities/:id',  component: Activities, exact: true },
    { path: '/', redirect: '/Agenda' }
  ]
})
