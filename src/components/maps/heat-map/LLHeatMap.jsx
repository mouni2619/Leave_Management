// Components
import LLHeatLayer from './LLHeatLayer';
import LLMap from '../LLMap';

export default function LLHeatMap({ position, points, zoomLevel }) {
  return (
    <LLMap center={position} zoom={zoomLevel}>
      <LLHeatLayer points={points} />
    </LLMap>
  );
}
