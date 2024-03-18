type FavoriteOfferCardProps = {
  cityName: string;
  isActiveCity: boolean;
  onLinkClick: (cityName: string) => void;
}

function LocationTabsItem({cityName, isActiveCity, onLinkClick}: FavoriteOfferCardProps): JSX.Element {
  const handleOnLinkClick = () => onLinkClick(cityName);

  return (
    <li className="locations__item">
      <a
        className={`locations__item-link tabs__item ${isActiveCity && 'tabs__item--active'}`}
        {...(!isActiveCity && {href: '#'})}
        onClick={handleOnLinkClick}
      >
        <span>{cityName}</span>
      </a>
    </li>
  );
}

export default LocationTabsItem;
