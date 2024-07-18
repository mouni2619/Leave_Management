// Data
const BAR_CHARTS_DATA = {
  'bar-chart-1': {
    traces: {
      trace1: {
        x: ['Liam', 'Sophie', 'Jacob', 'Mia', 'William', 'Olivia'],
        y: [8.0, 8.0, 12.0, 12.0, 13.0, 20.0],
        type: 'bar',
        text: [
          '4.17 below the mean',
          '4.17 below the mean',
          '0.17 below the mean',
          '0.17 below the mean',
          '0.83 above the mean',
          '7.83 above the mean',
        ],
        marker: {
          color: 'rgb(142,124,195)',
        },
      },
    },
    layout: {
      title: 'Bar Chart',
      width: 600,
      height: 500,
      font: {
        family: 'Raleway, sans-serif',
      },
      showlegend: false,
      xaxis: {
        title: 'x-axis title',
        tickangle: -45,
      },
      yaxis: {
        title: 'y-axis title',
        zeroline: false,
        gridwidth: 2,
      },
      bargap: 0.05,
    },
  },
  'bar-chart-2': {
    traces: {
      trace1: {
        x: ['giraffes', 'orangutans', 'monkeys'],
        y: [20, 14, 23],
        name: 'SF Zoo',
        type: 'bar',
      },
      trace2: {
        x: ['giraffes', 'orangutans', 'monkeys'],
        y: [12, 18, 29],
        name: 'LA Zoo',
        type: 'bar',
      },
    },
    layout: {
      title: 'Stacked Bar Chart',
      width: 600,
      height: 500,
      xaxis: {
        title: 'x-axis title',
      },
      yaxis: {
        title: 'y-axis title',
      },
      barmode: 'stack',
    },
  },
  'bar-chart-3': {
    traces: {
      trace1: {
        x: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
        y: [20, 14, 25, 16, 18, 22, 19, 15, 12, 16, 14, 17],
        type: 'bar',
        name: 'Primary Product',
        marker: {
          color: 'rgb(49,130,189)',
          opacity: 0.7,
        },
      },
      trace2: {
        x: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
        y: [19, 14, 22, 14, 16, 19, 15, 14, 10, 12, 12, 16],
        type: 'bar',
        name: 'Secondary Product',
        marker: {
          color: 'rgb(204,204,204)',
          opacity: 0.5,
        },
      },
    },
    layout: {
      title: 'Grouped Bar Chart with Rotated Labels',
      width: 600,
      height: 500,
      xaxis: {
        title: 'x-axis title',
        tickangle: -45,
      },
      yaxis: {
        title: 'y-axis title',
      },
      barmode: 'group',
    },
  },
};

export default BAR_CHARTS_DATA;
