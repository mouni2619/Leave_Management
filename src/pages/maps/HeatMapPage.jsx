import React from 'react';
import 'leaflet.heat';

// Constants
import { HeatMapPoints } from '../../constants/heatMapConstants';

// Components
import LLMap from '../../components/maps/LLMap';
import LLHeatLayer from '../../components/maps/LLHeatLayer';

const LATITUDE = -37.87;
const LONGITUDE = 175.475;
const zoomLevel = 12;

export default function HeatMapPage() {
  // lat and lng coordinates for center
  const position = [LATITUDE, LONGITUDE];

  const points = HeatMapPoints;

  return (
    <div className="page-content">
      <LLMap center={position} zoom={zoomLevel}>
        <LLHeatLayer points={points} />
      </LLMap>
    </div>
  );
}
