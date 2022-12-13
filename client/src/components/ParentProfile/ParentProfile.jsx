import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import './ParentProfile.css';

export default function ParentProfile() {
  const parent = useSelector((store) => store.parentStore);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deletePet = (i, ParentProfileId) => {
    fetch('http://localhost:3001/profile/parent/update-parent-profile', {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: i, ParentProfileId }),
    })
      .then((res) => dispatch({ type: 'PET', payload: res.pet }));
    navigate('/profile/parent');
  };
  // пофиксить исчезновение pet из стора (появляется после перезагрузки)

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
    <div>
      {parent?.profile ? (
        <div>
          <h3>Ваш профиль</h3>
          <p>{parent?.profile.published ? 'Опубликовано' : 'Не опубликовано'}</p>
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
              {parent.pet?.map((el) => (
                <>
                  <div>ФОТО ПИТОМЦА</div>
                  <p>{el?.petName}</p>
                  <p>{el?.petAge} лет</p>
                  <button type="button" onClick={() => deletePet(el?.id, el?.ParentProfileId)}>Удалить</button>
                </>
              ))}
            </div>
            <div>
              <button type="button" onClick={handlePublish}>Опубликовать</button>
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
          <Link to="/profile/create-parent-profile">
            <button type="button">Заполнить анкету</button>
          </Link>
        )}
    </div>
  );
}
