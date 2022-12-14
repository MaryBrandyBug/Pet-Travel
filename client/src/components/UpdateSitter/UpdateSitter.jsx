import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function UpdateSitter() {
  const user = useSelector((store) => store.userStore.auth);
  const sitter = useSelector((store) => store.userStore.sitter);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [updateFormSitter, setUpdateFormSitter] = useState({
    status: sitter?.status, country: sitter?.country, city: sitter?.city, aboutMe: sitter?.aboutMe, cats: sitter?.cats, dogs: sitter?.dogs, fish: sitter?.fish, horses: sitter?.horses, birds: sitter?.birds, reptiles: sitter?.reptiles, smallPets: sitter?.smallPets,
  });

  const handleInput = (e) => {
    if (e.target.type === 'checkbox') {
      setUpdateFormSitter({ ...updateFormSitter, [e.target.name]: e.target.checked });
      return;
    }
    setUpdateFormSitter({ ...updateFormSitter, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3001/profile/sitter/update-sitter-profile', {
      method: 'PUT',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...updateFormSitter, UserId: user.id }),
    })
      .then((res) => res.json())
      .then((res) => dispatch({ type: 'SITTER_PROFILE', payload: res.sitter }));
    navigate('/profile/sitter');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Статус</label>
        <input type="text" name="status" value={updateFormSitter.status} onChange={handleInput} />
        <label>Страна</label>
        <input type="text" name="country" value={updateFormSitter.country} onChange={handleInput} />
        <label>Город</label>
        <input type="text" name="city" value={updateFormSitter.city} onChange={handleInput} />
        <label>Обо мне</label>
        <input type="text" name="aboutMe" value={updateFormSitter.aboutMe} onChange={handleInput} />
        <fieldset>
          <label>
            <input type="checkbox" name="cats" value={updateFormSitter?.cats} onChange={handleInput} />
            Кошки
          </label>
          <label>
            <input type="checkbox" name="dogs" value={updateFormSitter?.dogs} onChange={handleInput} />
            Собаки
          </label>
          <label>
            <input type="checkbox" name="fish" value={updateFormSitter?.fish} onChange={handleInput} />
            Рыбы
          </label>
          <label>
            <input type="checkbox" name="birds" value={updateFormSitter?.birds} onChange={handleInput} />
            Птицы
          </label>
          <label>
            <input type="checkbox" name="horses" value={updateFormSitter?.horses} onChange={handleInput} />
            Лошади
          </label>
          <label>
            <input type="checkbox" name="reptiles" value={updateFormSitter?.reptiles} onChange={handleInput} />
            Рептилии
          </label>
          <label>
            <input type="checkbox" name="smallPets" value={updateFormSitter?.smallPets} onChange={handleInput} />
            Мелкие животные
          </label>
          <button type="submit">Изменить</button>
        </fieldset>
      </form>
    </div>
  );
}
