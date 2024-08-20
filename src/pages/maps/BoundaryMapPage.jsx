import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';

// Constants
import { BoundaryPoints } from '../../constants/boundaryMapConstants';

export default function BoundaryMapPage() {
  // lat and lng coordinates for center
  const position = [13.082254666802685, 80.28040794212028];

  const geoJSONData = BoundaryPoints;
  return (
    <div className="page-content">
      <MapContainer center={position} zoom={11} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <GeoJSON data={geoJSONData} />
      </MapContainer>
    </div>
  );
}
