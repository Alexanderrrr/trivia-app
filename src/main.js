import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import TriviaApp from './components/TriviaApp'
import Chuck from './components/Chuck'
import Vuex from 'vuex'
import {store} from './store/ChuckStore'

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  {path:'/', component: TriviaApp},
  {path:'/chuck', component: Chuck, name: 'chuck'},

]

const router = new VueRouter({
  routes,
  mode: 'history'
})


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
