import { Icon } from 'leaflet';
import { Marker, Popup } from 'react-leaflet';

// Constants
import { MAP_POINTER } from '../../constants/mapConstants';

// Components
import LLMap from '../../components/maps/LLMap';

export default function NormalMapPage() {
  // lat and lng coordinates for center
  const position = [12.992176277063903, 80.2438303535238];

  // custom icon for the pointer marker
  const customIcon = new Icon({
    iconUrl: MAP_POINTER.iconUrl,
    iconSize: MAP_POINTER.iconSize,
  });
  return (
    <div className="page-content">
      <LLMap center={position} zoomLevel={15}>
        <Marker position={position} icon={customIcon}>
          <Popup>AdMavin</Popup>
        </Marker>
      </LLMap>
    </div>
  );
}
