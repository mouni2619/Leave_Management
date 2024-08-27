import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Constants
import { MAP_ZOOM } from '../../constants/mapConstants';

// Actions
import { MapActions } from '../../store/redux-slices/mapSlice';

// Components
import MandarkBoundaryMap from '../../components/maps/boundary-map/MandarkBoundaryMap';

const LATITUDE = 13.082254666802685;
const LONGITUDE = 80.28040794212028;
const zoomLevel = MAP_ZOOM.zoomLevel11;

export default function BoundaryMapPage() {
  const dispatch = useDispatch();

  // lat and lng coordinates for center
  const center = [LATITUDE, LONGITUDE];

  const geoJSONData = useSelector((state) => state.maps.BoundaryPoints);

  useEffect(() => {
    dispatch(MapActions.getBoundaryPoints());
  }, []);
  return (
    <div className="page-content">
      <MandarkBoundaryMap
        center={center}
        zoomLevel={zoomLevel}
        geoJSONData={geoJSONData}
      />
    </div>
  );
}
