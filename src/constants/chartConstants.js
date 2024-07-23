// Bar Chart
export const BAR_CHARTS_DATA = {
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

// Box Plot Chart
const BOX_PLOT_CHART_Y0_AXIS_DATA = [];
const BOX_PLOT_CHART_Y1_AXIS_DATA = [];

for (var i = 0; i < 50; i++) {
  BOX_PLOT_CHART_Y0_AXIS_DATA[i] = Math.random();
  BOX_PLOT_CHART_Y1_AXIS_DATA[i] = Math.random() + 1;
}

const BOX_PLOT_CHART_AXIS_DATA = [
  'day 1',
  'day 1',
  'day 1',
  'day 1',
  'day 1',
  'day 1',

  'day 2',
  'day 2',
  'day 2',
  'day 2',
  'day 2',
  'day 2',
];

// Data
export const BOX_PLOTS_CHARTS_DATA = {
  'box-plot-chart-1': {
    // Traces
    traces: {
      trace1: {
        y: BOX_PLOT_CHART_Y0_AXIS_DATA,
        type: 'box',
      },
      trace2: {
        y: BOX_PLOT_CHART_Y1_AXIS_DATA,
        type: 'box',
      },
    },

    // Layout
    layout: {
      title: 'Basic Box Plot Graph',
      width: 600,
      height: 500,
      xaxis: {
        title: 'x-axis title',
        zeroline: false,
      },
      yaxis: {
        title: 'y-axis title',
        zeroline: false,
      },
    },
  },
  'box-plot-chart-2': {
    traces: {
      trace1: {
        y: [0.2, 0.2, 0.6, 1.0, 0.5, 0.4, 0.2, 0.7, 0.9, 0.1, 0.5, 0.3],
        x: BOX_PLOT_CHART_AXIS_DATA,
        name: 'kale',
        marker: { color: '#3D9970' },
        type: 'box',
      },
      trace2: {
        y: [0.6, 0.7, 0.3, 0.6, 0.0, 0.5, 0.7, 0.9, 0.5, 0.8, 0.7, 0.2],
        x: BOX_PLOT_CHART_AXIS_DATA,
        name: 'radishes',
        marker: { color: '#FF4136' },
        type: 'box',
      },
      trace3: {
        y: [0.1, 0.3, 0.1, 0.9, 0.6, 0.6, 0.9, 1.0, 0.3, 0.6, 0.8, 0.5],
        x: BOX_PLOT_CHART_AXIS_DATA,
        name: 'carrots',
        marker: { color: '#FF851B' },
        type: 'box',
      },
    },
    layout: {
      title: 'Grouped Vertical Box Plot',
      width: 600,
      height: 500,
      xaxis: {
        title: 'x-axis title',
        zeroline: false,
      },
      yaxis: {
        title: 'y-axis title',
        zeroline: false,
      },
      boxmode: 'group',
    },
  },
  'box-plot-chart-3': {
    traces: {
      trace1: {
        x: [0.2, 0.2, 0.6, 1.0, 0.5, 0.4, 0.2, 0.7, 0.9, 0.1, 0.5, 0.3],
        y: BOX_PLOT_CHART_AXIS_DATA,
        name: 'kale',
        marker: { color: '#3D9970' },
        type: 'box',
        boxmean: false,
        orientation: 'h',
      },
      trace2: {
        x: [0.6, 0.7, 0.3, 0.6, 0.0, 0.5, 0.7, 0.9, 0.5, 0.8, 0.7, 0.2],
        y: BOX_PLOT_CHART_AXIS_DATA,
        name: 'radishes',
        marker: { color: '#FF4136' },
        type: 'box',
        boxmean: false,
        orientation: 'h',
      },
      trace3: {
        x: [0.1, 0.3, 0.1, 0.9, 0.6, 0.6, 0.9, 1.0, 0.3, 0.6, 0.8, 0.5],
        y: BOX_PLOT_CHART_AXIS_DATA,
        name: 'carrots',
        marker: { color: '#FF851B' },
        type: 'box',
        boxmean: false,
        orientation: 'h',
      },
    },
    layout: {
      title: 'Grouped Horizontal Box Plot',
      width: 600,
      height: 500,
      xaxis: {
        title: 'x-axis title',
        zeroline: false,
      },
      yaxis: {
        title: 'y-axis title',
        zeroline: false,
      },
      boxmode: 'group',
    },
  },
};

// Heat maps
const ANNOTATED_HEATMAP_X_VALUES = ['A', 'B', 'C', 'D', 'E'];

const ANNOTATED_HEATMAP_Y_VALUES = ['W', 'X', 'Y', 'Z'];

const ANNOTATED_HEATMAP_Z_VALUES = [
  [0.0, 0.0, 0.75, 0.75, 0.0],
  [0.0, 0.0, 0.75, 0.75, 0.0],
  [0.75, 0.75, 0.75, 0.75, 0.75],
  [0.0, 0.0, 0.0, 0.75, 0.0],
];

const colorscaleValue = [
  [0, '#3D9970'], // Whenever the value is zero this color is used automatically
  [1, '#001f3f'], // Whenever the value is one this color is used automatically
];

// Function to addd annotations
function annotations() {
  const annotations = [];

  for (var i = 0; i < ANNOTATED_HEATMAP_Y_VALUES.length; i++) {
    for (var j = 0; j < ANNOTATED_HEATMAP_X_VALUES.length; j++) {
      const currentValue = ANNOTATED_HEATMAP_Z_VALUES[i][j];

      let textColor = '';

      // Setting color to corresponding values
      if (currentValue !== 0.0) {
        textColor = 'white';
      } else {
        textColor = 'black';
      }

      const result = {
        x: ANNOTATED_HEATMAP_X_VALUES[j],
        y: ANNOTATED_HEATMAP_Y_VALUES[i],
        text: ANNOTATED_HEATMAP_Z_VALUES[i][j],
        showarrow: false,
        font: {
          color: textColor,
        },
      };

      annotations.push(result);
    }
  }

  return annotations;
}

// Data
export const HEAT_MAP_DATA = {
  'heat-map-1': {
    traces: {
      trace1: {
        z: [
          [1, null, 30, 50, 1],
          [20, 1, 60, 80, 30],
          [30, 60, 1, -10, 20],
        ],
        x: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        y: ['Morning', 'Afternoon', 'Evening'],
        type: 'heatmap',
        hoverongaps: false, // For empty values hover text will not come
      },
    },
    layout: {
      title: 'Basic Heatmap',
      width: 600,
      height: 500,
      xaxis: {
        title: 'x-axis title',
        zeroline: false,
      },
      yaxis: {
        title: 'y-axis title',
        zeroline: false,
      },
    },
  },
  'heat-map-2': {
    traces: {
      trace1: {
        x: ANNOTATED_HEATMAP_X_VALUES,
        y: ANNOTATED_HEATMAP_Y_VALUES,
        z: ANNOTATED_HEATMAP_Z_VALUES,
        type: 'heatmap',
        colorscale: colorscaleValue,
        showscale: false,
      },
    },
    layout: {
      title: 'Annotated Heatmap',
      annotations: annotations(),
      width: 600,
      height: 500,
      xaxis: {
        title: 'x-axis title',
        ticks: '',
        side: 'bottom',
      },
      yaxis: {
        title: 'y-axis title',
        ticks: '',
        ticksuffix: ' ',
      },
    },
  },
};

// Line Chart
export const LINE_CHARTS_DATA = {
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

// Pie Charts
export const PIE_CHARTS_DATA = {
  'pie-chart-1': {
    traces: {
      trace1: {
        values: [19, 26, 55],
        labels: ['Residential', 'Non-Residential', 'Utility'],
        type: 'pie',
      },
    },
    layout: {
      title: 'Basic Pie Chart',
      width: 600,
      height: 500,
    },
  },
  'pie-chart-2': {
    traces: {
      trace1: {
        values: [16, 15, 12, 6, 5, 4, 42],
        labels: [
          'US',
          'China',
          'European Union',
          'Russian Federation',
          'Brazil',
          'India',
          'Rest of World',
        ],
        domain: { column: 0 },
        name: 'GHG Emissions',
        hoverinfo: 'label+percent+name',
        hole: 0.4,
        type: 'pie',
      },
      trace2: {
        values: [27, 11, 25, 8, 1, 3, 25],
        labels: [
          'US',
          'China',
          'European Union',
          'Russian Federation',
          'Brazil',
          'India',
          'Rest of World',
        ],
        text: 'CO2',
        textposition: 'inside',
        domain: { column: 1 },
        name: 'CO2 Emissions',
        hoverinfo: 'label+percent+name',
        hole: 0.4,
        type: 'pie',
      },
    },
    layout: {
      title: 'Donut Pie Chart',
      height: 500,
      width: 600,
      annotations: [
        {
          font: {
            size: 20,
          },
          showarrow: false,
          text: 'GHG',
          x: 0.17,
          y: 0.5,
        },
        {
          font: {
            size: 20,
          },
          showarrow: false,
          text: 'CO2',
          x: 0.82,
          y: 0.5,
        },
      ],
      showlegend: false,
      grid: { rows: 1, columns: 2 },
    },
  },
  'pie-chart-3': {
    traces: {
      trace1: {
        type: 'pie',
        values: [2, 3, 4, 4],
        labels: ['Wages', 'Operating expenses', 'Cost of sales', 'Insurance'],
        textinfo: 'label+percent',
        textposition: 'outside',
        automargin: true,
      },
    },
    layout: {
      title: 'Pie Chart - 2',
      width: 500,
      height: 500,
      showlegend: false,
    },
  },
};
