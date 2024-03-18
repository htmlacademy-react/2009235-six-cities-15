import { citiesNames } from '../../../const';
import LocationTabsItem from '../locations-tabs-item/locations-tabs-item';

type LocationsTadsListProps = {
  activeCity: string;
  onLinkClick: (cityName: string) => void;
}

function LocationsTadsList({activeCity, onLinkClick}:LocationsTadsListProps): JSX.Element {

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {
            citiesNames.map((cityName) => {
              const isActiveCity = cityName === activeCity;

              return (
                <LocationTabsItem
                  cityName={cityName}
                  isActiveCity={isActiveCity}
                  key={cityName}
                  onLinkClick={onLinkClick}
                />
              );
            })
          }
        </ul>
      </section>
    </div>
  );
}

export default LocationsTadsList;
