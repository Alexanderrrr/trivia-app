import triviaService from '../services/TriviaService'

export default {

  state: {
    randomTrivies: []
  },

  actions: {

    async getRandomTrivies({commit}) {
      try {
        const response = await triviaService.getTrivia()
        commit('SET_TRIVIES', response)
        return response
      } catch (e) {
          console.log(e);
      }
    }

  },

  mutations: {
    SET_TRIVIES(state, trivia){
      state.randomTrivies = trivia
    }
  },

  getters: {
    trivies: state => state.randomTrivies
  }

}
