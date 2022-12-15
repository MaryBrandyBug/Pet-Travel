import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from '../Slider/Slider';
import './Main.css';
import familyCat from '../../imgMain/familyCat.png';
import dogGlasses from '../../imgMain/dogGlasses.webp';
import cuteDog from '../../imgMain/cuteDog.png';
import redCat from '../../imgMain/redCat.jpg';

export default function Main() {
  const [reviews, setReviews] = useState();

  useEffect(() => {
    fetch('http://localhost:3001/appreviews', {
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((res) => setReviews(res));
  }, []);

  // console.log('🚀🚀🚀 =>=>=> file: Main.jsx:12 =>=>=> Main =>=>=> reviews', reviews);

  return (
    <div>
      <div className="slider">
        <Slider
          sliderItems={[
            <div className="slide slide-1"><div className="slide_txt">Команда Pet&Travel поздравляет Вас с наступающим Новым Годом!</div></div>,
            <div className="slide slide-2">slide 2</div>,
            <div className="slide slide-3">slide 3</div>,
          ]}
          pageWidth={1900}
        />
      </div>
      <div className="reasons_why_us">
        <h2>Почему хаус ситтинг?</h2>
        <div className="reasons_in_row">
          <div className="reason">
            <div className="reason_photo"><img src={familyCat} alt="" /></div>
            <div className="reason_title">
              <h3>Для владельцев животных</h3>
            </div>
            <div className="reason_text">
              <p>Владельцы животных могут быть по-настоящему спокойны, зная,
                что их питомцы (и дом) находятся под присмотром, пока они в отъезде.
              </p>
            </div>
          </div>
          <div className="reason">
            <div className="reason_photo"><img src={dogGlasses} alt="" /></div>
            <div className="reason_title">
              <h3>Для домашних любимцев</h3>
            </div>
            <div className="reason_text">
              <p>Домашние животные остаются довольными дома с ситтером, который дарит им заботу и внимание.</p>
            </div>
          </div>
          <div className="reason">
            <div className="reason_photo"><img src={cuteDog} alt="" /></div>
            <div className="reason_title">
              <h3>Для ситтеров</h3>
            </div>
            <div className="reason_text">
              <p>Ситтеры обменивают свое время, заботу и опыт на интересные знакомства с людьми по всему миру и их домашними любимцами
                и уникальные впечатления от путешествий.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="div_reviews">
        <h3>Отзывы наших пользователей</h3>
        <div className="reviews_app">
          {reviews?.map((el) => (
            <div className="one_review">
              <div className="one_review_content">
                <span>{el.raiting}</span>
                <span className="span_name">{el.User.name}, {el.createdAt?.toLocaleString().substring(0, 11).split('T').join(' ')}</span>
                <span className="span_title">{el.title}</span>
                <span>{el.reviewText}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="review_btn">
          <Link to="/appreview"><div><span>Оставить отзыв о нас</span></div></Link>
        </div>
      </div>
      <div className="read_article">
        <div className="read_article_photo"><img src={redCat} alt="" /></div>
        <div className="read_article_content">
          <h2>Кто такие ситтеры?</h2>
          <p>Ситтеры - люди, которые составят компанию вашим питомцам и
            уделят им все свое время, заботу и внимание, пока вас нет дома.
            Подробнее о ситтерах в наших статьях по ссылкам ниже.
          </p>
          <div className="read_article_buttons">
            <Link to="/dog-sitters"><button type="button">Ситтеры для собак</button></Link>
            <Link to="/cat-sitters"><button type="button">Ситтеры для кошек</button></Link>
          </div>
        </div>
      </div>
      <div className="search_links">
        <div className="search_links_btns">
          <Link to="/all-sitters"><div><span>Найти ситтера</span></div></Link>
          <Link to="/all-parents"><div><span>Найти дом</span></div></Link>
        </div>
      </div>
    </div>
  );
}
