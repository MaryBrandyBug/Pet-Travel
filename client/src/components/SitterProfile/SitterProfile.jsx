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
                <div className="SitterProfile_published_text">
                  <span>Статус публикации:</span>
                </div>
                <div className="SitterProfile_published_text">
                  {sitter?.published
                    ? <button className="published_false" type="button" onClick={handlePublish}>Не публиковать</button>
                    : <button className="published_true" type="button" onClick={handlePublish}>Публиковать</button>}
                </div>
              </div>
              <div className="SitterProfile_photos">
                <div className="SitterProfile_photos_addPhoto">
                  <div className="SitterProfile_photo">
                    <div />
                  </div>
                  <div>
                    <input type="file" />
                  </div>
                  <div>
                    <button type="button">Добавить</button>
                  </div>
                </div>
                <div className="SitterProfile_photos_addPhoto">
                  <div className="SitterProfile_photo">
                    <div />
                  </div>
                  <div>
                    <input type="file" />
                  </div>
                  <div>
                    <button type="button">Добавить</button>
                  </div>
                </div>
                <div className="SitterProfile_photos_addPhoto">
                  <div className="SitterProfile_photo">
                    <div />
                  </div>
                  <div>
                    <input type="file" />
                  </div>
                  <div>
                    <button type="button">Добавить</button>
                  </div>
                </div>
                <div className="SitterProfile_photos_addPhoto">
                  <div className="SitterProfile_photo">
                    <div />
                  </div>
                  <div>
                    <input type="file" />
                  </div>
                  <div>
                    <button type="button">Добавить</button>
                  </div>
                </div>
                <div className="SitterProfile_photos_addPhoto">
                  <div className="SitterProfile_photo">
                    <div />
                  </div>
                  <div>
                    <input type="file" />
                  </div>
                  <div>
                    <button type="button">Добавить</button>
                  </div>
                </div>
              </div>
              <div className="SitterProfile_location">
                <div className="SitterProfile_location_text">
                  <div className="SitterProfile_location_text_head">
                    Ваш город:
                  </div>
                  <div>
                    {sitter?.city}
                  </div>
                </div>
                <div className="SitterProfile_location_text">
                  <div className="SitterProfile_location_text_head">
                    Ваша страна:
                  </div>
                  <div>
                    {sitter?.country}
                  </div>
                </div>
              </div>
              <div>
                <div className="SitterProfile_about">
                  <div>
                    <h4>Обо мне</h4>
                  </div>
                  <div>
                    <p>{sitter?.aboutMe}</p>
                  </div>
                </div>
                <div className="SitterProfile_careAbout">
                  <h4>Есть опыт ухода за: </h4>
                  <div className="petList">
                    {careAboute().map((el) => (
                      <div className="pets">
                        <span>{el}</span>
                      </div>
                    ))}
                    <div />
                  </div>
                </div>
                <div className="btn_update">
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
