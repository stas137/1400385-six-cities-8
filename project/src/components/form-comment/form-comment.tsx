import React, {FormEvent} from 'react';
import {ChangeEvent, useState} from 'react';
import {sendComment} from '../../store/api-actions';
import {ThunkAppDispatch} from '../../types/action';
import {CommentPost} from '../../types/offers';
import {connect, ConnectedProps} from 'react-redux';

type FormCommentProps = {
  offerId: number,
}

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onSubmit({rating, comment}: CommentPost, offerId: number) {
    dispatch(sendComment({rating, comment}, offerId));
  },
});

const connector = connect(null, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & FormCommentProps;

function FormComment({offerId, onSubmit}: ConnectedComponentProps):JSX.Element {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [disableSubmit, setDisableSubmit] = useState(true);

  const countStar = 5;
  const starArray = Array.from({length: countStar}, (value, key) => key).reverse();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSubmit({
      rating,
      comment,
    }, offerId);

    setRating(0);
    setComment('');
    setDisableSubmit(true);
  };

  return (
    <form
      className="reviews__form form"
      action=""
      method="post"
      onSubmit={handleSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {
          starArray.map((item) => (
            <React.Fragment key={item}>
              <input className="form__rating-input visually-hidden" name="rating"
                value={item + 1}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setRating(e.target.value ? +e.target.value : rating);
                }}
                id={`${item + 1}-stars`}
                type="radio"
              />
              <label htmlFor={`${item + 1}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </React.Fragment>
          ))
        }
      </div>

      <textarea className="reviews__textarea form__textarea" id="review" name="review"
        value={comment}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
          setComment(e.target.value);
          if (comment.length >= 50) {
            setDisableSubmit(false);
          } else {
            setDisableSubmit(true);
          }
        }}
        placeholder="Tell how was your stay, what you like and what can be improved"
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and
          describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={disableSubmit}>Submit</button>
      </div>
    </form>
  );
}

export {FormComment};
export default connector(FormComment);
