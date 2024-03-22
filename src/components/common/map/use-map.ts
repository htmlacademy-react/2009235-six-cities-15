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
  const { latitude: lat, longitude: lng, zoom } = city;

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = leaflet.map(mapRef.current, {
        center: {lat, lng},
        zoom,
      });

      leaflet
        .tileLayer(
          TILE_LAYER,
          {
            attribution: COPYRIGHT,
          }
        )
        .addTo(instance);

      setMap(instance);
      isRenderedRef.current = true;
    }
    map?.setView({ lat , lng }, zoom);
  }, [city, mapRef, map]);

  return map;
}

export default useMap;
