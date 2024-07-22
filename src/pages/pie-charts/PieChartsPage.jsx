// Constants
import PIE_CHARTS_DATA from './PieChartConstants';

// Section
import Charts from '../../page-components/charts/Charts';

/**
 * Pie Charts
 */
export default function PieCharts() {
  return (
    <>
      <h3 className="text-center mt-3 fw-bold">Pie Charts</h3>

      {/* Charts */}
      <Charts data={PIE_CHARTS_DATA} />
    </>
  );
}
