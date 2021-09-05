<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to NGP Coin
        </h1>

        <p class="subheading font-weight-regular">
          The first coin that helps you to save in your energy bills,
          <br />Check out for more info
        </p>
        <v-btn><a href="/contact">More Info</a></v-btn>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">
          What's next?
        </h2>
      </v-col>
    </v-row>
    <v-divider></v-divider>
  </v-container>
</template>

<script>
export default {
  name: "Showcase",

  data: () => ({}),
};
</script>
