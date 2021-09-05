<template>
  <v-container>
    <div class="about"></div>
    <div class="about-text p-2 mt-10 text-center">
      <h1 class="mb-5">ABOUT</h1>
      <p>
        NGP Coin is dedicated to investigate around the world of cryptocurrency
        and the energy to change the future of the world. We have been providing
        professional global energy procurement and management services for
        almost a decade and saving our clients millions in the process.
      </p>
      <p>
        Now, we launched our cryptocurrency that helps you to save in your
        bills. We have huge team working hard everyday to innovate the
        technologies of the future.
      </p>
      <v-divider></v-divider>

      <h2 class="mb-5 mt-5">OUR TEAM</h2>
      <v-row>
        <v-col
          v-for="item in items"
          :key="item.id"
          class="d-flex child-flex"
          cols="6"
          sm="4"
        >
          <v-img :src="item.src" aspect-ratio="1" class="grey lighten-2">
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "About",

  data() {
    return {
      items: [
        {
          id: 1,
          src: require("../assets/img/pro1.jpg"),
        },
        {
          id: 2,
          src: require("../assets/img/pro2.jpg"),
        },
        {
          id: 3,
          src: require("../assets/img/pro3.jpg"),
        },
        {
          id: 4,
          src: require("../assets/img/pro4.jpg"),
        },
        {
          id: 5,
          src: require("../assets/img/pro5.jpg"),
        },
        {
          id: 6,
          src: require("../assets/img/pro6.jpg"),
        },
      ],
    };
  },
};
</script>
