import { Marker, Popup } from 'react-leaflet';

// Components
import MandarkMap from '../MandarkMap';

export default function MandarkMultiplePointsMap({
  center = [],
  zoomLevel,
  markers = [],
  customIcon,
}) {
  return (
    <MandarkMap center={center} zoom={zoomLevel}>
      {markers.map((mark, i) => {
        const { geocode, popUp } = mark;
        return (
          <Marker key={i} position={geocode} icon={customIcon}>
            <Popup>{popUp}</Popup>
          </Marker>
        );
      })}
    </MandarkMap>
  );
}
