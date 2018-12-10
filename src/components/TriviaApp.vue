<template>
  <div class="my-flex container">
    <div class="trivia-container">
      <ul v-for="trivia in visibleCollectionOfRandomTrivies" :key="trivia.id" class="list-group">
        <li><strong>Question:</strong> {{trivia.question}}</li>
        <li>
          <button @click="answer(trivia.answer)" class="btn btn-outline-success">Click for Answer</button>
        </li>
        <hr>
      </ul>
      <trivia-paginator
        :number-of-pages = "totalNumberOfPages"
        :current-page = "currentPage"
        @selected-page = "changeCurrentPage"
      />
      <b-alert
        show
        variant="warning"
        v-if="!trivies.length"
      >
        No Movies
      </b-alert>
    </div>
    <div class="categories-container">
      <h3>Select what category questions you want</h3>
      <form @submit.prevent="getTriviesFromCategory(selectedCategory)">
        <select v-model="selectedCategory">
          <option  v-for="cat in triviaCategories" :key="cat.id">{{cat.id}}</option>
        </select>
        <button type="submit" class="btn btn-outline-success">select</button>
      </form>
      <hr>
      <ul v-for="trivia in triviaByCategory" :key="trivia.id">
        <li><strong>Question:</strong> {{trivia.question}}</li>
        <li>
          <button @click="answer(trivia.answer)" class="btn btn-outline-success">Click for Answer</button>
        </li>
        <br>
      </ul>
    </div>
  </div>

</template>

<script>
import TriviaPaginator from './TriviaPaginator'
import {mapGetters, mapActions} from 'vuex'

export default {
  components: {
    TriviaPaginator
  },
  data(){
    return {
      currentPage: 1,
      showCat: false,
      selectedCategory: {
        id:0
      }
    }
  },

 created(){
   this.getRandomTrivies()
   this.getTriviaCategories()
   this.getTriviesFromCategory()

 },

 methods: {

   ...mapActions(['getRandomTrivies', 'getTriviaCategories','getTriviesFromCategory' ]),

   answer(answer){
     alert(answer)
   },

    changeCurrentPage(page) {
      this.currentPage = page;
    },

   showCategories(){
     if (!this.showCat) {
       this.showCat = true
     } else {
         this.showCat = false
     }
   }
 },

 computed: {
   ...mapGetters(['trivies', 'triviaCategories', 'triviaByCategory']),

   totalNumberOfPages() {
     return Math.ceil(this.trivies.length / 5)
   },
   visibleCollectionOfTriviesByCategory() {
      let bottomIndexLimit = (this.currentPage - 1) * 5
      let topIndexLimit = bottomIndexLimit + 5
      return this.triviaByCategory.filter(
        (trivi, index) => index >= bottomIndexLimit && index < topIndexLimit)
   },
   visibleCollectionOfRandomTrivies() {
      let bottomIndexLimit = (this.currentPage - 1) * 5
      let topIndexLimit = bottomIndexLimit + 5
      return this.trivies.filter(
        (trivi, index) => index >= bottomIndexLimit && index < topIndexLimit)
   },
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
