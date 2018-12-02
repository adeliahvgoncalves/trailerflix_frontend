<template>
  <div>
    <div class="text-xs-center">
      <v-layout row child-flex wrap>
        <h1 style="color:white"> Trailerflix </h1>
        <router-link to="/login">
          <v-bottom-sheet>
            <v-btn slot="activator" color="purple" dark>
              Login
            </v-btn>
          </v-bottom-sheet>
        </router-link>
      </v-layout>
    </div>
     <app-footer></app-footer>
  </div>
  
</template>

<script>
import AppFooter from './AppFooter'

export default {
 components: {AppFooter},
  
  }
</script>

<style>
body {
    background-image: url('../assets/moviestiles.jpg');
    background-repeat: repeat;
}
 
</style>
