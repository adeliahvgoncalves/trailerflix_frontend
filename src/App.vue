<template>
<v-app dark>

  <div id="app">
    <div></div>
    <main>
    <router-view/>
    </main>
  </div>
  </v-app>
</template>


<script>

export default {
  name: 'app'
}
</script>
<style>
body {
    background-image: url('./assets/moviestiles.jpg');
    background-size: cover;
}

#startpage{
  background-image: url('./assets/moviestiles.jpg');
    background-repeat: repeat;
    padding-bottom: 100%
}
#homepage{
  background:none;
}
</style>



