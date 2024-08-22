import { Icon } from 'leaflet';
import { Marker, Popup } from 'react-leaflet';

// Constants
import { MAP_POINTER } from '../../constants/mapConstants';
import { MULTIPLE_POINTS } from '../../constants/pointsMapConstant';

// Components
import LLMap from '../../components/maps/LLMap';

// Page Constants
const LATITUDE = 12.992176277063903;
const LONGITUDE = 80.2438303535238;
const zoomLevel = 13;

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
      <LLMap center={center} zoom={zoomLevel}>
        {markers.map((mark, i) => {
          const { geocode, popUp } = mark;
          return (
            <Marker key={i} position={geocode} icon={customIcon}>
              <Popup>{popUp}</Popup>
            </Marker>
          );
        })}
      </LLMap>
    </div>
  );
}
