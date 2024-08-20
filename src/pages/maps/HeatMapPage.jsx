import React from 'react';
import 'leaflet.heat';

// Constants
import { HeatMapPoints } from '../../constants/heatMapConstants';

// Components
import LLMap from '../../components/maps/LLMap';
import LLHeatLayer from '../../components/maps/LLHeatLayer';

export default function HeatMapPage() {
  // lat and lng coordinates for center
  const position = [-37.87, 175.475];

  const points = HeatMapPoints;

  return (
    <div className="page-content">
      <LLMap center={position} zoomLevel={12}>
        <LLHeatLayer points={points} />
      </LLMap>
    </div>
  );
}
