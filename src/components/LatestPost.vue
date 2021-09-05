<template>
  <v-container>
    <div class="mt-10 mb-15 text-center">
      <h2 class="text-decoration-underline">LATEST POST</h2>
    </div>
    <v-row>
      <v-col cols="12" md="4" v-for="item of items" :key="item.id">
        <v-card outlined class="mx-auto">
          <v-img class="black--text align-top" height="300px" :src="item.src">
            <v-card-title>{{ item.title }}</v-card-title>
          </v-img>

          <v-card-subtitle class="pb-0">
            {{ item.subtitle }}
          </v-card-subtitle>

          <v-card-text class="text--primary">
            <div>{{ item.description }}</div>
          </v-card-text>

          <v-card-actions>
            <v-btn color="black" text>
              More
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "LatestPost",

  data() {
    return {
      items: [
        {
          id: 1,
          title: "Top 10 blockchains you should have",
          subtitle: "Top 10 blockchains you should have",
          description:
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock.",
          src: require("../assets/img/post1.jpg"),
        },
        {
          id: 2,
          title: "Top 5 commodities you should look",
          subtitle: "Top 5 commodities you should look",
          description:
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock.",
          src: require("../assets/img/post2.jpg"),
        },
        {
          id: 3,
          title: "Top 3 electric cars you should buy",
          subtitle: "Top 3 electric cars you should buy",
          description:
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock.",
          src: require("../assets/img/post3.jpg"),
        },
      ],
    };
  },
};
</script>
