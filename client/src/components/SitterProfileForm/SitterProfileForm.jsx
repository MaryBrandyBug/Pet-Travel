import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './SitterProfileForm.css';

export default function SitterProfileForm() {
  const user = useSelector((store) => store.userStore);
  const dispatch = useDispatch();

  // const [checked, setChecked] = useState(false);
  const [sitterProfileForm, setSitterProfileForm] = useState({
    status: '', country: '', city: '', aboutMe: '', cats: false, dogs: false, fish: false, horses: false, birds: false, reptiles: false, smallPets: false,
  });

  const handleInput = (e) => {
    if (e.target.type === 'checkbox') {
      setSitterProfileForm({ ...sitterProfileForm, [e.target.name]: e.target.checked });
      return;
    }
    setSitterProfileForm({ ...sitterProfileForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3001/profile/create-sitter-profile', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...sitterProfileForm, UserId: user.id }),
    })
      .then((res) => res.json())
      .then((res) => dispatch({ type: 'SITTER_PROFILE', payload: res }));
  };
  console.log(sitterProfileForm);
  return (
    <div>
      <form onSubmit={handleSubmit} className="form_sitter">
        <h3>Создание профиля</h3>
        <button type="button">Добавить фото</button>
        <label>Статус</label>
        <input type="text" name="status" onChange={handleInput} />
        <label>Страна</label>
        <input type="text" name="country" onChange={handleInput} />
        <label>Город</label>
        <input type="text" name="city" onChange={handleInput} />
        <label>Обо мне</label>
        <input type="text" name="aboutMe" onChange={handleInput} />
        <fieldset>
          <label>
            <input type="checkbox" name="cats" onChange={handleInput} />
            Кошки
          </label>
          <label>
            <input type="checkbox" name="dogs" onChange={handleInput} />
            Собаки
          </label>
          <label>
            <input type="checkbox" name="fish" onChange={handleInput} />
            Рыбы
          </label>
          <label>
            <input type="checkbox" name="birds" onChange={handleInput} />
            Птицы
          </label>
          <label>
            <input type="checkbox" name="horses" onChange={handleInput} />
            Лошади
          </label>
          <label>
            <input type="checkbox" name="reptiles" onChange={handleInput} />
            Рептилии
          </label>
          <label>
            <input type="checkbox" name="smallPets" onChange={handleInput} />
            Мелкие животные
          </label>
        </fieldset>
        <button type="submit">Создать</button>
      </form>
    </div>
  );
}
