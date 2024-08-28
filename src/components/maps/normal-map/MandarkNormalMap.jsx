import { useState } from 'react';
import { Marker } from 'react-leaflet';

// Components
import MandarkMap from '../MandarkMap';
import PinDropLocationAndZoom from './PinDropLocationAndZoom';

export default function MandarkNormalMap({ center, zoomLevel, customIcon }) {
  const [coordinate, setCoordinate] = useState(center);
  const [mapZoom, setMapZoom] = useState(null);

  function getCoordinatesFromPinDrop(locationData) {
    setCoordinate([locationData.lat, locationData.lng]);
  }
  return (
    <MandarkMap center={coordinate} zoom={zoomLevel}>
      <Marker position={coordinate} icon={customIcon}></Marker>
      <PinDropLocationAndZoom
        onLocationSelect={getCoordinatesFromPinDrop}
        mapZoom={mapZoom}
        setMapZoom={setMapZoom}
      />
    </MandarkMap>
  );
}
