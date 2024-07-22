// Constants
import HEAT_MAP_DATA from '../../constants/HeatMapConstants';

// Section
import ChartTypes from '../../components/chart/ChartTypes';

/**
 * Heat Maps
 */
export default function HeatMaps() {
  return (
    <>
      <h3 className="text-center mt-3 fw-bold">Heat Maps</h3>

      {/* Chart Types */}
      <ChartTypes data={HEAT_MAP_DATA} />
    </>
  );
}
