<template>
    <div>
        <app-searchbar></app-searchbar>
        <app-card
            v-for="card in cards" 
            :key=card.id
        ></app-card>
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
            {id: 1, name: "lol1"}, 
            {id: 2, name: "lol2"}, 
            {id: 3, name: "lol3"}, 
            {id: 4, name: "lol4"}
        ]
    }
 } 
}
</script>



