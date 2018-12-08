<template>
  <div>
    <ul v-for="trivia in trivies" :key="trivia.id" class="list-group">
      <li><strong>Question:</strong> {{trivia.question}}</li>
      <li><strong>answer:</strong> {{trivia.answer}}</li>
      <hr>
    </ul>
  </div>

</template>

<script>
import triviaService from '../services/TriviaService'
import {mapGetters, mapActions} from 'vuex'

export default {

 created(){
   this.getRandomTrivies()
 },

 methods: {
   ...mapActions(['getRandomTrivies'])
 },

 computed: {
   ...mapGetters(['trivies'])
 }

}
</script>

<style lang="css">
</style>
