import React, { useEffect, useState } from 'react';

import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Map from '../Map/Map';
import Slider from '../Slider/Slider';
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

  return (
    <div className="container-parentPage">
      <div className="info-one">
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

        <div className="parentInfo">
          <div className="parentName">
            <h3>{parent?.User?.name}</h3>
          </div>
          <div className="date">
            <h4>Требуется няня:</h4>
            <h5>{parent.dateSince1} - {parent.dateUntil1}</h5>
            {/* <button type="button">Начать чат</button> */}
            {/* <button type="button" onClick={() => console.log(parent?.Pets[0].petName)}>Test</button> */}
          </div>

        </div>
        <Link to={`/all-parents/chat/${id}`}><button type="button" onClick={handleCreateChat}>Чат</button></Link>
      </div>
      <div className="info-2">
        <div className="title-1">
          <h4>Введение</h4>
          <h5>{parent.title}</h5>
        </div>
        <div className="location-1">
          <h4>Дом и местоположение</h4>
          <h5>{parent.location}</h5>
        </div>
        <div className="details-1">
          <div className="Responsibilities">
            <h4>Обязанности</h4>
            <h5>{parent.responsibilities}</h5>
          </div>

          <div className="pets-1">
            <h4>Познакомьтесь с домашними животными</h4>
            {/* <h4>{parent?.Pets[0].petName}</h4> */}
          </div>
        </div>
      </div>
      <div className="maps">
        {/* <Map parents={[parent]} /> */}
        <Map parent={parent} />
      </div>
    </div>
  );
}
