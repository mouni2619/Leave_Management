// Constants
import { MAP_ZOOM } from '../../constants/mapConstants';

// Components
import LLVectorLayersMap from '../../components/maps/vector-layer-map/LLVectorLayersMap';

// Page Constants
const LATITUDE = 51.505;
const LONGITUDE = -0.09;
const zoomLevel = MAP_ZOOM.zoomLevel13;

export default function VectorMapPage() {
  const center = [LATITUDE, LONGITUDE];

  return (
    <div className="page-content">
      <LLVectorLayersMap center={center} zoomLevel={zoomLevel} />
    </div>
  );
}
