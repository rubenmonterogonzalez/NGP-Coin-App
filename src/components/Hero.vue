<template>
    <div class="heroBlock">
        <v-carousel hide-delimiters cycle height="93vh">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    >
    <v-row
            class="fill-height title mt-1 hidden-xs-only hidden-sm-only"
            align="center"
            justify="center"
          >
            <div class="text-h2 font-weight-medium">
              {{ item.title }}
            </div>
          </v-row></v-carousel-item>
  </v-carousel>
    </div>
</template>

<script>
export default {
  name: "Hero",

  data () {
      return {
        items: [
          {
            src: require("../assets/img/pic1.jpg"),
            title: "NGP Coin is..."
          },
          {
            src: require("../assets/img/pic2.jpg"),
            title: "the first cryptocurrency that..."
          },
          {
            src: require("../assets/img/pic3.jpg"),
            title: "helps you to save money..."
          },
          {
            src: require("../assets/img/pic4.jpg"),
            title: "from your bills"
          },
        ],
      }
    },
};
</script>
