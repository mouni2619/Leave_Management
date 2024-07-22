// Data
const LINE_CHARTS_DATA = {
  'line-chart-1': {
    traces: {
      trace1: {
        x: [1, 2, 3, 4],
        y: [10, 15, 13, 17],
        mode: 'markers',
        name: 'Scatter',
      },
      trace2: {
        x: [2, 3, 4, 5],
        y: [16, 5, 11, 9],
        mode: 'lines',
        name: 'Lines',
      },
      trace3: {
        x: [1, 2, 3, 4],
        y: [12, 9, 15, 12],
        mode: 'lines+markers',
        name: 'Scatter and Lines',
      },
    },
    layout: {
      title: 'Line Graph',
      width: 700,
      height: 500,
      xaxis: {
        title: 'x-axis title',
      },
      yaxis: {
        title: 'y-axis title',
      },
    },
  },
  'line-chart-2': {
    traces: {
      trace1: {
        x: [52698, 43117],
        y: [53, 31],
        mode: 'markers',
        name: 'North America',
        text: ['United States', 'Canada'],
        marker: {
          color: 'rgb(164, 194, 244)',
          size: 12,
          symbol: 'diamond',
          line: {
            color: 'white',
            width: 0.5,
          },
        },
        type: 'scatter',
      },
      trace2: {
        x: [39317, 37236, 35650, 30066, 29570, 27159, 23557, 21046, 18007],
        y: [33, 20, 13, 19, 27, 19, 49, 44, 38],
        mode: 'markers',
        name: 'Europe',
        text: [
          'Germany',
          'Britain',
          'France',
          'Spain',
          'Italy',
          'Czech Rep.',
          'Greece',
          'Poland',
        ],
        marker: {
          color: 'rgb(255, 217, 102)',
          size: 12,
          symbol: 'square',
        },
        type: 'scatter',
      },
      trace3: {
        x: [42952, 37037, 33106, 17478, 9813, 5253, 4692, 3899],
        y: [23, 42, 54, 89, 14, 99, 93, 70],
        mode: 'markers',
        name: 'Asia/Pacific',
        text: [
          'Australia',
          'Japan',
          'South Korea',
          'Malaysia',
          'China',
          'Indonesia',
          'Philippines',
          'India',
        ],
        marker: {
          color: 'rgb(234, 153, 153)',
          size: 12,
        },
        type: 'scatter',
      },
    },
    layout: {
      title: 'Colored and Styled Scatter Graph',
      width: 650,
      height: 500,
      xaxis: {
        title: 'x-axis title',
        showgrid: false,
        zeroline: false,
      },
      yaxis: {
        title: 'y-axis title',
        showline: false,
        zeroline: false,
      },
    },
  },
  'line-chart-3': {
    traces: {
      trace1: {
        x: [1, 2, 3, 4, 5],
        y: [1, 3, 2, 3, 1],
        mode: 'lines',
        name: 'Solid',
        line: {
          dash: 'solid',
          width: 4,
        },
      },
      trace2: {
        x: [1, 2, 3, 4, 5],
        y: [6, 8, 7, 8, 6],
        mode: 'lines',
        name: 'dashdot',
        line: {
          dash: 'dashdot',
          width: 4,
        },
      },
      trace3: {
        x: [1, 2, 3, 4, 5],
        y: [11, 13, 12, 13, 11],
        mode: 'lines',
        name: 'Solid',
        line: {
          dash: 'solid',
          width: 4,
        },
      },
    },
    layout: {
      title: 'Line Dash Graph',
      width: 600,
      height: 500,
      xaxis: {
        title: 'x-axis title',
        range: [0.75, 5.25],
        autorange: false,
      },
      yaxis: {
        title: 'y-axis title',
        range: [0, 18.5],
        autorange: false,
      },
      legend: {
        y: 0.5,
        traceorder: 'reversed',
        font: {
          size: 16,
        },
      },
    },
  },
};

export default LINE_CHARTS_DATA;
