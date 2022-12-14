import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Map from '../Map/Map';

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
  return (
    <div>
      <div className="parentInfo">
        <div className="parentName">
          <h3>{parent?.User?.name}</h3>
        </div>
        <div className="date">
          <h4>Требуется няня:</h4>
          <h5>{parent.dateSince1} - {parent.dateUntil1}</h5>
        </div>
        <Link to={`/all-parents/chat/${id}`}><button type="button" onClick={handleCreateChat}>Чат</button></Link>
      </div>
      <div className="title">
        <h4>Введение</h4>
        <h5>{parent.title}</h5>
      </div>
      <div className="location">
        <h4>Дом и местоположение</h4>
        <h5>{parent.location}</h5>
      </div>
      <div className="details">
        <div className="Responsibilities">
          <h4>Обязанности</h4>
          <h5>{parent.responsibilities}</h5>
        </div>

        <div className="pets">
          <h4>Познакомьтесь с домашними животными</h4>
        </div>
      </div>

      <div className="map">
        <div>Карта</div>
        <Map parent={parent} />
      </div>
    </div>
  );
}
