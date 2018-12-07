import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import TriviaApp from './components/TriviaApp'

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  {path:'/', component: TriviaApp},

]

const router = new VueRouter({
  routes,
  mode: 'history'
})


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
