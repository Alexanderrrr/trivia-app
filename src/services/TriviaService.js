import axios from 'axios'

export class TriviaService {
  constructor(){
    axios.defaults.baseURL = 'http://jservice.io/api/'
  }

  async getTrivia(){
    try {
      const response = await axios.get('random/', {
        params: {
          count: 30
        }
      })
      return response.data

    }
    catch (e){
      console.log(e);
    }



  }
}

const triviaService = new TriviaService()
export default triviaService
