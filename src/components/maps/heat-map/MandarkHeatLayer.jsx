import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import 'leaflet.heat';

/**
 * react-leaflet v3 compatible heatmap layer based in leaflet.heat library
 *
 * Ref: https://stackoverflow.com/questions/63640081/is-there-a-way-to-use-leaflet-heat-in-react
 *
 * @param {*} props Component properties
 * @returns
 */
export default function MandarkHeatLayer({ points }) {
  // Get Map
  const _map = useMap();

  useEffect(() => {
    const hmRef = L.heatLayer(points);
    hmRef.addTo(_map);

    return () => {
      _map.removeLayer(hmRef);
    };
  }, []);

  return null;
}
