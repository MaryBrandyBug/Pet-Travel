import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './ParentProfileForm.css';

export default function ParentProfileForm() {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.userStore);
  // const p = useSelector((store) => store.parentStore);
  // console.log(p.pet[0]?.id);

  const [pets, setPets] = useState([{}]);

  const [dateDiv2, setDateDiv2] = useState('hidden');
  const [dateDiv3, setDateDiv3] = useState('hidden');

  const [parentProfileForm, setParentProfileForm] = useState({
    title: '',
    introduction: '',
    location: '',
    country: '',
    city: '',
    responsibilities: '',
    dateSince1: '',
    dateUntil1: '',
    dateSince2: '',
    dateUntil2: '',
    dateSince3: '',
    dateUntil3: '',
  });

  const handleInput = (e) => {
    setParentProfileForm({ ...parentProfileForm, [e.target.name]: e.target.value });
  };

  const handleAddDate2 = () => (
    setDateDiv2('visible')
  );

  const handleAddDate3 = () => (
    setDateDiv3('visible')
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(pets);
    parentProfileForm.pets = pets;
    fetch('http://localhost:3001/profile/create-parent-profile', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...parentProfileForm, UserId: user.id }),
    })
      .then((res) => res.json())
      .then((res) => dispatch({ type: 'PARENT_PROFILE', payload: res }));
  };

  const handlePet = (e, i) => {
    console.log(e, i);
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
      <>
        <button type="button">Добавить фото питомца</button>
        <label>Имя питомца</label>
        <input type="text" name="petName" onChange={(e) => handlePet(e, i)} />
        <label>Возраст питомца</label>
        <input type="text" name="petAge" onChange={(e) => handlePet(e, i)} />
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
      </>
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form_parent">
        <h3>Создание профиля</h3>
        <button type="button">Добавить фото</button>
        <label>Заголовок</label>
        <input type="text" name="title" onChange={handleInput} />
        <label>Страна</label>
        <input type="text" name="country" onChange={handleInput} />
        <label>Город</label>
        <input type="text" name="city" onChange={handleInput} />
        <label>Введение</label>
        <input type="text" name="introduction" onChange={handleInput} />
        <label>Дом & Локация</label>
        <input type="text" name="location" onChange={handleInput} />
        <label>Обязанности</label>
        <input type="text" name="responsibilities" onChange={handleInput} />
        <label>С</label> {/* дата 1 */}
        <input type="date" name="dateSince1" onChange={handleInput} />
        <label>По</label>
        <input type="date" name="dateUntil1" onChange={handleInput} />
        <div style={{ visibility: `${dateDiv2}` }}>
          <label>С</label> {/* дата 2 */}
          <input type="date" name="dateSince2" value="" onChange={handleInput} />
          <label>По</label>
          <input type="date" name="dateUntil2" value="" onChange={handleInput} />
        </div>
        <div style={{ visibility: `${dateDiv3}` }}>
          <label>С</label> {/* дата 3 */}
          <input type="date" name="dateSince3" value="" onChange={handleInput} />
          <label>По</label>
          <input type="date" name="dateUntil3" value="" onChange={handleInput} />
        </div>
        <button type="button" onClick={handleAddDate2}>Добавить дату</button>
        <button type="button" onClick={handleAddDate3}>Добавить дату</button>
        <h4>Ваши питомцы:</h4>
        {pets.map((el, i) => pet(i))}
        {/* pet */}
        <button type="button" onClick={() => { setPets([...pets, {}]); }}>Добавить питомца</button>
        <button type="submit">Создать</button>
      </form>
    </div>
  );
}
