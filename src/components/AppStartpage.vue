<template>
<div id="startpage">
  <v-container>
    <div class="text-xs-center">
      <v-layout row child-flex wrap>
        <h1 style="color:white"> Trailerflix </h1>
        <router-link to="/register">
          <v-bottom-sheet>
            <v-btn slot="activator" color="purple" dark>
              Register
            </v-btn>
          </v-bottom-sheet>
        </router-link>
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
    
  </v-container>
  </div>
</template>

<script>
  import AppFooter from './AppFooter'
  
  export default {
    components: {
      AppFooter
    },
  
  }
</script>

<style>
body {
    background-image: url('../assets/moviestiles.jpg');
    background-size: cover;
  }
</style>
