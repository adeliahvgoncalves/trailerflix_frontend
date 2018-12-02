<template>
    <div>
        <app-searchbar></app-searchbar>
         <v-layout row>
              <v-flex xs6 order-lg2>
                <app-card
                    v-for="card in cards" 
                    v-bind:card="card"
                    v-bind:key=card.id
                ></app-card>
              </v-flex>
         </v-layout>
    </div>
</template>


<script>

import AppSearchbar from './AppSearchbar'
import AppCard from './AppCard'

export default {
 components: {AppSearchbar, AppCard},
 data () {
     return {
        cards: [
            {id: 1, rating: 5, name: "name 1"},
            {id: 2, rating: 3, name: "name 2"}, 
            {id: 3, rating: 2, name: "name 3"}, 
            {id: 4, rating: 4, name: "name 4"}
        ]
    }
 } 
}
</script>



