<template>
  <h1>Counter-vuex</h1>
  <h2>Direct access: {{$store.state.counter.count}} </h2>
  <h2>Computed: {{countComputed}} </h2>
  <h1>MapState:</h1>
  <h2>counter:{{count}}</h2>
  <h2>mutation:{{mutation}}</h2>
    <h2>Geetters:{{$store.getters['counter/squaredCount']}}</h2>
  <button @click="increment">+1</button>
  <button @click="incrementby">+5</button>
  <button @click="incrementRandomly" :disabled="isLoading">Random</button>


</template>

<script>
import { mapState,mapActions } from 'vuex'


export default {
    name: 'counter-component',

    computed:{ 
       // ...mapState(['count'])
        ...mapState({
            count: state => state.counter.count,
            mutation: state => state.counter.lastmutation,
            isLoading: state => state.counter.isLoading
        })
    // ,computed: {
        ,countComputed() {
            return this.$store.state.counter.count
        }
    }
    ,methods: {
        increment() {
            this.$store.commit('counter/increment')
        },
        incrementby() {
            this.$store.commit('counter/incrementBy', 5)
        },
        ...mapActions('counter',['incrementRandomly'])
        // ...mapActions({
        //     incrementRandomly: 'incrementRandomly'
        // })
       
    }

}
</script>

