import { CityName} from '../../../const';
import LocationTab from '../locations-tabs-item/locations-tabs-item';

function LocationsTadsList(): JSX.Element {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {
            Object.values(CityName).map((cityName) => (
              <LocationTab
                cityName={cityName}
                key={cityName}
              />
            )
            )
          }
        </ul>
      </section>
    </div>
  );
}

export default LocationsTadsList;
