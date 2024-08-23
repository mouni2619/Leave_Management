import React from 'react';
import 'leaflet.heat';

// Constants
import { HeatMapPoints } from '../../constants/heatMapConstants';
import { MAP_ZOOM } from '../../constants/mapConstants';

// Components
import LLHeatMap from '../../components/maps/heat-map/LLHeatMap';

const LATITUDE = -37.87;
const LONGITUDE = 175.475;
const zoomLevel = MAP_ZOOM.zoomLevel12;

export default function HeatMapPage() {
  // lat and lng coordinates for center
  const position = [LATITUDE, LONGITUDE];

  const points = HeatMapPoints;

  return (
    <div className="page-content">
      <LLHeatMap position={position} zoomLevel={zoomLevel} points={points} />
    </div>
  );
}
