import Chuck from 'chucknorris-io'

const client = new Chuck();

class ChuckService {

  getRandomJoke(){
    return client.getRandomJoke().then(function (response) {
      return response
    }).catch(function (err) {
         console.log(err);
       });
  }
}

const chuckService = new ChuckService();
export default chuckService
