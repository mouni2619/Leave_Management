// Constants
import LINE_CHARTS_DATA from './LineChartConstants';
import BAR_CHARTS_DATA from './BarChartConstants';
import PIE_CHARTS_DATA from './PieChartConstants';
import BOX_PLOTS_CHARTS_DATA from './BoxPlotChartConstants';
import HEAT_MAP_DATA from './HeatMapConstants';

// Components
import Chart from '../../../components/chart/Chart';

// Page Constants
const CHARTS = [
  {
    title: 'Line Chart',
    data: LINE_CHARTS_DATA,
  },
  {
    title: 'Bar Chart',
    data: BAR_CHARTS_DATA,
  },
  {
    title: 'Pie Chart',
    data: PIE_CHARTS_DATA,
  },
  {
    title: 'Box Plots Chart',
    data: BOX_PLOTS_CHARTS_DATA,
  },
  {
    title: 'Heatmap',
    data: HEAT_MAP_DATA,
  },
];

// Page Components
function Charts({ data = {} }) {
  return (
    <div className="row">
      {Object.keys(data).map((eachKey) => {
        const { traces = {}, layout = {} } = data[eachKey];

        // Constructing array of traces
        const chartData = Object.values(traces);

        return (
          <div className="col-4" key={eachKey}>
            <Chart data={chartData} layout={layout} />
          </div>
        );
      })}
    </div>
  );
}

/**
 * Sample Line Charts
 */
export default function SampleCharts() {
  return (
    <>
      {CHARTS.map((chart, idx) => {
        const { title = '', data = '' } = chart || {};

        return (
          <div key={idx}>
            <h3 className="m-4 text-center fw-bold">{title}</h3>

            <Charts data={data} />
          </div>
        );
      })}
    </>
  );
}
