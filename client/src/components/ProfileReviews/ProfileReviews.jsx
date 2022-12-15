import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

export default function ProfileReviews() {
  // const { id } = useParams();
  const [parentReviews, setParentReviews] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3001/profile/reviews', {
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((res) => setParentReviews(res));
  }, []);
  // const newArray = parentReviews.filter((el) => el.ParentProfileId === id);
  // console.log('newArray>>>>>.', newArray);
  return (
    <div>
      <h3>Отзывы о вас</h3>
      <div>
        {parentReviews?.map((el) => (
          <div className="one_review">
            <div className="one_review_content">
              <span>{el.User.name}</span>
              <span>{el.reviewText}</span>
              <span>{el.createdAt?.toLocaleString().substring(0, 16).split('T').join(' ')}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
