import { useState } from 'react';
import classNames from 'classnames';

type BookmarkButtonProps = {
  isFavorite: boolean;
}

function BookmarkButton({isFavorite: isActive}: BookmarkButtonProps): JSX.Element {
  const [isFavorite, setFavorite] = useState(isActive);

  const handleBookmarkButtonClick = () => setFavorite(!isFavorite);

  return (
    <button
      onClick={handleBookmarkButtonClick}
      className={classNames('place-card__bookmark-button', {'place-card__bookmark-button--active': isFavorite },'button')}
      type="button"
    >
      <svg className="place-card__bookmark-icon" width={18} height={19}>
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
    </button>
  );
}

export default BookmarkButton;
