import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './ParentProfileForm.css';

export default function ParentProfileForm() {
  const dispatch = useDispatch();

  const [dateDiv2, setDateDiv2] = useState('hidden');
  const [dateDiv3, setDateDiv3] = useState('hidden');

  const [petDiv2, setPetDiv2] = useState('hidden');
  const [petDiv3, setPetDiv3] = useState('hidden');

  const handleAddPet2 = () => (
    setPetDiv2('visible')
  );

  const handleAddPet3 = () => (
    setPetDiv3('visible')
  );

  const [parentProfileForm, setParentProfileForm] = useState({
    title: '',
    introduction: '',
    location: '',
    responsibilities: '',
    dateSince1: '',
    dateUntil1: '',
    dateSince2: '',
    dateUntil2: '',
    dateSince3: '',
    dateUntil3: '',
    petName: '',
    petAge: '',
    petName2: '',
    petAge2: '',
    petName3: '',
    petAge3: '',
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
    fetch('http://localhost:3001/profile/create-parent-profile', {
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
        <label>Дом и Локация</label>
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
          <input type="date" name="dateUntil2" onChange={handleInput} />
        </div>
        <div style={{ visibility: `${dateDiv3}` }}>
          <label>С</label> {/* дата 3 */}
          <input type="date" name="dateSince3" onChange={handleInput} />
          <label>По</label>
          <input type="date" name="dateUntil3" onChange={handleInput} />
        </div>
        <button type="button" onClick={handleAddDate2}>Добавить дату</button>
        <button type="button" onClick={handleAddDate3}>Добавить дату</button>
        <h4>Ваши питомцы:</h4>
        <button type="button">Добавить фото питомца</button>{/* питомец 1 */}
        <label>Имя питомца</label>
        <input type="text" name="petName" onChange={handleInput} />
        <label>Возраст питомца</label>
        <input type="text" name="petAge" onChange={handleInput} />
        <div style={{ visibility: `${petDiv2}` }}>
          <button type="button">Добавить фото питомца</button> {/* питомец 2 */}
          <label>Имя питомца</label>
          <input type="text" name="petName2" onChange={handleInput} />
          <label>Возраст питомца</label>
          <input type="text" name="petAge2" onChange={handleInput} />
        </div>
        <div style={{ visibility: `${petDiv3}` }}>
          <button type="button">Добавить фото питомца</button> {/* питомец 3 */}
          <label>Имя питомца</label>
          <input type="text" name="petName2" onChange={handleInput} />
          <label>Возраст питомца</label>
          <input type="text" name="petAge2" onChange={handleInput} />
        </div>
        <button type="button" onClick={handleAddPet2}>Добавить питомца</button>
        <button type="button" onClick={handleAddPet3}>Добавить питомца</button>
        <button type="submit">Создать</button>
      </form>
    </div>
  );
}
