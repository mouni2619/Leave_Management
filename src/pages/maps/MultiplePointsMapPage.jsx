import { Icon } from 'leaflet';

// Constants
import { MAP_POINTER, MAP_ZOOM } from '../../constants/mapConstants';
import { MULTIPLE_POINTS } from '../../constants/pointsMapConstant';

// Components
import MandarkMultiplePointsMap from '../../components/maps/multiple-points-map/MandarkMultiplePointsMap';

// Page Constants
const LATITUDE = 12.992176277063903;
const LONGITUDE = 80.2438303535238;
const zoomLevel = MAP_ZOOM.zoomLevel13;

export default function MultiplePointsMapPage() {
  const center = [LATITUDE, LONGITUDE];

  // custom icon for the pointer marker
  const customIcon = new Icon({
    iconUrl: MAP_POINTER.iconUrl,
    iconSize: MAP_POINTER.iconSize,
  });

  const markers = MULTIPLE_POINTS;
  return (
    <div className="page-content">
      <MandarkMultiplePointsMap
        center={center}
        zoomLevel={zoomLevel}
        markers={markers}
        customIcon={customIcon}
      />
    </div>
  );
}
