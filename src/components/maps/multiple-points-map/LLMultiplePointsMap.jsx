import { Marker, Popup } from 'react-leaflet';

// Components
import LLMap from '../LLMap';

export default function LLMultiplePointsMap({
  center = [],
  zoomLevel,
  markers = [],
  customIcon,
}) {
  return (
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
  );
}
