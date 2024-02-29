import { Link } from 'react-router-dom';
import { AppRoute } from '../../../const';

type LogoProps = {
  isMainPage?: boolean;
}

function Logo({isMainPage = false}:LogoProps): JSX.Element {
  return (
    <div className="header__left">
      <Link
        className={`header__logo-link${isMainPage ? 'header__logo-link--active' : ''}`}
        to={AppRoute.Main}
        style={isMainPage ? {pointerEvents: 'none'} : undefined}
      >
        <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41} />
      </Link>
    </div>
  );
}

export default Logo;
