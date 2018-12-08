import ChuckService from '../services/ChuckService'

export default {

  state: {
    joke: '',
    categories: [],
  },

  actions: {
    async getJokes({commit}, categ){
      try {
        const response = await ChuckService.getRandomJoke(categ)
        commit ('SET_JOKES', response.value)
        return response
      } catch (error){ console.log(error);}
    },

    async getJokesCategories({commit}){
      try {
        const response = await ChuckService.getAllCategories()
        commit ('SET_CATEGORIES', response)
        return response
      } catch (error){ console.log(error);}
    }

  },

  mutations: {
    SET_JOKES(state, joke) {
      state.joke = joke
    },

    SET_CATEGORIES(state, category) {
      state.categories = category
    }
  },

  getters: {
      joke: state => state.joke,
      categories: state => state.categories

  }

}
