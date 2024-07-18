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
const BOX_PLOTS_CHARTS_DATA = {
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

export default BOX_PLOTS_CHARTS_DATA;
