<template>
  <div>
    <h1>{{joke}}</h1>

  </div>

</template>

<script>
import {mapGetters} from 'vuex'

export default {
  beforeRouteEnter(to, from, next){
    next(vm => {
      vm.$store.dispatch('getJokes')
    })
  },

  data(){
    return {
      randomJokes: ""
    }
  },

  computed: {
    ...mapGetters(['joke'])
  }
}
</script>

<style lang="css">
</style>
