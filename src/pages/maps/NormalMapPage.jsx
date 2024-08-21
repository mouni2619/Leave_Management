import { useState } from 'react';
import { Icon } from 'leaflet';
import { Marker } from 'react-leaflet';

// Constants
import { MAP_POINTER } from '../../constants/mapConstants';

// Components
import LLMap from '../../components/maps/LLMap';
import PinDropLocationAndZoom from '../../components/maps/PinDropLocationAndZoom';

// Page Constants
const LATITUDE = 12.992176277063903;
const LONGITUDE = 80.2438303535238;
const zoomLevel = 15;

export default function NormalMapPage() {
  // lat and lng coordinates for center
  const center = [LATITUDE, LONGITUDE];

  const [mapZoom, setMapZoom] = useState(null);
  const [coordinate, setCoordinate] = useState(center);

  function getCoordinatesFromPinDrop(locationData) {
    setCoordinate([locationData.lat, locationData.lng]);
  }

  // custom icon for the pointer marker
  const customIcon = new Icon({
    iconUrl: MAP_POINTER.iconUrl,
    iconSize: MAP_POINTER.iconSize,
  });
  return (
    <div className="page-content">
      <LLMap center={coordinate} zoom={zoomLevel}>
        <Marker position={coordinate} icon={customIcon}></Marker>
        <PinDropLocationAndZoom
          onLocationSelect={getCoordinatesFromPinDrop}
          mapZoom={mapZoom}
          setMapZoom={setMapZoom}
        />
      </LLMap>
    </div>
  );
}
