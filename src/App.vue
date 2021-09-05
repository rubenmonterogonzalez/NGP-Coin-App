<template>
  <v-app>
    <v-app-bar app color="white" flat>
      <Header />
    </v-app-bar>

    <!-- <v-main>
      <Hero />
      <v-divider></v-divider>
      <Showcase />
      <v-divider></v-divider>
      <Chart />
      <v-divider></v-divider>
      <About />
      <v-divider></v-divider>
      <LatestPost />
      <v-divider></v-divider>
    </v-main> -->

    <router-view></router-view>

    <v-footer>
      <Footer />
    </v-footer>
  </v-app>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",

  components: {
    Header,
    Footer,
  },

  data: () => ({}),
};
</script>
