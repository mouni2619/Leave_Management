import { GeoJSON } from 'react-leaflet';

// Components
import LLMap from '../LLMap';

export default function LLBoundaryMap({ center, zoomLevel, geoJSONData }) {
  return (
    <LLMap center={center} zoom={zoomLevel}>
      <GeoJSON data={geoJSONData} />
    </LLMap>
  );
}
