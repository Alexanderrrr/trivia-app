import Chuck from 'chucknorris-io'

const client = new Chuck();

class ChuckService {

  getRandomJoke(categ){
    return client.getRandomJoke(categ).then(function (response) {
      return response
    }).catch(function (err) {
         console.log(err);
       });
  }

  getAllCategories() {
    return client.getJokeCategories()
    .then(function (response) {
      return response
    })
    .catch(function (err) {
        console.log(err);
       });
  }

}

const chuckService = new ChuckService();
export default chuckService
