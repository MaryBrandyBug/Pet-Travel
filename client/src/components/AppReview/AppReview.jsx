/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import React, { useState } from 'react';
import './AppReview.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function AppReview() {
  const user = useSelector((store) => store.userStore.auth);
  const navigate = useNavigate();
  const [reviewAppForm, setReviewAppForm] = useState({
    reviewText: '',
    rating: '',
    title: '',
  });
  const handleInput = (e) => {
    setReviewAppForm({ ...reviewAppForm, [e.target.name]: e.target.value });
  };
  console.log(reviewAppForm);
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3001/appewview', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: user.id, ...reviewAppForm }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
    navigate('/');
  };

  return (
    <div className="review_container">
      <div className="star">
        <h1>Выберите оценку</h1>
        <form className="Form_review" onSubmit={handleSubmit}>
          {/* <fieldset className="rating">
            <input type="radio" id="star5" name="rating" value="5" onChange={handleInput} />
            <label className="full" htmlFor="star5" title="Awesome - 5 stars" />
            <input type="radio" id="star4half" name="rating" value="4.5" onChange={handleInput} />
            <label className="half" htmlFor="star4half" title="Pretty good - 4.5 stars" />
            <input type="radio" id="star4" name="rating" value="4" onChange={handleInput} />
            <label className="full" htmlFor="star4" title="Pretty good - 4 stars" />
            <input type="radio" id="star3half" name="rating" value="3,5" onChange={handleInput} />
            <label className="half" htmlFor="star3half" title="Meh - 3.5 stars" />
            <input type="radio" id="star3" name="rating" value="3" onChange={handleInput} />
            <label className="full" htmlFor="star3" title="Meh - 3 stars" />
            <input type="radio" id="star2half" name="rating" value="2,5" onChange={handleInput} />
            <label className="half" htmlFor="star2half" title="Kinda bad - 2.5 stars" />
            <input type="radio" id="star2" name="rating" value="2" onChange={handleInput} />
            <label className="full" htmlFor="star2" title="Kinda bad - 2 stars" />
            <input type="radio" id="star1half" name="rating" value="1,5" onChange={handleInput} />
            <label className="half" htmlFor="star1half" title="Meh - 1.5 stars" />
            <input type="radio" id="star1" name="rating" value="1" onChange={handleInput} />
            <label className="full" htmlFor="star1" title="Sucks big time - 1 star" />
            <input type="radio" id="starhalf" name="rating" value="0,5" onChange={handleInput} />
            <label className="half" htmlFor="starhalf" title="Sucks big time - 0.5 stars" />
          </fieldset> */}
          <div className="container_review">
            <div className="rating">
              <div className="rating__bar">
                <label
                  className="rating__star rating__star--1"
                  htmlFor="rating-star-1"
                  role="button"
                  aria-label="Uma estrela"
                />
                <input
                  type="checkbox"
                  id="rating-star-1"
                  className="rating__checkbox"
                  name="rating"
                  value="1"
                  hidden
                  onChange={handleInput}
                />
                <label
                  className="rating__star rating__star--2"
                  htmlFor="rating-star-2"
                  role="button"
                  aria-label="Uma estrela"
                />
                <input
                  type="checkbox"
                  id="rating-star-2"
                  className="rating__checkbox"
                  name="rating"
                  value="2"
                  hidden
                  onChange={handleInput}
                />
                <label
                  className="rating__star rating__star--3"
                  htmlFor="rating-star-3"
                  role="button"
                  aria-label="Uma estrela"
                />
                <input
                  type="checkbox"
                  id="rating-star-3"
                  className="rating__checkbox"
                  name="rating"
                  value="3"
                  hidden
                  onChange={handleInput}
                />
                <label
                  className="rating__star rating__star--4"
                  htmlFor="rating-star-4"
                  role="button"
                  aria-label="Uma estrela"
                />
                <input
                  type="checkbox"
                  id="rating-star-4"
                  className="rating__checkbox"
                  name="rating"
                  value="4"
                  hidden
                  onChange={handleInput}
                />
                <label
                  className="rating__star rating__star--5"
                  htmlFor="rating-star-5"
                  role="button"
                  aria-label="Uma estrela"
                />
                <input
                  type="checkbox"
                  id="rating-star-5"
                  className="rating__checkbox"
                  name="rating"
                  value="5"
                  hidden
                  onChange={handleInput}
                />

                <div className="rating__filled-stars" />
              </div>
            </div>
          </div>
        </form>
      </div>
      <form className="review_text_re" onSubmit={handleSubmit}>
        <div className="text_review review">
          <h1>Заголовок</h1>
          <input type="text" name="title" onChange={handleInput} />
        </div>
        <div className="text_review">
          <h1>Оставьте ваш отзыв</h1>
          <textarea cols="40" rows="10" name="reviewText" onChange={handleInput} />
        </div>
        <div className="text_review_btn">
          <button type="submit" className="btn_subb">Отправить</button>
        </div>
      </form>
    </div>
  );
}
