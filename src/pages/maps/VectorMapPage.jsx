// Components
import LLMap from '../../components/maps/LLMap';
import LLVectorLayers from '../../components/maps/LLVectorLayers';

// Page Constants
const LATITUDE = 51.505;
const LONGITUDE = -0.09;
const zoomLevel = 13;

export default function VectorMapPage() {
  const center = [LATITUDE, LONGITUDE];

  return (
    <div className="page-content">
      <LLMap center={center} zoom={zoomLevel}>
        <LLVectorLayers center={center} />
      </LLMap>
    </div>
  );
}
