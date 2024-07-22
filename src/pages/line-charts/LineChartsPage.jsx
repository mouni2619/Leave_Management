// Constants
import LINE_CHARTS_DATA from './LineChartConstants';

// Sections
import Charts from '../../page-components/charts/Charts';

/**
 * Line Charts
 */
export default function LineCharts() {
  return (
    <>
      <h3 className="text-center mt-3 fw-bold">Line Charts</h3>

      {/* Charts */}
      <Charts data={LINE_CHARTS_DATA} />
    </>
  );
}
