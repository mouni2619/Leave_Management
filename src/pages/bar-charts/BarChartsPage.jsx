// Constants
import { BAR_CHARTS_DATA } from '../../constants/chartConstants';

// Section
import ChartTypes from '../../components/chart/ChartTypes';

/**
 * Bar Charts
 */
export default function BarCharts() {
  return (
    <div className="page-content">
      <h3 className="text-center fw-bold">Bar Charts</h3>

      {/* Chart Types */}
      <ChartTypes data={BAR_CHARTS_DATA} />
    </div>
  );
}
