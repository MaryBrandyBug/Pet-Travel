import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './SitterProfile.css';
import avtr from './avatar.jpg';

export default function SitterProfile() {
  const sitter = useSelector((store) => store.sitterStore.sitter);
  // const allSitter = useSelector((store) => store.allSittersStore.allSittersProfiles);

  const dispatch = useDispatch();
  const [img, setImg] = useState(null);
  const [avatar, setAvatar] = useState(avtr);

  const sendFile = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append('avatar', img);
      data.append('id', sitter.id);

      await axios.post('http://localhost:3001/profile/uploadsitter', data, {
        headers: {
          'content-type': 'mulpipart/form-data',
        },
      })
        .then((res) => {
          console.log(res);
          dispatch({ type: 'SITTER_PROFILE', payload: res.data.addPhoto1 });
          setAvatar(`http://localhost:3001/${res.data.photo}`);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const [img2, setImg2] = useState(null);
  const [avatar2, setAvatar2] = useState(avtr);

  const sendFile2 = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append('avatar', img2);
      data.append('id', sitter.id);

      await axios.post('http://localhost:3001/profile/uploadsitter2', data, {
        headers: {
          'content-type': 'mulpipart/form-data',
        },
      })
        .then((res) => {
          console.log(res);
          dispatch({ type: 'SITTER_PROFILE', payload: res.data.addPhoto2 });
          setAvatar2(`http://localhost:3001/${res.data.photo}`);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const [img3, setImg3] = useState(null);
  const [avatar3, setAvatar3] = useState(avtr);

  const sendFile3 = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append('avatar', img3);
      data.append('id', sitter.id);

      await axios.post('http://localhost:3001/profile/uploadsitter3', data, {
        headers: {
          'content-type': 'mulpipart/form-data',
        },
      })
        .then((res) => {
          console.log(res);
          dispatch({ type: 'SITTER_PROFILE', payload: res.data.addPhoto3 });
          setAvatar3(`http://localhost:3001/${res.data.photo}`);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const [img4, setImg4] = useState(null);
  const [avatar4, setAvatar4] = useState(avtr);

  const sendFile4 = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append('avatar', img4);
      data.append('id', sitter.id);

      await axios.post('http://localhost:3001/profile/uploadsitter4', data, {
        headers: {
          'content-type': 'mulpipart/form-data',
        },
      })
        .then((res) => {
          console.log(res);
          dispatch({ type: 'SITTER_PROFILE', payload: res.data.addPhoto4 });
          setAvatar4(`http://localhost:3001/${res.data.photo}`);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const [img5, setImg5] = useState(null);
  const [avatar5, setAvatar5] = useState(avtr);

  const sendFile5 = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append('avatar', img5);
      data.append('id', sitter.id);

      await axios.post('http://localhost:3001/profile/uploadsitter5', data, {
        headers: {
          'content-type': 'mulpipart/form-data',
        },
      })
        .then((res) => {
          console.log(res);
          dispatch({ type: 'SITTER_PROFILE', payload: res.data.addPhoto5 });
          setAvatar5(`http://localhost:3001/${res.data.photo}`);
        });
    } catch (error) {
      console.log(error);
    }
  };

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
                    {
              avatar
                ? <img className="logo" src={`http://localhost:3001/${sitter?.sitterPh1}`} alt="avatar" />
                : <img className="logo" src={`http://localhost:3001/${sitter?.sitterPh1}`} alt="avatar" />
            }
                  </div>
                  <div>
                    <input type="file" onChange={(e) => setImg(e.target.files[0])} />
                  </div>
                  <div>
                    <button className="btn_subb" type="button" onClick={sendFile}>Добавить</button>
                  </div>
                </div>
                <div className="SitterProfile_photos_addPhoto">
                  <div className="SitterProfile_photo">
                    {
              avatar2
                ? <img className="logo" src={`http://localhost:3001/${sitter?.sitterPh2}`} alt="avatar" />
                : <img className="logo" src={`http://localhost:3001/${sitter?.sitterPh2}`} alt="avatar" />
            }
                  </div>
                  <div>
                    <input type="file" onChange={(e) => setImg2(e.target.files[0])} />
                  </div>
                  <div>
                    <button className="btn_subb" type="button" onClick={sendFile2}>Добавить</button>
                  </div>
                </div>
                <div className="SitterProfile_photos_addPhoto">
                  <div className="SitterProfile_photo">
                    {
              avatar3
                ? <img className="logo" src={`http://localhost:3001/${sitter?.sitterPh3}`} alt="avatar" />
                : <img className="logo" src={`http://localhost:3001/${sitter?.sitterPh3}`} alt="avatar" />
            }
                  </div>
                  <div>
                    <input type="file" onChange={(e) => setImg3(e.target.files[0])} />
                  </div>
                  <div>
                    <button className="btn_subb" type="button" onClick={sendFile3}>Добавить</button>
                  </div>
                </div>
                <div className="SitterProfile_photos_addPhoto">
                  <div className="SitterProfile_photo">
                    {
              avatar4
                ? <img className="logo" src={`http://localhost:3001/${sitter?.sitterPh4}`} alt="avatar" />
                : <img className="logo" src={`http://localhost:3001/${sitter?.sitterPh4}`} alt="avatar" />
            }
                  </div>
                  <div>
                    <input type="file" onChange={(e) => setImg4(e.target.files[0])} />
                  </div>
                  <div>
                    <button className="btn_subb" type="button" onClick={sendFile4}>Добавить</button>
                  </div>
                </div>
                <div className="SitterProfile_photos_addPhoto">
                  <div className="SitterProfile_photo">
                    {
              avatar5
                ? <img className="logo" src={`http://localhost:3001/${sitter?.sitterPh5}`} alt="avatar" />
                : <img className="logo" src={`http://localhost:3001/${sitter?.sitterPh5}`} alt="avatar" />
            }
                  </div>
                  <div>
                    <input type="file" onChange={(e) => setImg5(e.target.files[0])} />
                  </div>
                  <div>
                    <button className="btn_subb" type="button" onClick={sendFile5}>Добавить</button>
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
                    <button className="btn_subb" type="button">Изменить данные профиля</button>
                  </Link>
                </div>
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
              <Link to="/profile/create-sitter-profile">
                <button type="button">Заполнить анкету</button>
              </Link>
            </div>
          </div>
        )}
    </div>
  );
}
