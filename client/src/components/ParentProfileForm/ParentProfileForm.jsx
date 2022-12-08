import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './ParentProfileForm.css';

export default function ParentProfileForm() {
  const user = useSelector((store) => store.userStore);
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
    country: '',
    city: '',
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
    type: '',
    type2: '',
    type3: '',
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
      body: JSON.stringify({ ...parentProfileForm, UserId: user.id }),
    })
      .then((res) => res.json())
      .then((res) => dispatch({ type: 'PARENT_PROFILE', payload: res }));
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
        <button type="button">Добавить фото питомца</button>{/* питомец 1 */}
        <label>Имя питомца</label>
        <input type="text" name="petName" onChange={handleInput} />
        <label>Возраст питомца</label>
        <input type="text" name="petAge" onChange={handleInput} />
        <p>
          <input type="radio" name="type" value="cat" onChange={handleInput} />
          Кошка
        </p>
        <p>
          <input type="radio" name="type" value="dog" onChange={handleInput} />
          Собака
        </p>
        <p>
          <input type="radio" name="type" value="bird" onChange={handleInput} />
          Птица
        </p>
        <p>
          <input type="radio" name="type" value="fish" onChange={handleInput} />
          Рыбки
        </p>
        <p>
          <input type="radio" name="type" value="horse" onChange={handleInput} />
          Лошадь
        </p>
        <p>
          <input type="radio" name="type" value="small" onChange={handleInput} />
          Малкие животные
        </p>
        <p>
          <input type="radio" name="type" value="reptiles" onChange={handleInput} />
          Рептилия
        </p>
        <div style={{ visibility: `${petDiv2}` }}>
          <button type="button">Добавить фото питомца</button> {/* питомец 2 */}
          <label>Имя питомца</label>
          <input type="text" name="petName2" onChange={handleInput} />
          <label>Возраст питомца</label>
          <input type="text" name="petAge2" onChange={handleInput} />
          <p>
            <input type="radio" name="type2" value="cat" onChange={handleInput} />
            Кошка
          </p>
          <p>
            <input type="radio" name="type2" value="dog" onChange={handleInput} />
            Собака
          </p>
          <p>
            <input type="radio" name="type2" value="bird" onChange={handleInput} />
            Птица
          </p>
          <p>
            <input type="radio" name="type2" value="fish" onChange={handleInput} />
            Рыбки
          </p>
          <p>
            <input type="radio" name="type2" value="horse" onChange={handleInput} />
            Лошадь
          </p>
          <p>
            <input type="radio" name="type2" value="small" onChange={handleInput} />
            Малкие животные
          </p>
          <p>
            <input type="radio" name="type2" value="reptiles" onChange={handleInput} />
            Рептилия
          </p>
        </div>
        <div style={{ visibility: `${petDiv3}` }}>
          <button type="button">Добавить фото питомца</button> {/* питомец 3 */}
          <label>Имя питомца</label>
          <input type="text" name="petName2" onChange={handleInput} />
          <label>Возраст питомца</label>
          <input type="text" name="petAge2" onChange={handleInput} />
          <p>
            <input type="radio" name="type3" value="cat" onChange={handleInput} />
            Кошка
          </p>
          <p>
            <input type="radio" name="type3" value="dog" onChange={handleInput} />
            Собака
          </p>
          <p>
            <input type="radio" name="type3" value="bird" onChange={handleInput} />
            Птица
          </p>
          <p>
            <input type="radio" name="type3" value="fish" onChange={handleInput} />
            Рыбки
          </p>
          <p>
            <input type="radio" name="type3" value="horse" onChange={handleInput} />
            Лошадь
          </p>
          <p>
            <input type="radio" name="type3" value="small" onChange={handleInput} />
            Малкие животные
          </p>
          <p>
            <input type="radio" name="type3" value="reptiles" onChange={handleInput} />
            Рептилия
          </p>
        </div>
        <button type="button" onClick={handleAddPet2}>Добавить питомца</button>
        <button type="button" onClick={handleAddPet3}>Добавить питомца</button>
        <button type="submit">Создать</button>
      </form>
    </div>
  );
}
