// Constants
import BAR_CHARTS_DATA from './BarChartConstants';

// Section
import Charts from '../../page-components/charts/Charts';

/**
 * Bar Charts
 */
export default function BarCharts() {
  return (
    <>
      <h3 className="text-center mt-3 fw-bold">Bar Charts</h3>

      {/* Charts */}
      <Charts data={BAR_CHARTS_DATA} />
    </>
  );
}
