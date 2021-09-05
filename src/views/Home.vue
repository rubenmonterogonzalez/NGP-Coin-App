<template>
  <v-main>
    <Hero />
    <Showcase />
    <CoinChart />
    <About />
    <LatestPost />
  </v-main>
</template>

<script>
import Hero from "../components/Hero.vue";
import Showcase from "../components/Showcase.vue";
import CoinChart from "../components/CoinChart.vue";
import About from "../components/About.vue";
import LatestPost from "../components/LatestPost.vue";

export default {
  name: "Home",

  components: {
    Hero,
    Showcase,
    About,
    LatestPost,
    CoinChart,
  },

  data: () => ({}),
};
</script>
