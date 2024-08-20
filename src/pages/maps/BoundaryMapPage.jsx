import { GeoJSON } from 'react-leaflet';

// Constants
import { BoundaryPoints } from '../../constants/boundaryMapConstants';

// Components
import LLMap from '../../components/maps/LLMap';

export default function BoundaryMapPage() {
  // lat and lng coordinates for center
  const position = [13.082254666802685, 80.28040794212028];

  const geoJSONData = BoundaryPoints;
  return (
    <div className="page-content">
      <LLMap center={position} zoomLevel={11}>
        <GeoJSON data={geoJSONData} />
      </LLMap>
    </div>
  );
}
