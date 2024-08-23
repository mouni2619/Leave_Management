// Components
import LLMap from '../LLMap';
import LLVectorLayers from './LLVectorLayers';

export default function LLVectorLayersMap({ center, zoomLevel }) {
  return (
    <LLMap center={center} zoom={zoomLevel}>
      <LLVectorLayers center={center} />
    </LLMap>
  );
}
