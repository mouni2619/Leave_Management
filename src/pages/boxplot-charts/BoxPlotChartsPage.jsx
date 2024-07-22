// Constants
import BOX_PLOTS_CHARTS_DATA from './BoxPlotChartConstants';

// Section
import Charts from '../../page-components/charts/Charts';

/**
 * Box Plot Charts
 */
export default function BoxPlotCharts() {
  return (
    <>
      <h3 className="text-center mt-3 fw-bold">Box Plot Charts</h3>

      {/* Charts */}
      <Charts data={BOX_PLOTS_CHARTS_DATA} />
    </>
  );
}
