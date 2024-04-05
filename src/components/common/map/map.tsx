import { useEffect, useRef } from 'react';
import { Location } from '../../../types/offers';
import useMap from './use-map';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './styles.css';
import { useAppSelector } from '../../../hooks/redux';
import { getHoverOfferId } from '../../../store/app-data/selectors';

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
}

function Map({city, classNamePrefix, points}:mapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap({mapRef, city});
  const selectedPointId = useAppSelector(getHoverOfferId);

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

      if (classNamePrefix === 'offer') {
        map.scrollWheelZoom.disable();
      }

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
