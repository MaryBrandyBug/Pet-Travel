import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
// import ChatForTwo from '../ChatForTwo.js/ChatForTwo';

import Slider from '../Slider/Slider';

import './SitterPage.css';

export default function SitterPage() {
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    fetch(`http://localhost:3001/all-sitters/${id}`, {
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((res) => {
        // dispatch({ type: 'ALL_SITTERS', payload: res.allSittersProfiles });
      });
  }, []);

  /*  return () => {
     second
   } */
  /* const handleChatBtn = () => {
    <Link to={`/all-sitters/${id}`} />;
  }; */
  return (
    <div>
      <div className="sliderContainer">
        <Slider sliderItems={[
          <div className="slide slide-s1">slide 1</div>,
          <div className="slide slide-s2">slide 2</div>,
          <div className="slide slide-s3">slide 3</div>,
        ]}
        />
      </div>
      <div className="sitterInfo">
        <div className="sitterName">
          <h3>ИМЯ</h3>
        </div>
        <div className="rating" />
        <h4>Рейтинг</h4>
        <div className="location">
          <h5>Страна</h5>
          <h5>Город</h5>
        </div>
        <div className="verification">
          <h4>Прошел проверку документов</h4>
        </div>
        <Link to={`/all-sitters/chat/${id}`}>Чат</Link>
        {/* <button type="button" onClick={handleChatBtn}>Начать чат</button> */}
      </div>

      <div className="reviews">
        <div className="reviewsHeader">
          <h3>Отзывы (общее количество)</h3>
        </div>
        <div className="reviewsContainer">
          <h3>Имя ревьюера</h3>
          <h4>Оценка</h4>
          <h3>Сам отзыв</h3>
        </div>
      </div>
      <div className="details">
        <div className="aboutSitter">
          <h4>Обо мне(подробно)
          </h4>
        </div>
        <div className="pets">
          <h3>Есть опыт ухода за:</h3>
          <p>Собака(пример, связать с БД)</p>
          <p>Кот</p>
          <p>Рыбки</p>
        </div>
      </div>

    </div>

  );
}
