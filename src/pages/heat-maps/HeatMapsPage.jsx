// Constants
import HEAT_MAP_DATA from './HeatMapConstants';

// Section
import Charts from '../../page-components/charts/Charts';

/**
 * Heat Maps
 */
export default function HeatMaps() {
  return (
    <>
      <h3 className="text-center mt-3 fw-bold">Heat Maps</h3>

      {/* Charts */}
      <Charts data={HEAT_MAP_DATA} />
    </>
  );
}
