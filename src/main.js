import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import TriviaApp from './components/TriviaApp'
import Chuck from './components/Chuck'
import Vuex from 'vuex'
import ChuckModule from './store/ChuckModule'
import TriviaModule from './store/TriviaModule'

Vue.use(VueRouter)
Vue.use(Vuex)

Vue.config.productionTip = false

const store = new Vuex.Store({
  modules: {
    ChuckModule,
    TriviaModule
  }
})
const routes = [
  {path:'/', component: TriviaApp, name: 'trivia'},
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
