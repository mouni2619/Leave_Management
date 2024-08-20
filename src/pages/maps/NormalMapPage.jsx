import { Icon } from 'leaflet';
import { Marker, Popup } from 'react-leaflet';

// Components
import LLMap from '../../components/maps/LLMap';

export default function NormalMapPage() {
  // lat and lng coordinates for center
  const position = [12.992176277063903, 80.2438303535238];

  // custom icon for the pointer marker
  const customIcon = new Icon({
    iconUrl:
      'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLW1hcC1waW4iPjxwYXRoIGQ9Ik0yMCAxMGMwIDQuOTkzLTUuNTM5IDEwLjE5My03LjM5OSAxMS43OTlhMSAxIDAgMCAxLTEuMjAyIDBDOS41MzkgMjAuMTkzIDQgMTQuOTkzIDQgMTBhOCA4IDAgMCAxIDE2IDAiLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjEwIiByPSIzIi8+PC9zdmc+',
    iconSize: [30, 30],
  });
  return (
    <div className="page-content">
      <LLMap center={position} zoomLevel={15}>
        <Marker position={position} icon={customIcon}>
          <Popup>AdMavin</Popup>
        </Marker>
      </LLMap>
    </div>
  );
}
