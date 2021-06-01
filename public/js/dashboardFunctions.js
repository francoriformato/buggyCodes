/* There will be some JS Function for the dashboard of buggyCodes */

/* ChartJS */

function loadChart(exercises, logic, speed, creativity) {

var ctx = document.getElementById('myChart').getContext('2d');

    var data = {
  "labels": [
    "Exercises Done",
    "Programming Logic",
    "Speed",
    "Creativity"
  ],
  "datasets": [
    {
      "label": "userData",
      "backgroundColor": "#000000",
      "fill": false,
      "data": [
        exercises,
        logic,
        speed,
        creativity
      ],
      "borderColor": "#ff9300",
      "pointRadius": "10",
      "pointBackgroundColor": "#945200",
      "pointBorderColor": "#ff9300",
      "lineTension": 0.9,
      "pointBorderWidth": 5,
      "pointHoverBackgroundColor": "#ff9300",
      "pointHoverBorderColor": "#945200"
    }
  ]
};
    var options = {
  "title": {
    "display": false
  },
  "legend": {
    "display": false
  },
  "scales": {
    "yAxes": [
      {
        "ticks": {
          "beginAtZero": false,
          "display": false
        },
        "gridLines": {
          "display": false,
          "lineWidth": 1,
          "drawOnChartArea": false,
          "color": "#000000",
          "zeroLineColor": "#000000",
          "zeroLineWidth": 1,
          "drawTicks": false
        },
        "scaleLabel": {
          "display": false
        }
      }
    ],
    "xAxes": {
      "0": {
        "gridLines": {
          "drawOnChartArea": false,
          "offsetGridLines": false,
          "zeroLineColor": "#000000",
          "display": false,
          "lineWidth": 2,
          "drawTicks": false,
          "zeroLineWidth": 2,
          "color": "#000000"
        },
        "ticks": {
          "display": false,
          "beginAtZero": false
        },
        "display": false,
        "type": "linear",
        "scaleLabel": {
          "display": false
        },
        "position": "top"
      }
    }
  },
  "elements": {
    "line": {
      "borderColor": "#000000",
      "lineTension": 0
    }
  },
  "tooltips": {
    "enabled": false
  }
};

    var myChart = new Chart(ctx, {
        type: 'radar',
        data: data,
        options: options
    });

}

function openGame() {
    window.open('game_bin/index.html', '_self');
}

