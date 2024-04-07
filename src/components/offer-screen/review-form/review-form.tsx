import React, { FormEvent, Fragment, useRef, useState } from 'react';
import { Rates } from '../../../const';
import { useAppDispatch } from '../../../hooks/redux';
import { fetchReviewUserAction } from '../../../store/api-actions';
import './styles.css';
import Spinner from '../../common/spinner/spinner';

const MIN_COMMENT_LENGTH: number = 50;
const MAX_COMMENT_LENGTH: number = 300;

function ReviewForm(): JSX.Element {
  const [ formData, setFormData] = useState({
    comment: '',
    rating: NaN
  });

  const isSubmitDisabled = Number.isNaN(formData.rating) || formData.comment.length < MIN_COMMENT_LENGTH || formData.comment.length > MAX_COMMENT_LENGTH;
  const [isFormDisabled, setIsFormDisabled] = useState(false);

  const handleCommentChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      comment: evt.target.value,
    });
  };

  const handleRatingChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      rating: +evt.target.value,
    });
  };

  const resetForm = () => setFormData({
    comment: '',
    rating: NaN
  });


  const dispatch = useAppDispatch();
  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    setIsFormDisabled(true);
    dispatch(fetchReviewUserAction(formData)).unwrap()
      .then(() => resetForm())
      .catch(() => {})
      .finally(() => setIsFormDisabled(false));
  };

  return (
    <form className={`reviews__form form ${isFormDisabled && 'form-disable'}`} action="#" method="post" onSubmit={handleFormSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {
          Object.entries(Rates).reverse().map(([value, title]) => {
            const id = `${value}-stars`;
            return (
              <Fragment key={title}>
                <input
                  className="form__rating-input visually-hidden"
                  name="rating"
                  defaultValue={value}
                  id={id}
                  type="radio"
                  checked={+value === formData.rating}
                  onChange={handleRatingChange}
                  disabled={isFormDisabled}
                />
                <label
                  htmlFor={id}
                  className="reviews__rating-label form__rating-label"
                  title={title}
                >
                  <svg className="form__star-image" width={37} height={33}>
                    <use xlinkHref="#icon-star" />
                  </svg>
                </label>
              </Fragment>
            );
          })
        }
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={formData.comment}
        onChange={handleCommentChange}
        disabled={isFormDisabled}
      />

      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">{MIN_COMMENT_LENGTH} characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isSubmitDisabled || isFormDisabled}>Submit {isFormDisabled && <Spinner variant='button'/>}</button>
      </div>
    </form>
  );
}

export default ReviewForm;
