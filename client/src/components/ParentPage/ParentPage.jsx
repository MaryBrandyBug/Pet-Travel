import React, { useEffect, useState } from 'react';

import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Map from '../Map/Map';
// import Slider from '../Slider/Slider';
import fish from '../../icons/fish.png';
import cat from '../../icons/cat.png';
import dog from '../../icons/dog.png';
import reptile from '../../icons/reptile.png';
import bird from '../../icons/bird.png';
import rabbit from '../../icons/rabbit.png';
import horse from '../../icons/horse.png';
import './ParentPage.css';

export default function ParentPage() {
  const { id } = useParams();
  const [parent, setParent] = useState({});

  const user = useSelector((store) => store.userStore.auth);

  useEffect(() => {
    fetch(`http://localhost:3001/all-parents/${id}`, {
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((data) => setParent(data));
  }, []);

  const handleCreateChat = () => {
    fetch(`http://localhost:3001/all-parents/chat/${id}`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userFrom: user.id, userTo: parent.UserId }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const petPicture = (type) => {
    for (let i = 0; i < 7; i += 1) {
      if (type === 'fish') {
        return <img className="img_animal" src={fish} alt="" />;
      }
      if (type === 'bird') {
        return <img className="img_animal" src={bird} alt="" />;
      }
      if (type === 'cat') {
        return <img className="img_animal" src={cat} alt="" />;
      }
      if (type === 'dog') {
        return <img className="img_animal" src={dog} alt="" />;
      }
      if (type === 'reptiles') {
        return <img className="img_animal" src={reptile} alt="" />;
      }
      if (type === 'small') {
        return <img className="img_animal" src={rabbit} alt="" />;
      }
      if (type === 'horse') {
        return <img className="img_animal" src={horse} alt="" />;
      }
    }
    return 0;
  };
  return (
    <div className="container-parentPage">
      <div className="info-one">

        <div className="parentInfo">
          <div className="parentName">
            <span className="span_Name">{parent?.User?.name}</span>
            <span>Требуется ситтер:</span>
            <span className="span_Date">{parent.dateSince1} - {parent.dateUntil1}</span>
          </div>
          <div className="parentPage_buttons">
            <Link to={`/all-parents/chat/${id}`}><button className="button_parent" type="button" onClick={handleCreateChat}>Чат</button></Link>
            <Link to={`/review-parent/${id}`}><button className="button_parent" type="button">Оставить отзыв</button></Link>
          </div>
        </div>
        <div className="maps">
          {/* <Map parents={[parent]} /> */}
          <Map parent={parent} />
        </div>
        <div />
      </div>

      <div className="info-2">
        <div className="title-1">
          <h4>Введение</h4>
          <span>{parent.title}</span>
        </div>
        <div className="location-1">
          <h4>Дом и местоположение</h4>
          <span>{parent.location}</span>
        </div>
        <div className="details-1">
          <div className="Responsibilities">
            <h4>Обязанности</h4>
            <span>{parent.responsibilities}</span>
          </div>
        </div>
      </div>
      <div className="pets-1">
        <h4>Познакомьтесь с домашними животными</h4>
        <div className="all_parents_pets">
          {parent.Pets?.map((el) => (
            <div className="pet">
              <div className="petPhoto"><img src={`http://localhost:3001/${el.petPhoto}`} alt="" /></div>
              <div><span>{el.petName}</span></div>
              <div><span>{el.petAge} лет</span></div>
              <div>{petPicture(el.type)}</div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
