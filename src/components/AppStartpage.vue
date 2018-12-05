<template>
<div id="startpage">
  <v-container>
    <div class="text-xs-center" style="margin-top:3%">
      <v-layout row child-flex wrap>
        <div style="text-align:center">
        <h1 style="color:white; font-size:60px"> Trailerflix </h1>
        </div>
        <div style="vertical-align: middle;margin-top:2%">
        <router-link to="/register">
          <v-bottom-sheet>
            <v-btn slot="activator" color="purple" dark >
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
        </div>
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

</style>
