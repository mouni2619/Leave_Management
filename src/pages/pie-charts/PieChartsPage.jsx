// Constants
import { PIE_CHARTS_DATA } from '../../constants/chartConstants';

// Section
import ChartTypes from '../../components/chart/ChartTypes';

/**
 * Pie Charts
 */
export default function PieCharts() {
  return (
    <>
      <h3 className="text-center mt-3 fw-bold">Pie Charts</h3>

      {/* Chart Types */}
      <ChartTypes data={PIE_CHARTS_DATA} />
    </>
  );
}
