import { citiesTitles } from '../../../const';
import LocationTabsItem from '../locations-tabs-item/locations-tabs-item';

type LocationsTadsListProps = {
  activeCity: string;
  onLinkClick: (cityTitle: string) => void;
}

function LocationsTadsList({activeCity, onLinkClick}:LocationsTadsListProps): JSX.Element {

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {
            citiesTitles.map((cityTitle) => {
              const isActiveCity = cityTitle === activeCity;

              return (
                <LocationTabsItem
                  cityTitle={cityTitle}
                  isActiveCity={isActiveCity}
                  key={cityTitle}
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
