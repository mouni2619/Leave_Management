import {
  Circle,
  CircleMarker,
  Polygon,
  Polyline,
  Popup,
  Rectangle,
} from 'react-leaflet';

// Constants
import {
  MULTI_POLYGON,
  MULTI_POLYLINE,
  POLYGON,
  POLYLINE,
  RECTANGLE,
} from '../../constants/vectorMapConstants';

export default function LLVectorLayers({ center }) {
  // Vectors Data
  const polyline = POLYLINE;
  const multiPolyline = MULTI_POLYLINE;
  const polygon = POLYGON;
  const multiPolygon = MULTI_POLYGON;
  const rectangle = RECTANGLE;

  const fillBlueOptions = { fillColor: 'blue' };
  const blackOptions = { color: 'black' };
  const limeOptions = { color: 'lime' };
  const purpleOptions = { color: 'purple' };
  const redOptions = { color: 'red' };
  return (
    <>
      <Circle center={center} pathOptions={fillBlueOptions} radius={200} />
      <CircleMarker
        center={[51.51, -0.12]}
        pathOptions={redOptions}
        radius={20}
      >
        <Popup>Popup in CircleMarker</Popup>
      </CircleMarker>
      <Polyline pathOptions={limeOptions} positions={polyline} />
      <Polyline pathOptions={limeOptions} positions={multiPolyline} />
      <Polygon pathOptions={purpleOptions} positions={polygon} />
      <Polygon pathOptions={purpleOptions} positions={multiPolygon} />
      <Rectangle bounds={rectangle} pathOptions={blackOptions} />
    </>
  );
}
