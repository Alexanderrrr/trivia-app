import axios from 'axios'

export class TriviaService {
  constructor(){
    axios.defaults.baseURL = 'http://jservice.io/api/'
  }
  async getTrivia(){
    try {
      const response = await axios.get('random/', {
        params: {
          count: 30,
        }
      })
      return response.data
    }
    catch (e){
      console.log(e);
    }
  }

  async getCategories() {
    try {
      const response = await axios.get('categories/', {
        params: {
          count: 10
        }
      })
      return response.data
    } catch (e) {
        console.log(e);
    }
  }

  async getTriviesFromCategory(id){
    try {
      const response = await axios.get('category/' ,{params: {id:id}})
      return response.data.clues
    }
    catch (e){
      console.log(e);
    }
  }
}

const triviaService = new TriviaService()
export default triviaService
