import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './ParentProfile.css';

export default function ParentProfile() {
  const parent = useSelector((store) => store.parentStore);

  const dispatch = useDispatch();

  const handlePublish = async () => {
    await fetch('http://localhost:3001/profile/parent', {
      method: 'PUT',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ published: parent.profile.published, id: parent.profile.id }),
    })
      .then((res) => res.json())
      .then((res) => dispatch({ type: 'PARENT_PROFILE', payload: res.profile }));
  };

  return (
    <div className="container_ParentProfile">
      {parent?.profile ? (
        <div className="container_ParentProfile_info">
          <div className="ParentProfile_info_main">
            <h3>Ваш профиль</h3>
            <div className="ParentProfile_published">
              {parent?.profile.published
                ? <button className="published_false" type="button" onClick={handlePublish}>Не публиковать</button>
                : <button className="published_true" type="button" onClick={handlePublish}>Публиковать</button>}
            </div>
          </div>
          <div className="ParentProfile_info_title">
            <h4>Заголовок</h4>
            <span>{parent.profile.title}</span>
          </div>
          <div className="ParentProfile_info_list">
            <div className="list_introduction">
              <h4>О себе</h4>
              <p>{parent.profile.introduction}</p>
            </div>
            <div className="list_introduction">
              <h4>Ваша страна</h4>
              <p>{parent.profile.country}</p>
            </div>
            <div className="list_introduction">
              <h4>Ваш город</h4>
              <p>{parent.profile.city}</p>
            </div>
            <div className="list_ilocation">
              <h4>Дом&Локация</h4>
              <p>{parent.profile.location}</p>
            </div>
            <div className="list_resp">
              <h4>Обязанности</h4>
              <p>{parent.profile.responsibilities}</p>
            </div>
          </div>
          <div className="ParentProfile_info_dates">
            <h4>Ситтер нужен:</h4>
            <p>с {parent.profile.dateSince1} по {parent.profile.dateUntil1}</p>
            {parent.profile.dateSince2
              ? (
                <p>{parent.profile.dateSince2}/{parent.profile.dateUntil2}</p>
              )
              : null}
            {parent.profile.dateSince3
              ? (
                <p>{parent.profile.dateSince3}/{parent.profile.dateUntil3}</p>
              )
              : null}
          </div>
          <div className="ParentProfile_info_pets">
            <h4>Ваши питомцы:</h4>
            <div className="petContainer">
              {parent.pet?.map((el) => (
                <div className="petContainer_card">
                  <div className="petContainer_photo">
                    <div className="petContainer_photo_pet_photo">
                      <div />
                    </div>
                    <div>
                      <input type="file" />
                    </div>
                    <div>
                      <button type="button">Добавить</button>
                    </div>
                  </div>
                  <div className="petContainer_petName"><p>{el?.petName}</p></div>
                  <div className="petContainer_petAge"><p>{el?.petAge} лет</p></div>
                </div>
              ))}
            </div>
            <div>
              <Link to="/profile/parent/update-parent-profile">
                <button type="button">Изменить данные профиля</button>
              </Link>
            </div>
          </div>

        </div>
      )
        : (
          <div className="btn_add_prifile">
            <div className="btn_add_prifile_p">
              <p>
                У вас еще нет заполеннной анкеты.
              </p>
            </div>
            <div>
              <Link to="/profile/create-parent-profile">
                <button type="button">Заполнить анкету</button>
              </Link>
            </div>
          </div>
        )}
    </div>
  );
}
