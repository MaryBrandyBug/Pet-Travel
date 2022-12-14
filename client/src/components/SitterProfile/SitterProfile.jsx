import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './SitterProfile.css';

export default function SitterProfile() {
  const sitter = useSelector((store) => store.sitterStore.sitter);

  const dispatch = useDispatch();

  // console.log(sitter.published);
  const cats = sitter?.cats;
  const dogs = sitter?.dogs;
  const reptiles = sitter?.reptiles;
  const fish = sitter?.fish;
  const smallPets = sitter?.smallPets;
  const horses = sitter?.horses;
  const birds = sitter?.birds;
  function careAboute() {
    const pets = [];
    if (cats) {
      pets.push('кошки');
    }
    if (dogs) {
      pets.push('собаки');
    }
    if (reptiles) {
      pets.push('рептилии');
    }
    if (fish) {
      pets.push('рыбы');
    }
    if (smallPets) {
      pets.push('мелкие животные');
    }
    if (horses) {
      pets.push('лошади');
    }
    if (birds) {
      pets.push('птицы');
    }
    return pets;
  }
  // console.log(careAboute());

  const handlePublish = async () => {
    await fetch('http://localhost:3001/profile/sitter', {
      method: 'PUT',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ published: sitter.published, id: sitter.id }),
    })
      .then((res) => res.json())
      .then((res) => dispatch({ type: 'SITTER_PROFILE', payload: res.sitter }));
    // if (response === 200) {
    //   alert('Профиль опубликован!');
    // }
  };

  return (
    <div className="container_SitterProfile">
      {sitter
        ? (
          <div className="container_SitterProfile_info">
            <div className="SitterProfile_info_main">
              <h3>Ваш профиль</h3>
              <div className="SitterProfile_published">
                {sitter?.published ? <span className="info_published_true">Опубликовано</span>
                  : <span className="info_published_false">Не опубликовано</span>}
              </div>
              <div className="SitterProfile_location">
                <span>{sitter?.city}, {sitter?.country}</span>
              </div>
              <div className="SitterProfile_photos">ТУТ ФОТКИ ТИПА</div>
              <div>
                <div className="SitterProfile_about">
                  <h4>Обо мне</h4>
                  <p>{sitter?.aboutMe}</p>
                </div>
                <div className="SitterProfile_careAbout">
                  <h4>Есть опыт ухода за: </h4>
                  <div className="petList">{careAboute().map((el) => <div><span className="pets">{el}</span></div>)}<div />
                  </div>
                </div>
                <div>
                  <button type="button" onClick={handlePublish}>Опубликовать</button>
                </div>
                <div>
                  <Link to="/profile/sitter/update-sitter-profile">
                    <button type="button">Изменить данные профиля</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )
        : (
          <Link to="/profile/create-sitter-profile">
            <button type="button">Заполнить анкету</button>
          </Link>
        )}
    </div>
  );
}
