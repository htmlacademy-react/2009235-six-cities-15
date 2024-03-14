import { useEffect, useRef } from 'react';
import { Location } from '../../../types/offers';
import useMap from './use-map';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

import './styles.css';

const URL_MARKER_DEFAULT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';
const URL_MARKER_CURRENT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

type mapProps = {
  city: Location;
  classNamePrefix: 'cities' | 'offer';
  points: (Location & {id: string})[];
  selectedPointId?: string | null;
}

function Map({city, classNamePrefix, points, selectedPointId = null}:mapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap({mapRef, city});

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

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
