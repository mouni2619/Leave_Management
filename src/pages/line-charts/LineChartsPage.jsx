// Constants
import { LINE_CHARTS_DATA } from '../../constants/chartConstants';

// Sections
import ChartTypes from '../../components/chart/ChartTypes';

/**
 * Line Charts
 */
export default function LineCharts() {
  return (
    <>
      <h3 className="text-center mt-3 fw-bold">Line Charts</h3>

      {/* Chart Types */}
      <ChartTypes data={LINE_CHARTS_DATA} />
    </>
  );
}
