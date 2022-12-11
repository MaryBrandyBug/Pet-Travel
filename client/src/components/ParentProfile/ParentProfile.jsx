import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './ParentProfile.css';

export default function ParentProfile() {
  const parent = useSelector((store) => store.parentStore);
  // console.log('parent', parent.profile);
  return (
    <div>
      {parent?.profile ? (
        <div>
          <h3>Ваш профиль</h3>
          <div>ТУТ ФОТКИ ТИПА</div>
          <div>
            <span>{parent.profile.city}, {parent.profile.country}</span>
          </div>
          <div>
            <h4>Заголовок</h4>
            <span>{parent.profile.title}</span>
          </div>
          <div>
            <h4>Вступление</h4>
            <p>{parent.profile.introduction}</p>
          </div>
          <div>
            <h4>Дом&Локация</h4>
            <p>{parent.profile.location}</p>
          </div>
          <div>
            <h4>Обязанности</h4>
            <p>{parent.profile.responsibilities}</p>
          </div>
          <div>
            <h4>Ситтер нужен:</h4>
            <p>{parent.profile.dateSince1}</p>
            <p>{parent.profile.dateUntil1}</p>
            {parent.profile.dateSince2
              ? (
                <>
                  <p>{parent.profile.dateSince2}</p>
                  <p>{parent.profile.dateUntil2}</p>
                </>
              )
              : null}
            {parent.profile.dateSince3
              ? (
                <>
                  <p>{parent.profile.dateSince3}</p>
                  <p>{parent.profile.dateUntil3}</p>
                </>
              )
              : null}
          </div>
          <div>
            <h4>Ваши питомцы:</h4>
            <div className="petContainer">
              {parent?.pet.map((el) => (
                <>
                  <div>ФОТО ПИТОМЦА</div>
                  <p>{el.petName}</p>
                  <p>{el.petAge} лет</p>
                </>
              ))}
            </div>
          </div>

        </div>
      )
        : (
          <Link to="/profile/create-parent-profile">
            <button type="button">Заполнить анкету</button>
          </Link>
        )}
    </div>
  );
}
