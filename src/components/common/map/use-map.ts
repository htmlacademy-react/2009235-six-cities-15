import { useEffect, useRef, useState } from 'react';
import leaflet, { Map } from 'leaflet';
import { Location } from '../../../types/offers';

const TILE_LAYER = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
const COPYRIGHT = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

type MapController = {
  mapRef: React.MutableRefObject<HTMLElement | null>;
  city: Location;
};

export function useMap({ mapRef, city }: MapController) {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: city.latitude,
          lng: city.longitude,
        },
        zoom: city.zoom,
      });

      leaflet
        .tileLayer(
          TILE_LAYER,
          {
            attribution: COPYRIGHT,
          }
        )
        .addTo(instance);

      instance.scrollWheelZoom.disable();
      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [city, mapRef]);

  return map;
}

export default useMap;
