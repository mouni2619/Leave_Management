import React from 'react';
import 'leaflet.heat';
import { MapContainer, TileLayer } from 'react-leaflet';

// Constants
import { HeatMapPoints } from '../../constants/heatMapConstants';

// Components
import LLHeatLayer from '../../components/maps/LLHeatLayer';

export default function HeatMapPage() {
  // lat and lng coordinates for center
  const position = [-37.87, 175.475];

  const points = HeatMapPoints;

  return (
    <div className="page-content">
      <MapContainer center={position} zoom={12} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LLHeatLayer points={points} />
      </MapContainer>
    </div>
  );
}
