<template>
    <div>
        <app-searchbar></app-searchbar>
        <v-container grid-list-md text-xs-center>
            <v-layout row wrap>
                <!-- <v-flex xs6 d-flex> -->
                <v-flex v-for="trailer in trailers" :key="trailer.id" xs6>
                    <app-card v-bind:trailer="trailer" v-bind:key=trailer.id></app-card>
                </v-flex>
            </v-layout>
        </v-container>
          <v-layout row justify-end>
    <v-dialog v-model="dialog" scrollable max-width="300px">
      <v-btn slot="activator" color="purple" dark>Subscribe Interests</v-btn>
      <v-card>
        <v-card-title>Select a Category</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 300px;">
            <v-checkbox v-model="selected" multiple label="Comedy" value="comedy"></v-checkbox>
            <v-checkbox v-model="selected" multiple label="Romantic" value="romantic"></v-checkbox>
            <v-checkbox v-model="selected" multiple label="Fiction" value="fiction"></v-checkbox>
            <v-checkbox v-model="selected" multiple label="Sci-Fi" value="scifi"></v-checkbox>
            <v-checkbox v-model="selected" multiple label="Action" value="action"></v-checkbox>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
            <router-link to="/homePage">
          <v-btn color="purple" dark flat @click="dialog = true">Close</v-btn>
           </router-link>
             <router-link to="/homePage">
          <v-btn color="purple" dark flat @click="dialog = false">Save</v-btn>
          </router-link>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
        <app-footer></app-footer>
    </div>
</template>


<script>
    import AppSearchbar from './AppSearchbar'
    import AppCard from './AppCard'
    import AppFooter from './AppFooter'
    
    export default {
        components: {
            AppSearchbar,
            AppCard,
            AppFooter
        },
        data() {
            return {
                categories:[{
                    id:1,
                    category: "Comedy"
                }],
                trailers: [{
                        id: 1,
                        rating: 5,
                        name: "name 1",
                        category: "action"
                    },
                    {
                        id: 2,
                        rating: 3,
                        name: "name 2",
                        category: "sci-fi"
                    },
                    {
                        id: 3,
                        rating: 2,
                        name: "name 3",
                        category: "comedy"
                    },
                    {
                        id: 4,
                        rating: 4,
                        name: "name 4",
                        category: "romance"
                    }
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





