import Plot from 'react-plotly.js';

/**
 * Reference Links - Plotly
 * Graph Options : https://plotly.com/javascript/reference/scatter/
 * Symbols : https://plotly.com/javascript/reference/#box-marker-symbol
 */

// Page Constants
const DEFAULT_TRACE = {
  // Chart type ("scatter","bar","pie")
  type: 'scatter',

  // X-axis data
  x: [1, 2, 3, 4],

  // Y-axis data
  y: [12, 9, 15, 12],

  // "lines", "markers", "lines+markers", "lines+markers+text"
  mode: 'lines+markers',

  // Name for the trace
  name: 'Trace 1',

  // Name for each points
  text: ['text-1', 'text-2', 'text-3', 'text-4'],

  textposition: 'inside', // To show anotations inside, outside, ...

  hoverinfo: 'x+y+name', // On hovering it shows the values added here. Example :(1,12) Trace 1

  orientation: 'h', // Horizontal or Vertical orientation

  // For heat map
  colorscale: [
    [0, '#3D9970'], // Whenever the value is zero this color is used automatically
    [1, '#001f3f'], // Whenever the value is one this color is used automatically
  ],

  // Marker styles
  marker: {
    color: 'rgb(128, 0, 128)',

    // Radius of the marker
    size: 8, // To give size for each points give inside an array. Example :[10,20,25,30]

    symbol: 'square', // We can provide symbol for marker. Refer : https://plotly.com/javascript/reference/#box-marker-symbol

    // Border around the marker
    line: {
      color: 'white',
      width: 0.5,
    },
  },

  // Line styles
  line: {
    color: 'red',
    width: 1,

    dash: 'solid', // Type of the line ("solid","dashdot",...)
  },
};

const DEFAULT_LAYOUT = {
  // Graph title
  title: 'Graph Title',

  // Graph size
  width: 500,
  height: 500,

  showlegend: false, // To show or hide legend

  // Styles for x-axis
  xaxis: {
    title: 'X-axis',
    showgrid: false, // To hide or show grid inside the graph
    showline: false, // Outer most line of the graph
  },

  // Styles for y-axis
  yaxis: {
    title: 'Y-axis',
    showgrid: false,
    showline: false,
  },
};

const DEFAULT_CONFIG = {
  scrollZoom: false,
  staticPlot: false,
  displayModeBar: false,
  responsive: false,
};

/**
 * Chart
 * @param {*} divId : Id
 * @param {*} divClassName : Class name for div
 * @param {*} data : Array of traces
 * @param {*} layout : Chart layout
 * @param {*} config : Configuration for chart functionality
 */
export default function Chart({
  divId = '',
  divClassName = '',
  data = [DEFAULT_TRACE],
  layout = DEFAULT_LAYOUT,
  config = DEFAULT_CONFIG,
}) {
  return (
    <Plot
      divId={divId}
      className={divClassName}
      data={data}
      layout={layout}
      config={config}
    />
  );
}
