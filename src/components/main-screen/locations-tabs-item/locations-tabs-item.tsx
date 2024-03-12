type FavoriteOfferCardProps = {
  cityTitle: string;
  isActiveCity: boolean;
  onLinkClick: (cityTitle: string) => void;
}

function LocationTadsItem({cityTitle, isActiveCity, onLinkClick}: FavoriteOfferCardProps): JSX.Element {
  const handleOnLinkClick = () => onLinkClick(cityTitle);

  return (
    <li className="locations__item">
      <a
        className={`locations__item-link tabs__item ${isActiveCity && 'tabs__item--active'}`}
        {...(!isActiveCity && {href: '#'})}
        onClick={handleOnLinkClick}
      >
        <span>{cityTitle}</span>
      </a>
    </li>
  );
}

export default LocationTadsItem;
