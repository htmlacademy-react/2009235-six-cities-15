import { useEffect, useRef } from 'react';
import { Location } from '../../../types/offers';
import useMap from './use-map';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

import './styles.css';

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

type mapProps = {
  city: Location;
  classNamePrefix: 'cities' | 'offer';
  points: (Location & {id: string})[];
  selectedPointId?: string | null;
}

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
            icon: defaultCustomIcon,
          })
          .addTo(markersGroup);
      });

      return () => {
        if (map && classNamePrefix === 'offer') {
          map.removeLayer(markersGroup);
        }
      };
    }
  }, [map, points]);

  useEffect(() => {
    if (map && selectedPointId !== null) {
      const markerCurrentGroup = leaflet.layerGroup().addTo(map);
      const currentPoint = points.find((point) => point.id === selectedPointId);

      if (currentPoint) {
        leaflet
          .marker({
            lat: currentPoint.latitude,
            lng: currentPoint.longitude,
          }, {
            icon: currentCustomIcon,
          })
          .addTo(markerCurrentGroup);
      }

      return () => {
        if (map) {
          map.removeLayer(markerCurrentGroup);
        }
      };
    }
  }, [map, selectedPointId]);

  return (
    <section className={`${classNamePrefix}__map map`} ref={mapRef}/>
  );
}

export default Map;
