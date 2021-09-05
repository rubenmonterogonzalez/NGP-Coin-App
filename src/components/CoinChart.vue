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
import coinChartData from "../coin-data.js";

export default {
  name: "CoinChart",
  data() {
    return {
      coinChartData: coinChartData,
    };
  },
  mounted() {
    const ctx = document.getElementById("coin-chart");
    new Chart(ctx, this.coinChartData);
  },
  directives: {
    Draggable,
  },
};
</script>

<style>
canvas {
  z-index: 2;
}
</style>
