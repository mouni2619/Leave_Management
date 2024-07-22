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
const HEAT_MAP_DATA = {
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

export default HEAT_MAP_DATA;
