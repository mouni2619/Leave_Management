import { Icon } from 'leaflet';

// Constants
import { MAP_POINTER, MAP_ZOOM } from '../../constants/mapConstants';

// Components
import LLNormalMap from '../../components/maps/normal-map/LLNormalMap';

// Page Constants
const LATITUDE = 12.992176277063903;
const LONGITUDE = 80.2438303535238;
const zoomLevel = MAP_ZOOM.zoomLevel15;

export default function NormalMapPage() {
  // lat and lng coordinates for center
  const center = [LATITUDE, LONGITUDE];

  // custom icon for the pointer marker
  const customIcon = new Icon({
    iconUrl: MAP_POINTER.iconUrl,
    iconSize: MAP_POINTER.iconSize,
  });

  return (
    <div className="page-content">
      <LLNormalMap
        center={center}
        zoomLevel={zoomLevel}
        customIcon={customIcon}
      />
    </div>
  );
}
