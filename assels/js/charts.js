// Bar Chart (أعمدة)
var options = {
  series: [{
    name: 'Net Profit',
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
  }, {
    name: 'Revenue',
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
  }, {
    name: 'Free Cash Flow',
    data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
  }],
  chart: {
    type: 'bar',
    height: 350
  },
  colors: ['#6B8E23', '#C2B280', '#1F3B4D'], // أساس: زيتي + بيج + كحلي
  fill: {
    type: "gradient",
    gradient: {
      shade: 'light',
      type: "vertical",
      shadeIntensity: 0.5,
      gradientToColors: ['#9ACD32', '#F5F5DC', '#34495E'], // التدرج
      inverseColors: false,
      opacityFrom: 0.9,
      opacityTo: 0.9,
      stops: [0, 100]
    }
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      borderRadius: 5,
      borderRadiusApplication: 'end'
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  xaxis: {
    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
  },
  yaxis: {
    title: {
      text: '$ (thousands)'
    }
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "$ " + val + " thousands"
      }
    }
  }
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();


// // Pie Chart (دائرة)
// var options = {
//   series: [44, 55, 13, 43, 22],
//   chart: {
//     width: 500,
//     type: 'pie'
//   },
//   colors: ['#6B8E23', '#C2B280', '#1F3B4D', '#9ACD32', '#F5F5DC'], // أساس: زيتي + بيج + كحلي
//   fill: {
//     type: "gradient",
//     gradient: {
//       shade: "light",
//       type: "horizontal",
//       shadeIntensity: 0.6,
//       gradientToColors: ['#556B2F', '#D2B48C', '#34495E', '#808000', '#F5F5DC'],
//       inverseColors: false,
//       opacityFrom: 0.9,
//       opacityTo: 0.9,
//       stops: [0, 100]
//     }
//   },
//   labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
//   responsive: [{
//     breakpoint: 480,
//     options: {
//       chart: {
//         width: 350
//       },
//       legend: {
//         position: 'bottom'
//       }
//     }
//   }]
// };

// var chart = new ApexCharts(document.querySelector("#chart1"), options);
// chart.render();


// Pie Chart (دائرة)
// Pie Chart (دائرة)
var options = {
  series: [44, 55, 13, 43, 22],

  chart: {
    type: 'pie',
    width: '100%',
    height: 400
  },

  colors: ['#6B8E23', '#C2B280', '#1F3B4D', '#9ACD32', '#F5F5DC'],

  fill: {
    type: "gradient",
    gradient: {
      shade: "light",
      type: "horizontal",
      shadeIntensity: 0.6,
      gradientToColors: [
        '#556B2F',
        '#D2B48C',
        '#34495E',
        '#808000',
        '#F5F5DC'
      ],
      inverseColors: false,
      opacityFrom: 0.9,
      opacityTo: 0.9,
      stops: [0, 100]
    }
  },

  labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],

  legend: {
    position: 'right',
    fontSize: '14px'
  },

  responsive: [
    {
      breakpoint: 992,
      options: {
        chart: {
          width: '100%',
          height: 400
        },
        legend: {
          position: 'bottom'
        }
      }
    },
    {
      breakpoint: 768,
      options: {
        chart: {
          width: '100%',
          height: 320
        },
        legend: {
          position: 'bottom'
        }
      }
    },
    {
      breakpoint: 576,
      options: {
        chart: {
          width: '100%',
          height: 280
        },
        legend: {
          position: 'bottom'
        }
      }
    }
  ]
};

var chart = new ApexCharts(document.querySelector("#chart1"), options);
chart.render();