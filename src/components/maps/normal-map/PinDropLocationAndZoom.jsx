import { useState } from 'react';
import { useMapEvents } from 'react-leaflet';

/**
 * COMPONENT
 * @returns "LatLng" and "ZoomLevel"
 */
export default function PinDropLocationAndZoom({
  onLocationSelect,
  mapZoom,
  setMapZoom,
}) {
  // State
  const [pinDropZoom, setPinDropZoom] = useState(mapZoom);

  /**
   * useMapEvents hook returns event obj while clicking on map. this event obj has coordinates
   * for Zoom : https://stackoverflow.com/questions/65337803/react-leaflet-v3-zoom-listener
   */
  const mapEvents = useMapEvents({
    // Every "ZoomEnd" we will update "pinDropZoom" state in this Component only.
    zoomend() {
      setPinDropZoom(mapEvents.getZoom());
    },

    // Click event
    click(e) {
      // "onClick" only we set the final ZoomLevel" to the MandarkMap.
      // to prevent re-render of MandarkMap.
      setMapZoom(pinDropZoom);

      // this returns the selected "LatLng"
      onLocationSelect(e.latlng);
    },
  });

  return null;
}
