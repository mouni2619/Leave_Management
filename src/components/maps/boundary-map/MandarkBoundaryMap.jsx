import { GeoJSON } from 'react-leaflet';

// Components
import MandarkMap from '../MandarkMap';

export default function MandarkBoundaryMap({ center, zoomLevel, geoJSONData }) {
  return (
    <MandarkMap center={center} zoom={zoomLevel}>
      <GeoJSON data={geoJSONData} />
    </MandarkMap>
  );
}
