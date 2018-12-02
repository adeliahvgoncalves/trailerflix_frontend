<template>
  <div id="app">
<v-app dark>


    <router-view/>
    </v-app>
  </div>
</template>


<script>
import HomePage from './components/HomePage'
export default {
  name: 'app',
  data () {
    
  },
  components: {
      'homePage': HomePage
  }
}
</script>