import { useState } from 'react';
import { Marker } from 'react-leaflet';

// Components
import LLMap from '../LLMap';
import PinDropLocationAndZoom from './PinDropLocationAndZoom';

export default function LLNormalMap({ center, zoomLevel, customIcon }) {
  const [coordinate, setCoordinate] = useState(center);
  const [mapZoom, setMapZoom] = useState(null);

  function getCoordinatesFromPinDrop(locationData) {
    setCoordinate([locationData.lat, locationData.lng]);
  }
  return (
    <LLMap center={coordinate} zoom={zoomLevel}>
      <Marker position={coordinate} icon={customIcon}></Marker>
      <PinDropLocationAndZoom
        onLocationSelect={getCoordinatesFromPinDrop}
        mapZoom={mapZoom}
        setMapZoom={setMapZoom}
      />
    </LLMap>
  );
}
