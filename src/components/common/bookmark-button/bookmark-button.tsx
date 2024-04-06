import { useAuth } from '../../../hooks/use-auth';
import { AppRoute } from '../../../const';
import { useNavigate } from 'react-router-dom';

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
  onButtonClick: () => void;
}

function BookmarkButton({isFavorite, classNamePrefix = 'place-card', variant = 'small', onButtonClick}: BookmarkButtonProps): JSX.Element {
  const {width, height} = variantConfig[variant];
  const {isAuth} = useAuth();

  const navigate = useNavigate();
  const handleBookmarkButtonClick = () => {
    if (isAuth) {
      onButtonClick();
    } else {
      navigate(AppRoute.Login);
    }
  };

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
