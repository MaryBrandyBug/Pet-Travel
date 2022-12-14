import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function UpdateParent() {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.userStore.auth);
  const navigate = useNavigate();

  const parent = useSelector((store) => store.parentStore.profile);
  const allPets = useSelector((store) => store.parentStore.pet);

  console.log('pets==>', allPets[0]);

  const [pets, setPets] = useState([{}]);

  // const [dateDiv2, setDateDiv2] = useState('hidden');
  // const [dateDiv3, setDateDiv3] = useState('hidden');

  const [updateFormParent, setUpdateFormParent] = useState({
    title: parent?.title,
    introduction: parent?.introduction,
    location: parent?.location,
    country: parent?.country,
    city: parent?.city,
    responsibilities: parent?.responsibilities,
    dateSince1: parent?.dateSince1,
    dateUntil1: parent?.dateUntil1,
    dateSince2: parent?.dateSince2,
    dateUntil2: parent?.dateUntil2,
    dateSince3: parent?.dateSince3,
    dateUntil3: parent?.ateUntil3,
  });

  const handleInput = (e) => {
    setUpdateFormParent({ ...updateFormParent, [e.target.name]: e.target.value });
  };

  // const handleAddDate2 = () => (
  //   setDateDiv2('visible')
  // );

  // const handleAddDate3 = () => (
  //   setDateDiv3('visible')
  // );

  const handlePet = (e, i) => {
    // console.log(e, i);
    const newPets = pets.map((el, j) => {
      if (i === j) {
        console.log(e, el);
        if (e.target.type === 'radio') {
          return { ...el, type: e.target.value };
        }

        return { ...el, [e.target.name]: e.target.value };
      }
      return el;
    });

    setPets(newPets);
  };

  const pet = (i) => {
    console.log(i);
    return (
      <div>
        <div className="Update_sitter_input">
          <div className="Update_sitter_input_text">
            <label>Имя питомца</label>
          </div>
          <div className="Update_sitter_input_text">
            <input type="text" name="petName" onChange={(e) => handlePet(e, i)} />
          </div>
        </div>
        <div className="Update_sitter_input">
          <div className="Update_sitter_input_text">
            <label>Возраст питомца</label>
          </div>
          <div className="Update_sitter_input_text">
            <input type="text" name="petAge" onChange={(e) => handlePet(e, i)} />
          </div>
        </div>
        <p>
          <input type="radio" name={`type${i}`} value="cat" onChange={(e) => handlePet(e, i)} />
          Кошка
        </p>
        <p>
          <input type="radio" name={`type${i}`} value="dog" onChange={(e) => handlePet(e, i)} />
          Собака
        </p>
        <p>
          <input type="radio" name={`type${i}`} value="bird" onChange={(e) => handlePet(e, i)} />
          Птица
        </p>
        <p>
          <input type="radio" name={`type${i}`} value="fish" onChange={(e) => handlePet(e, i)} />
          Рыбки
        </p>
        <p>
          <input type="radio" name={`type${i}`} value="horse" onChange={(e) => handlePet(e, i)} />
          Лошадь
        </p>
        <p>
          <input type="radio" name={`type${i}`} value="small" onChange={(e) => handlePet(e, i)} />
          Малкие животные
        </p>
        <p>
          <input type="radio" name={`type${i}`} value="reptiles" onChange={(e) => handlePet(e, i)} />
          Рептилия
        </p>
      </div>
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(pets);
    updateFormParent.pets = pets;
    fetch('http://localhost:3001/profile/parent/update-parent-profile', {
      method: 'PUT',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...updateFormParent, UserId: user.id }),
    })
      .then((res) => res.json())
      .then((res) => {
        dispatch({ type: 'PARENT_PROFILE', payload: res.profile });
        dispatch({ type: 'PET', payload: res.pet });
      });
    navigate('/profile/parent');
  };

  const deletePet = (i, ParentProfileId) => {
    fetch('http://localhost:3001/profile/parent/update-parent-profile', {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: i, ParentProfileId }),
    })
      .then((res) => res.json())
      .then((res) => dispatch({ type: 'PET', payload: res.pet }));
  };

  return (
    <div className="Update_sitter_profile">
      <form onSubmit={handleSubmit}>
        <div className="Update_sitter_input">
          <div className="Update_sitter_input_text">
            <label>Заголовок</label>
          </div>
          <div className="Update_sitter_input_text">
            <input type="text" name="title" value={updateFormParent.title} onChange={handleInput} />
          </div>
        </div>
        <div className="Update_sitter_input">
          <div className="Update_sitter_input_text">
            <label>Страна</label>
          </div>
          <div className="Update_sitter_input_text">
            <input type="text" name="country" value={updateFormParent.country} onChange={handleInput} />
          </div>
        </div>
        <div className="Update_sitter_input">
          <div className="Update_sitter_input_text">
            <label>Город</label>
          </div>
          <div className="Update_sitter_input_text">
            <input type="text" name="city" value={updateFormParent.city} onChange={handleInput} />
          </div>
        </div>
        <div className="Update_sitter_input">
          <div className="Update_sitter_input_text">
            <label>Введение</label>
          </div>
          <div className="Update_sitter_input_text">
            <input type="text" name="introduction" value={updateFormParent.introduction} onChange={handleInput} />
          </div>
        </div>
        <div className="Update_sitter_input">
          <div className="Update_sitter_input_text">
            <label>Дом & Локация</label>
          </div>
          <div className="Update_sitter_input_text">
            <input type="text" name="location" value={updateFormParent.location} onChange={handleInput} />
          </div>
        </div>
        <div className="Update_sitter_input">
          <div className="Update_sitter_input_text">
            <label>Обязанности</label>
          </div>
          <div className="Update_sitter_input_text">
            <input type="text" name="responsibilities" value={updateFormParent.responsibilities} onChange={handleInput} />
          </div>
        </div>
        <div className="Update_sitter_input">
          <div className="Update_sitter_input_text">
            <label>С</label>
          </div>
          <div className="Update_sitter_input_text">
            <input type="date" name="dateSince1" value={updateFormParent.dateSince1} onChange={handleInput} />
          </div>
        </div>
        <div className="Update_sitter_input">
          <div className="Update_sitter_input_text">
            <label>По</label>
          </div>
          <div className="Update_sitter_input_text">
            <input type="date" name="dateUntil1" value={updateFormParent.dateUntil1} onChange={handleInput} />
          </div>
        </div>
        {/* {parent?.dateSince2
          ? (
            <>
              <label>С</label>
              <input type="date" name="dateSince2" value={updateFormParent.dateSince2} onChange={handleInput} />
              <label>По</label>
              <input type="date" name="dateUntil2" value={updateFormParent.dateUntil2} onChange={handleInput} />
            </>
          )
          : (
            <>
              <div style={{ visibility: `${dateDiv2}` }}>
                <label>С</label>
                <input type="date" name="dateSince2" value={updateFormParent.dateSince2} onChange={handleInput} />
                <label>По</label>
                <input type="date" name="dateUntil2" value={updateFormParent.dateUntil2} onChange={handleInput} />
              </div>
              <div>
                <button type="button" onClick={handleAddDate2}>Добавить дату</button>
              </div>
            </>
          )}
        {
          parent?.dateSince3
            ? (
              <>
                <label>С</label>
                <input type="date" name="dateSince3" value={updateFormParent.dateSince3} onChange={handleInput} />
                <label>По</label>
                <input type="date" name="dateUntil3" value={updateFormParent.dateUntil3} onChange={handleInput} />
              </>
            )
            : (
              <>
                <div style={{ visibility: `${dateDiv3}` }}>
                  <label>С</label>
                  <input type="date" name="dateSince3" value={updateFormParent.dateSince3} onChange={handleInput} />
                  <label>По</label>
                  <input type="date" name="dateUntil3" value={updateFormParent.dateUntil3} onChange={handleInput} />
                </div>
                <div>
                  <button type="button" onClick={handleAddDate3}>Добавить дату</button>
                </div>
              </>
            )
        } */}
        <h4>Ваши питомцы:</h4>
        {allPets[0]
          ? (
            <div>
              {allPets?.map((el) => (
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
                  <p>{el?.petName}</p>
                  <p>{el?.petAge} лет</p>
                  <div className="Update_sitter_input">
                    <button type="button" onClick={() => deletePet(el.id, el.ParentProfileId)}>Удалить</button>
                  </div>
                </div>
              ))}
              {pets.map((el, i) => pet(i))}
              <button type="button" onClick={() => { setPets([...pets, {}]); }}>Добавить питомца</button>
            </div>
          )
          : (
            <div>
              {pets.map((el, i) => pet(i))}
              <button type="button" onClick={() => { setPets([...pets, {}]); }}>Добавить питомца</button>
            </div>
          )}
        <div className="Update_sitter_input">
          <button type="submit">Сохранить изменения</button>
        </div>
      </form>
    </div>
  );
}
