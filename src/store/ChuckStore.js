import Vue from 'vue'
import Vuex from 'vuex'
import ChuckService from '../services/ChuckService'

Vue.use(Vuex)

export const store = new Vuex.Store({

  state: {
    joke: ''
  },

  actions: {
    async getJokes({commit}){
      try {
        const response = await ChuckService.getRandomJoke()
        commit ('SET_JOKES', response.value)
        return response
      } catch (error){ console.log(error);}
    }

  },

  mutations: {
    SET_JOKES(state, joke) {
      state.joke = joke
    }
  },

  getters: {
      joke: state => state.joke,
      

  }

})
