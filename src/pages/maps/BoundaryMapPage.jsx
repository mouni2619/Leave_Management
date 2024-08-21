import { GeoJSON } from 'react-leaflet';

// Constants
import { BoundaryPoints } from '../../constants/boundaryMapConstants';

// Components
import LLMap from '../../components/maps/LLMap';

const LATITUDE = 13.082254666802685;
const LONGITUDE = 80.28040794212028;
const zoomLevel = 11;

export default function BoundaryMapPage() {
  // lat and lng coordinates for center
  const position = [LATITUDE, LONGITUDE];

  const geoJSONData = BoundaryPoints;
  return (
    <div className="page-content">
      <LLMap center={position} zoom={zoomLevel}>
        <GeoJSON data={geoJSONData} />
      </LLMap>
    </div>
  );
}
