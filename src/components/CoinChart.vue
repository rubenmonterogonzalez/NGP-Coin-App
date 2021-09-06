<template>
  <v-container>
    <div>
      <h1 class="text-center mt-15 mb-15 display-2 font-weight-bold">
        NGP Coin to USD Chart
      </h1>
    </div>
    <canvas v-draggable id="coin-chart" width="350" height="150"></canvas>

    <v-divider></v-divider>
  </v-container>
</template>

<script>
import { Draggable } from "draggable-vue-directive";
import Chart from "chart.js";
import axios from "axios";

export default {
  name: "CoinChart",
  directives: {
    Draggable,
  },
};

let LINEDATA = [];
let data = [];
let labels = [];

graph();


function graph() {
    axios.get('https://api.coindesk.com/v1/bpi/historical/close.json?start=2019-01-01&end=2019-12-31')
    .then((response) => {
    LINEDATA = { ...response.data.bpi };
    data = Object.keys(LINEDATA).map(key => LINEDATA[key]);
    labels = Object.keys(LINEDATA);
    new Chart(document.getElementById("coin-chart"), {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'NGP/USD',
            data: data,
            borderColor: "#47b784",
            backgroundColor: "rgba(71, 183,132,.5)",
          }
        ]
      }
    });
  });
}
</script>

<style>
canvas {
  z-index: 2;
}
</style>
