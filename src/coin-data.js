export const coinChartData = {
    type: "line",
    data: {
      labels: ["January","February","March","April","May","June","July","August","September","October","November","December"],
      datasets: [
        {
          label: "NGP/USD",
          data: [869.47, 1541.2167, 1732.155, 1963.6267, 2235.5983, 2583.165, 4041.4583, 4029.9917, 4028.2917, 3669.5825, 3660.9583, 3658.6725],
          backgroundColor: "rgba(54,73,93,.5)",
          borderColor: "",
          borderWidth: 3
        },
        {
          label: "BTC/USD",
          data: [3693.47, 4413.2167, 5323.155, 6633.6267, 7353.5983, 8344.165, 8140.4583, 8294.9917, 8284.2917, 7669.5825, 7660.9583, 7658.6725],
          backgroundColor: "rgba(71, 183,132,.5)",
          borderColor: "#47b784",
          borderWidth: 2
        }
      ]
    },
    options: {
      responsive: true,
      lineTension: 1,
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              padding: 25
            }
          }
        ]
      }
    }
  };
  
  export default coinChartData;