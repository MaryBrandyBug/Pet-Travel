import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './UpdateSitter.css';

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
    <div className="Update_sitter_profile">
      <form onSubmit={handleSubmit}>
        <div className="Update_sitter_input">
          <div className="Update_sitter_input_text">
            <label>Статус</label>
          </div>
          <div className="Update_sitter_input_text">
            <input type="text" name="status" value={updateFormSitter.status} onChange={handleInput} />
          </div>
        </div>
        <div className="Update_sitter_input">
          <div className="Update_sitter_input_text">
            <label>Страна</label>
          </div>
          <div className="Update_sitter_input_text">
            <input type="text" name="country" value={updateFormSitter.country} onChange={handleInput} />
          </div>
        </div>
        <div className="Update_sitter_input">
          <div className="Update_sitter_input_text">
            <label>Город</label>
          </div>
          <div className="Update_sitter_input_text">
            <input type="text" name="city" value={updateFormSitter.city} onChange={handleInput} />
          </div>

        </div>
        <div className="Update_sitter_input">
          <div className="Update_sitter_input_text">
            <label>Обо мне</label>
          </div>
          <div className="Update_sitter_input_text">
            <textarea type="text" name="aboutMe" value={updateFormSitter.aboutMe} onChange={handleInput} />
          </div>
        </div>
        <div className="Update_sitter_input">
          <label>
            <input type="checkbox" name="cats" value={updateFormSitter?.cats} onChange={handleInput} />
            Кошки
          </label>
        </div>
        <div className="Update_sitter_input">
          <label>
            <input type="checkbox" name="dogs" value={updateFormSitter?.dogs} onChange={handleInput} />
            Собаки
          </label>
        </div>
        <div className="Update_sitter_input">
          <label>
            <input type="checkbox" name="fish" value={updateFormSitter?.fish} onChange={handleInput} />
            Рыбы
          </label>
        </div>
        <div className="Update_sitter_input">
          <label>
            <input type="checkbox" name="birds" value={updateFormSitter?.birds} onChange={handleInput} />
            Птицы
          </label>
        </div>
        <div className="Update_sitter_input">
          <label>
            <input type="checkbox" name="horses" value={updateFormSitter?.horses} onChange={handleInput} />
            Лошади
          </label>
        </div>
        <div className="Update_sitter_input">
          <label>
            <input type="checkbox" name="reptiles" value={updateFormSitter?.reptiles} onChange={handleInput} />
            Рептилии
          </label>
        </div>
        <div className="Update_sitter_input">
          <label>
            <input type="checkbox" name="smallPets" value={updateFormSitter?.smallPets} onChange={handleInput} />
            Мелкие животные
          </label>
        </div>

        <button type="submit">Изменить</button>
      </form>
    </div>
  );
}
