import { useEffect, useRef } from 'react';
import { Location } from '../../../types/offers';
import useMap from './use-map';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

import './styles.css';

type mapProps = {
  city: Location;
  classNamePrefix: 'cities' | 'offer';
  points: (Location & {id: string})[];
  selectedPointId?: string | null;
}

const defaultCustomIcon = leaflet.icon({
  iconUrl:  'img/pin.svg',
  iconSize: [27, 39],
  iconAnchor: [12, 20],
});

const currentCustomIcon = leaflet.icon({
  iconUrl: 'img/pin-active.svg',
  iconSize: [27, 39],
  iconAnchor: [12, 20],
});

function Map({city, classNamePrefix, points, selectedPointId = null}:mapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap({mapRef, city});

  useEffect(() => {
    if (map) {
      const markersGroup = leaflet.layerGroup().addTo(map);
      points.forEach((point) => {
        leaflet
          .marker({
            lat: point.latitude,
            lng: point.longitude,
          }, {
            icon: (point.id === selectedPointId)
              ? currentCustomIcon
              : defaultCustomIcon,
          })
          .addTo(markersGroup);
      });

      //тут надо разбить на разные layerGroup
      return () => {
        if (map && classNamePrefix === 'offer') {
          markersGroup.clearLayers();
        }
      };
    }
  }, [map, points, selectedPointId]);

  return (
    <section className={`${classNamePrefix}__map map`} ref={mapRef}/>
  );
}

export default Map;

/*useEffect(() => {
    if (map && selectedPoint !== null) {
      const markerCurrentGroup = leaflet.layerGroup().addTo(map);
      points.forEach((point) => {
        leaflet
          .marker({
            lat: point.latitude,
            lng: point.longitude,
          }, {
            icon: currentCustomIcon,
          })
          .addTo(markerCurrentGroup);
      });

      return () => {
        if (map) {
          markerCurrentGroup.clearLayers();
        }
      };
    }
  }, [map, selectedPoint]);*/
