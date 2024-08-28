import React, { useEffect } from 'react';
import 'leaflet.heat';
import { useDispatch, useSelector } from 'react-redux';

// Constants
import { MAP_ZOOM } from '../../constants/mapConstants';

// Actions
import { MapActions } from '../../store/redux-slices/mapSlice';

// Components
import MandarkHeatMap from '../../components/maps/heat-map/MandarkHeatMap';

const LATITUDE = -37.87;
const LONGITUDE = 175.475;
const zoomLevel = MAP_ZOOM.zoomLevel12;

export default function HeatMapPage() {
  const dispatch = useDispatch();

  // lat and lng coordinates for center
  const position = [LATITUDE, LONGITUDE];

  const points = useSelector((state) => state.maps.heatMapPoints);

  useEffect(() => {
    dispatch(MapActions.getHeatMapPoints());
  }, []);

  return (
    <div className="page-content">
      <MandarkHeatMap
        position={position}
        zoomLevel={zoomLevel}
        points={points}
      />
    </div>
  );
}
