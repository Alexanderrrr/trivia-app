import triviaService from '../services/TriviaService'

export default {

  state: {
    randomTrivies: [],
    triviaCategories: [],
    triviaByCategory: []
  },

  actions: {

    async getRandomTrivies( {commit} ) {
      try {
        const response = await triviaService.getTrivia()
        commit('SET_TRIVIES', response)
      } catch (e) {
          console.log(e);
      }
    },

    async getTriviaCategories( {commit} ){
      try {
        const response = await triviaService.getCategories()
        commit('SET_TRIVIA_CATEGORIES', response)
      } catch (e) {
          console.log(e);
      }
    },


    async getTriviesFromCategory( {commit}, id ){
      try {
        const response = await triviaService.getTriviesFromCategory(id)
        commit('SET_TRIVIES_BY_CATEGORY', response)
      } catch (e) {
          console.log(e);
      }
    },

  },

  mutations: {
    SET_TRIVIES(state, trivia){
      state.randomTrivies = []
      state.randomTrivies = trivia
    },

    SET_TRIVIA_CATEGORIES(state, cat){
      state.triviaCategories = cat
    },

    SET_TRIVIES_BY_CATEGORY (state , trivia) {
      state.triviaByCategory = trivia
    }
  },

  getters: {
    trivies: state => state.randomTrivies,
    triviaCategories: state => state.triviaCategories,
    triviaByCategory: state => state.triviaByCategory
  }

}
