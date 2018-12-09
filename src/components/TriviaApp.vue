<template>
  <div class="my-flex container">
    <div class="trivia-container">
      <ul v-for="trivia in trivies" :key="trivia.id" class="list-group">
        <li><strong>Question:</strong> {{trivia.question}}</li>
        <li>
          <button @click="answer(trivia.answer)"class="btn btn-outline-success">Click for Answer</button>
        </li>
        <hr>
      </ul>
    </div>
    <div class="categories-container">
      <h3>Select what category questions you want</h3>
      <ul v-for="cat in triviaCategories" :key="cat.id">
          <button @click="getTriviesFromCategory(cat.id)" class="btn btn-outline-success">{{ cat.title }}</button>
      </ul>
    </div>
  </div>

</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {

 created(){
   this.getRandomTrivies()
   this.getTriviaCategories()
   this.getTriviesFromCategory()

 },

 methods: {

   ...mapActions(['getRandomTrivies', 'getTriviaCategories','getTriviesFromCategory' ]),

   answer(answer){
     alert(answer)
   }
 },

 computed: {
   ...mapGetters(['trivies', 'triviaCategories'])
 }

}
</script>

<style lang="css">
  .my-flex {
    display: flex;
  }

  .trivia-container{
    width: 49%;
    border-right: 3px solid green
  }

  .categories-container {
    width: 49%
  }
</style>
