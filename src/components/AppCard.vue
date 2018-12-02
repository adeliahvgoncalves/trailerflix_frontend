<template>
  <v-card
    class="mx-auto elevation-20"
    color="blue-grey lighten-3"
    style="max-width: 400px;padding:0px"
    dark
        
  >
    <v-layout justify-space-between>
      <v-flex xs8>
        <v-card-title primary-title>
          <div>
            <div class="headline">: {{ card.name }}</div>
            <div>A:Ellie Goulding</div>
            <div>Y:(2013)</div>
          </div>
        </v-card-title>
      </v-flex>
      <v-img
        class="shrink ma-2"
        contain
        height="125px"
        src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"
        style="flex-basis: 125px"
      ></v-img>
    </v-layout>
    <v-divider dark></v-divider>
    <v-card-actions class="pa-3">
      Rate this album
      <v-spacer></v-spacer>
      <span class="grey--text text--lighten-2 caption mr-2">
        ({{ card.rating }})
      </span>
      <v-rating
        v-model="card.rating"
        background-color="white"
        color="yellow accent-4"
        dense
        half-increments
        hover
        readonly
        size="18"
      ></v-rating>
      <v-spacer></v-spacer>
      <router-link
        to="/trailer/:id"
      >
            <v-btn icon 
            class="mr-0"
            color=#263238 >
              <v-icon color=#FFFFFF>mdi-chevron-right</v-icon>
            </v-btn>
              </router-link>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    props: ['card']
  }
</script>
