import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import Map from '../Map/Map';

export default function ParentPage() {
  const { id } = useParams();
  const [parent, setParent] = useState({});
  useEffect(() => {
    fetch(`http://localhost:3001/all-parents/${id}`, {
      credentials: 'include',
    })
      // .then((res) => console.log(res))
      .then((res) => res.json())
      .then((data) => setParent(data));
  }, []);
  console.log('🚀🚀🚀 =>=>=> file: ParentPage.jsx:8 =>=>=> ParentPage =>=>=> parent', parent);
  return (
    <div>
      <div className="parentInfo">
        <div className="parentName">
          <h3>{parent?.User?.name}</h3>
        </div>
        <div className="date">
          <h4>Требуется няня:</h4>
          <h5>{parent.dateSince1} - {parent.dateUntil1}</h5>
          {/* <button type="button">Начать чат</button> */}
        </div>
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
        {/* <Map parent={parent} /> */}
      </div>
    </div>
  );
}