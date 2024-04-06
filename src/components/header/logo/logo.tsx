import { Link } from 'react-router-dom';
import { AppRoute } from '../../../const';
import classNames from 'classnames';

type LogoProps = {
  isMainPage: boolean;
}

function Logo({isMainPage}:LogoProps): JSX.Element {
  return (
    <div className="header__left">
      <Link
        className={classNames('header__logo-link', { 'header__logo-link--active': isMainPage })}
        to={AppRoute.Main}
        style={isMainPage ? {pointerEvents: 'none'} : undefined}
      >
        <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41} />
      </Link>
    </div>
  );
}

export default Logo;
