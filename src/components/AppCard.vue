<template>
  <v-card
    class="mx-auto elevation-20"
    color="purple"
    dark
    style="max-width: 400px;"
  >
    <v-layout justify-space-between>
      <v-flex xs8>
        <v-card-title primary-title>
          <div>
            <div class="headline">N: {{ card.name }}</div>
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
        R({{ card.rating }})
      </span>
      <v-rating
        v-model="card.rating"
        background-color="white"
        color="yellow accent-4"
        dense
        half-increments
        hover
        size="18"
      ></v-rating>
      <v-spacer></v-spacer>
            <v-btn icon class="mr-0">
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    props: ['card']
    // data: () => ({
    //   rating: 4.3
    // })
  }
</script>
