// Components
import MandarkMap from '../MandarkMap';
import MandarkVectorLayers from './MandarkVectorLayers';

export default function LLVectorLayersMap({ center, zoomLevel }) {
  return (
    <MandarkMap center={center} zoom={zoomLevel}>
      <MandarkVectorLayers center={center} />
    </MandarkMap>
  );
}
