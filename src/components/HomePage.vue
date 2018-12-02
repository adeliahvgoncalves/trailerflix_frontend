<template>
    <div>
        <app-searchbar></app-searchbar>
         <v-container grid-list-md text-xs-center>
         <v-layout row wrap>
            <!-- <v-flex xs6 d-flex> -->
            <v-flex
              v-for="card in cards"
              :key="card.id"
              xs6
            >
                <app-card
                    
                    v-bind:card="card"
                    v-bind:key=card.id
                ></app-card>
              </v-flex>
         </v-layout>
         </v-container>
         <app-footer></app-footer>
    </div>
</template>


<script>

import AppSearchbar from './AppSearchbar'
import AppCard from './AppCard'
import AppFooter from './AppFooter'

export default {
 components: {AppSearchbar, AppCard, AppFooter},
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

<style>
    
    body {
  background: black;
}
</style>





