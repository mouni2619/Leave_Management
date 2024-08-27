// Components
import MandarkHeatLayer from './MandarkHeatLayer';
import MandarkMap from '../MandarkMap';

export default function MandarkHeatMap({ position, points, zoomLevel }) {
  return (
    <MandarkMap center={position} zoom={zoomLevel}>
      <MandarkHeatLayer points={points} />
    </MandarkMap>
  );
}
