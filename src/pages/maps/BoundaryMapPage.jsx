// Constants
import { MAP_ZOOM } from '../../constants/mapConstants';
import { BoundaryPoints } from '../../constants/boundaryMapConstants';

// Components
import MandarkBoundaryMap from '../../components/maps/boundary-map/MandarkBoundaryMap';

const LATITUDE = 13.082254666802685;
const LONGITUDE = 80.28040794212028;
const zoomLevel = MAP_ZOOM.zoomLevel11;

export default function BoundaryMapPage() {
  // lat and lng coordinates for center
  const center = [LATITUDE, LONGITUDE];

  const geoJSONData = BoundaryPoints;
  return (
    <div className="page-content">
      <MandarkBoundaryMap
        center={center}
        zoomLevel={zoomLevel}
        geoJSONData={geoJSONData}
      />
    </div>
  );
}
