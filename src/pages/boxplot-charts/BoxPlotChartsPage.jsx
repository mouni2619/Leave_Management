// Constants
import BOX_PLOTS_CHARTS_DATA from '../../constants/BoxPlotChartConstants';

// Section
import ChartTypes from '../../components/chart/ChartTypes';

/**
 * Box Plot Charts
 */
export default function BoxPlotCharts() {
  return (
    <>
      <h3 className="text-center mt-3 fw-bold">Box Plot Charts</h3>

      {/* Chart Types */}
      <ChartTypes data={BOX_PLOTS_CHARTS_DATA} />
    </>
  );
}
