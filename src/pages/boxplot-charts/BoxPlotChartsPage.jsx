// Constants
import { BOX_PLOTS_CHARTS_DATA } from '../../constants/chartConstants';

// Section
import ChartTypes from '../../components/chart/ChartTypes';

/**
 * Box Plot Charts
 */
export default function BoxPlotCharts() {
  return (
    <div className="page-content">
      <h3 className="text-center fw-bold">Box Plot Charts</h3>

      {/* Chart Types */}
      <ChartTypes data={BOX_PLOTS_CHARTS_DATA} />
    </div>
  );
}
