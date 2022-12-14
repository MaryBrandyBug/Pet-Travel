
import React, { useEffect, useState } from 'react';

import { useParams, Link } from 'react-router-dom';
import './SitterPage.css';
import Slider from '../Slider/Slider';

export default function SitterPage() {
  const { id } = useParams();
  const [sitter, setSitter] = useState({});


  useEffect(() => {
    fetch(`http://localhost:3001/all-sitters/${id}`, {
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((data) => setSitter(data));
  }, []);
  console.log('sitter', sitter);

  return (
    <div>

      <div className="sliderContainer">
        <Slider
          sliderItems={[
            <div className="slide slide-s1">slide 1</div>,
            <div className="slide slide-s2">slide 2</div>,
            <div className="slide slide-s3">slide 3</div>,
            <div className="slide slide-s2">slide 4</div>,
            <div className="slide slide-s3">slide 5</div>,
          ]}
          pageWidth={600}
        />
      </div>

      <div className="sticky">
        <div className="sticky_flex">
          <div className="sticky_half">
            <div className="sticky_body">
              <div className="sitterInfo">
                <div className="sitterName">
                  <h3>{sitter?.User?.name}</h3>
                </div>
                <div className="rating" />
                <h4>Рейтинг</h4>
                <div className="location">
                  <h5>{sitter?.country}</h5>
                  <h5>{sitter?.city}</h5>
                </div>
                <div className="verification">
                  <h4>Прошел проверку документов</h4>
                </div>
                <Link to={`/all-sitters/chat/${id}`}>Чат</Link>
              </div>
            </div>

          </div>

        </div>

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
          {sitter?.birds ? (
            <div><h4>Птицы</h4></div>
          ) : (<div />)}
          {sitter?.cats ? (
            <div><h4>Кошки</h4></div>
          ) : (<div />)}
          {sitter?.dogs ? (
            <div><h4>Собаки</h4></div>
          ) : (<div />)}
          {sitter?.fish ? (
            <div><h4>Рыбы</h4></div>
          ) : (<div />)}
          {sitter?.horses ? (
            <div><h4>Лошади</h4></div>
          ) : (<div />)}
          {sitter?.reptiles ? (
            <div><h4>Рептилии</h4></div>
          ) : (<div />)}
          {sitter?.smallPets ? (
            <div><h4>Мелкие животные</h4></div>
          ) : (<div />)}
        </div>
      </div>

    </div>

  );
}
