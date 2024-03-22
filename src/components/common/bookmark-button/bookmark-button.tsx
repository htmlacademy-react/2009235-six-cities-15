import { useState } from 'react';

const variantConfig = {
  small: {
    width: 18,
    height: 19
  },
  big: {
    width: 31,
    height: 33
  }
};

type BookmarkButtonProps = {
  isFavorite: boolean;
  classNamePrefix?: 'place-card' | 'offer';
  variant?: 'small' | 'big';
}

function BookmarkButton({isFavorite: isActive, classNamePrefix = 'place-card', variant = 'small'}: BookmarkButtonProps): JSX.Element {
  const [isFavorite, setFavorite] = useState(isActive);
  const {width, height} = variantConfig[variant];

  const handleBookmarkButtonClick = () => setFavorite(!isFavorite);

  return (
    <button
      onClick={handleBookmarkButtonClick}
      className={`${classNamePrefix}__bookmark-button button ${isFavorite && `${classNamePrefix}__bookmark-button--active`}`}
      type="button"
    >
      <svg className={`${classNamePrefix}__bookmark-icon`} width={width} height={height}>
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
    </button>
  );
}

export default BookmarkButton;
