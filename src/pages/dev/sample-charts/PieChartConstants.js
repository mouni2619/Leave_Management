// Data
const PIE_CHARTS_DATA = {
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

export default PIE_CHARTS_DATA;
