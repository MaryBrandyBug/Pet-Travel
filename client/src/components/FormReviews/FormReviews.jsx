import React from 'react';

export default function FormReviews() {
  return (
    <div className="review_container">
      <form>
        <div className="text_review">
          <h1>Оставьте ваш отзыв</h1>
          <textarea cols="40" rows="10" name="reviewText" />
        </div>
        <div className="text_review">
          <button type="submit" className="btn_send_review">Отправить</button>
        </div>
      </form>
    </div>
  );
}
