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
        <form onSubmit={handleSubmit}>
          <fieldset className="rating">
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
          </fieldset>
        </form>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="text_review review">
          <h1>Заголовок</h1>
          <input type="text" name="title" onChange={handleInput} />
        </div>
        <div className="text_review">
          <h1>Оставьте ваш отзыв</h1>
          <textarea cols="40" rows="10" name="reviewText" onChange={handleInput} />
        </div>
        <div className="text_review">
          <button type="submit" className="btn_send_review">Отправить</button>
        </div>
      </form>
    </div>
  );
}
