// Constants
import BAR_CHARTS_DATA from '../../constants/BarChartConstants';

// Section
import ChartTypes from '../../components/chart/ChartTypes';

/**
 * Bar Charts
 */
export default function BarCharts() {
  return (
    <>
      <h3 className="text-center mt-3 fw-bold">Bar Charts</h3>

      {/* Chart Types */}
      <ChartTypes data={BAR_CHARTS_DATA} />
    </>
  );
}
