import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './ParentProfileForm.css';

export default function ParentProfileForm() {
  const dispatch = useDispatch();

  const [dateDiv2, setDateDiv2] = useState('hidden');
  const [dateDiv3, setDateDiv3] = useState('hidden');
  const [parentProfileForm, setParentProfileForm] = useState({
    title: '', introduction: '', location: '', responsibilities: '', dateSince1: '', dateUntil1: '', dateSince2: '', dateUntil2: '', dateSince3: '', dateUntil3: '', petName: '', petAge: '',
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
    fetch('http://localhost:3001/signup', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(parentProfileForm),
    })
      .then((res) => res.json())
      .then((res) => dispatch({ type: 'PARENT_PROFILE', payload: res }));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Создание профиля</h3>
        <button type="button">Добавить фото</button>
        <label>Заголовок</label>
        <input type="text" name="title" onChange={handleInput} />
        <label>Введение</label>
        <input type="text" name="introduction" onChange={handleInput} />
        <label>Дом & Локация</label>
        <input type="text" name="location" onChange={handleInput} />
        <label>Обязанности</label>
        <input type="text" name="responsibilities" onChange={handleInput} />
        <label>С</label>
        <input type="date" name="dateSince1" onChange={handleInput} />
        <label>По</label>
        <input type="date" name="dateUntil1" onChange={handleInput} />
        <div style={{ visibility: `${dateDiv2}` }}>
          <label>С</label>
          <input type="date" name="dateSince2" value="" onChange={handleInput} />
          <label>По</label>
          <input type="date" name="dateUntil2" onChange={handleInput} />
        </div>
        <div style={{ visibility: `${dateDiv3}` }}>
          <label>С</label>
          <input type="date" name="dateSince3" onChange={handleInput} />
          <label>По</label>
          <input type="date" name="dateUntil3" onChange={handleInput} />
        </div>
        <button type="button" onClick={handleAddDate2}>Добавить дату</button>
        <button type="button" onClick={handleAddDate3}>Добавить дату</button>
        <h4>Ваши питомцы:</h4>
        <button type="button">Добавить фото питомца</button>
        <label>Имя питомца</label>
        <input type="text" name="petName" onChange={handleInput} />
        <label>Возраст питомца</label>
        <input type="text" name="petAge" onChange={handleInput} />
        <button type="button">Добавить питомца</button>
        <button type="submit">Создать</button>
      </form>
    </div>
  );
}
