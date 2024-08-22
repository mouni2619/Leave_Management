export const MAP_TILES = {
  osm: {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    url: 'https://{s}.tile.osm.org/{z}/{x}/{y}.png',
  },
  'osm-hydda': {
    attribution:
      '<a href="https://github.com/karlwettin/carto-style-hydda" target="_blank">Hydda</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    url: 'https://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png',
  },
  streets: {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    url: 'https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=7Q1IdysXEHppNfS9B7GB',
  },
  transport: {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    url: 'https://{s}.tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey=fe7f54b14b7245ddabbc2465d15522e9',
  },
  atlas: {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    url: 'https://{s}.tile.thunderforest.com/atlas/{z}/{x}/{y}.png?apikey=fe7f54b14b7245ddabbc2465d15522e9',
  },
};

export const MAP_POINTER = {
  iconUrl:
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLW1hcC1waW4iPjxwYXRoIGQ9Ik0yMCAxMGMwIDQuOTkzLTUuNTM5IDEwLjE5My03LjM5OSAxMS43OTlhMSAxIDAgMCAxLTEuMjAyIDBDOS41MzkgMjAuMTkzIDQgMTQuOTkzIDQgMTBhOCA4IDAgMCAxIDE2IDAiLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjEwIiByPSIzIi8+PC9zdmc+',
  iconSize: [30, 30],
};

export const MAP_ZOOM = {
  zoomLevel9: 9,
  zoomLevel10: 10,
  zoomLevel11: 11,
  zoomLevel12: 12,
  zoomLevel13: 13,
  zoomLevel14: 14,
  zoomLevel15: 15,
};
