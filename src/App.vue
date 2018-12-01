<template>
  <div id="app">

    <router-view/>
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