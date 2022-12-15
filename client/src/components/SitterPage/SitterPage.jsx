import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './SitterPage.css';
import { useSelector } from 'react-redux';

export default function SitterPage() {
  const { id } = useParams();
  const [sitter, setSitter] = useState({});

  const user = useSelector((store) => store.userStore.auth);

  useEffect(() => {
    fetch(`http://localhost:3001/all-sitters/${id}`, {
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((data) => {
        setSitter(data);
      });
  }, []);
  console.log(sitter.sitterPh1);
  const handleCreateChat = () => {
    fetch(`http://localhost:3001/all-sitters/chat/${id}`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userFrom: user.id, userTo: sitter.UserId }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div>
      <div className="sliderContainer">
        {sitter.sitterPh1 !== null
          ? <img src={`http://localhost:3001/${sitter.sitterPh1}`} alt="alt" />
          : <div>нету</div> }
        {sitter.sitterPh2 !== null
          ? <img src={`http://localhost:3001/${sitter.sitterPh2}`} alt="alt" />
          : <div>нету</div> }
        {sitter.sitterPh3 !== null
          ? <img src={`http://localhost:3001/${sitter.sitterPh3}`} alt="alt" />
          : <div>нету</div> }
        {sitter.sitterPh4 !== null
          ? <img src={`http://localhost:3001/${sitter.sitterPh4}`} alt="alt" />
          : <div>нету</div> }
        {sitter.sitterPh5 !== null
          ? <img src={`http://localhost:3001/${sitter.sitterPh5}`} alt="alt" />
          : <div>нету</div> }

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
                <Link to={`/all-sitters/chat/${id}`}><button type="button" onClick={handleCreateChat}>Чат</button></Link>
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
