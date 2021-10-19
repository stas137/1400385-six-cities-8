import {ChangeEvent, useState} from 'react';

function FormComment():JSX.Element {
  const [rating, setRating] = useState('0');
  const [review, setReview] = useState('');

  const countStar = 5;
  const starArray = Array.from({length: countStar}, (value, key) => key).reverse();

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {
          starArray.map((item) => (
            <>
              <input className="form__rating-input visually-hidden" name="rating"
                value={item + 1}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setRating(e.target.value ? e.target.value : rating);
                }}
                id={`${item + 1}-stars`}
                type="radio"
              />
              <label htmlFor={`${item + 1}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </>
          ))
        }

      </div>

      <textarea className="reviews__textarea form__textarea" id="review" name="review"
        value={review}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
          setReview(e.target.value);
        }}
        placeholder="Tell how was your stay, what you like and what can be improved"
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and
          describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
}

export default FormComment;
