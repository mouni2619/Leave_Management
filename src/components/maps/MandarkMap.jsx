import { useEffect } from 'react';
import { MapContainer, TileLayer, useMap, ZoomControl } from 'react-leaflet';

// Constants
import { MAP_TILES, MAP_ZOOM } from '../../constants/mapConstants';

// CSS
import 'leaflet/dist/leaflet.css';

// Page Constants
const DEFAULT_ZOOM = MAP_ZOOM.zoomLevel12;

// Page Components
function LLChangeView({ center, zoom }) {
  const [latitude, longitude] = center;
  const map = useMap();

  useEffect(() => {
    map.setView([latitude, longitude], zoom);
  }, [map, latitude, longitude, zoom]);
  return null;
}

/**
 * Custom Leaflet Map with utility functions
 */
export default function MandarkMap({
  center,
  zoom = DEFAULT_ZOOM,
  scrollWheelZoom = true,
  zoomControl = 'bottomright',
  titleName = 'osm',
  children,
}) {
  // Tiles
  const mapTileInfo = MAP_TILES[titleName];

  return (
    <MapContainer
      center={center}
      zoom={zoom}
      zoomControl={false}
      scrollWheelZoom={scrollWheelZoom}
      zoomSnap={0.1} //[zoomSnap,zoomDelta] => used to set the Level of ZoomIn-ZoomOut for Button (+/-)
      zoomDelta={0.5} //[zoomSnap,zoomDelta] => Documentation :: https://devdocs.io/leaflet~1.7/
    >
      <TileLayer attribution={mapTileInfo.attribution} url={mapTileInfo.url} />
      <LLChangeView center={center} zoom={zoom} />
      <ZoomControl position={zoomControl} />
      {children}
    </MapContainer>
  );
}
