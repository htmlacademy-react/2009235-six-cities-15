import classNames from 'classnames';
import { Host } from '../../../types/offers';
import { User } from '../../../types/reviews';

type UserInfoProps = {
  user: User | Host;
  variant?: 'full' | 'review';
}

function UserInfo({user, variant}: UserInfoProps) {
  const {name, avatarUrl, isPro} = user;

  if (variant === 'review') {
    return (
      <div className="reviews__user user">
        <div className={classNames({'reviews__avatar-wrapper--pro': isPro}, 'reviews__avatar-wrapper', 'user__avatar-wrapper')}>
          <img className="reviews__avatar user__avatar" src={avatarUrl} width={54} height={54} alt={`${name}\`s avatar`} />
        </div>
        <span className="reviews__user-name">{name}</span>
      </div>
    );
  }

  if (variant === 'full') {
    return (
      <div className="offer__host-user user">
        <div className={classNames({'offer__avatar-wrapper--pro': isPro}, 'offer__avatar-wrapper', 'user__avatar-wrapper')}>
          <img className="offer__avatar user__avatar" src={avatarUrl} width={74} height={74} alt={`${name}\`s avatar`} />
        </div>
        <span className="offer__user-name">{name}</span>
        {
          isPro && <span className="offer__user-status">Pro</span>
        }
      </div>
    );
  }
}

export default UserInfo;
