// Constants
import { MAP_ZOOM } from '../../constants/mapConstants';

// Components
import MandarkVectorLayersMap from '../../components/maps/vector-layer-map/MandarkVectorLayersMap';

// Page Constants
const LATITUDE = 51.505;
const LONGITUDE = -0.09;
const zoomLevel = MAP_ZOOM.zoomLevel13;

export default function VectorMapPage() {
  const center = [LATITUDE, LONGITUDE];

  return (
    <div className="page-content">
      <MandarkVectorLayersMap center={center} zoomLevel={zoomLevel} />
    </div>
  );
}
