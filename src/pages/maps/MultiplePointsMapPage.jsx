import { useEffect } from 'react';
import { Icon } from 'leaflet';
import { useDispatch, useSelector } from 'react-redux';

// Constants
import { MAP_POINTER, MAP_ZOOM } from '../../constants/mapConstants';

// Actions
import { MapActions } from '../../store/redux-slices/mapSlice';

// Components
import MandarkMultiplePointsMap from '../../components/maps/multiple-points-map/MandarkMultiplePointsMap';

// Page Constants
const LATITUDE = 12.992176277063903;
const LONGITUDE = 80.2438303535238;
const zoomLevel = MAP_ZOOM.zoomLevel13;

export default function MultiplePointsMapPage() {
  const dispatch = useDispatch();

  const center = [LATITUDE, LONGITUDE];

  const markers = useSelector((state) => state.maps.multiplePoints);

  // custom icon for the pointer marker
  const customIcon = new Icon({
    iconUrl: MAP_POINTER.iconUrl,
    iconSize: MAP_POINTER.iconSize,
  });

  useEffect(() => {
    dispatch(MapActions.getMultiplePoints());
  }, []);
  return (
    <div className="page-content">
      <MandarkMultiplePointsMap
        center={center}
        zoomLevel={zoomLevel}
        markers={markers}
        customIcon={customIcon}
      />
    </div>
  );
}
