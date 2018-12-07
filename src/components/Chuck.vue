<template>
  <div class="container">
    <h1>{{joke}}</h1>
    <form @submit.prevent="getJokes(jokeFromCategory)">
      <button class="btn btn-primary" type="submit" name="button">Get New Joke</button>
      <hr>
      <p>Select desired category</p>
      <select v-model="jokeFromCategory">
          <option v-for="category in categories" :key="category.id" >{{ category }}</option>
      </select>
      <p>You selected <strong>{{ jokeFromCategory }}</strong></p>
    </form>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  beforeRouteEnter(to, from, next){
    next(vm => {
      vm.getJokes()
      vm.getJokesCategories()
    })
  },


  data(){
    return {
      jokeFromCategory: ""
    }
  },

  computed: {
    ...mapGetters(['joke','categories'])

  },

  methods: {
    ...mapActions([
      'getJokes',
      'getJokesCategories'
    ])
  }
}
</script>

<style lang="css">
</style>
