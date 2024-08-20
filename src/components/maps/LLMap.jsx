import { MapContainer, TileLayer } from 'react-leaflet';

// Constants
import { MAP_TILE_DETAILS } from '../../constants/mapConstants';

export default function LLMap({ center, zoomLevel, children }) {
  const { attribution, url } = MAP_TILE_DETAILS;
  return (
    <MapContainer center={center} zoom={zoomLevel} scrollWheelZoom={false}>
      <TileLayer attribution={attribution} url={url} />
      {children}
    </MapContainer>
  );
}
