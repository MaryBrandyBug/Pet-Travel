import { useSelector } from 'react-redux';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Setting() {
  const user = useSelector((store) => store.userStore);
  console.log(user);

  const [signUpForm, setSignUpForm] = useState({
    email: '', name: '', password: '', role: '', surname: '', inst: '', telegram: '', facebook: '',
  });
  const navigate = useNavigate();

  const handleInput = (e) => {
    setSignUpForm({ ...signUpForm, [e.target.name]: e.target.value });
  };
  const deleteProfile = () => {
    fetch('http://localhost:3001/profile/settings', {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: user.id }),
    })
      .then((res) => console.log(res));
    navigate('/');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3001/profile/settings', {
      method: 'PUT',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...signUpForm, id: user.id }),
    })
      .then((res) => res.json());
  };
  return (
    <div>
      <form className="updform" onSubmit={handleSubmit}>
        <div className="form-item">
          {/* <img src="" alt="photo" name="mainPhoto"/> */}
          <span>Фото</span>
          <input type="file" name="mainPhoto" />
          <button type="submit">Добавить фото</button>
        </div>

        <div className="form-item">
          <span>Имя</span>
          <input type="text" className="upd" value={user?.name} name="name" onChange={handleInput} />
        </div>
        <div className="form-item">
          <span>Пароль</span>
          <input type="password" className="upd" value={user?.password} name="password" onChange={handleInput} />
        </div>
        <div className="form-item">
          <span>Повторите пароль</span>
          <input type="password" className="upd" value={user?.password} name="password" onChange={handleInput} />
        </div>
        <div className="form-item">
          <span>Электронная почта</span>
          <input type="email" className="upd" value={`${user?.email}`} name="email" onChange={handleInput} />
        </div>

        <div className="add-item">
          <div className="form-item">
            <span>Фамилия</span>
            <input type="text" className="upd" value={user?.surname} name="surname" onChange={handleInput} />
          </div>
          <div>
            <div>
              <h4>
                Соцсети:
              </h4>
            </div>
            <div className="form-item">
              <span className="input-group-text" id="basic-addon1">@</span>
              <input name="facebook" type="text" placeholder="Фэйсбук" onChange={handleInput} />
            </div>
            <div className="form-item">
              <span className="input-group-text" id="basic-addon1">@</span>
              <input name="inst" type="text" placeholder="Инстаграм" onChange={handleInput} />
            </div>
            <div className="form-item">
              <span className="input-group-text" id="basic-addon1">@</span>
              <input name="telegram" type="text" placeholder="Телеграм" onChange={handleInput} />
            </div>
          </div>

        </div>

        <div className="btn_sub">
          <button type="submit">Сохранить изменения</button>
        </div>
      </form>
      <div className="btn_sub">
        <button type="submit" onClick={() => deleteProfile()}>Удалить профиль</button>
      </div>

    </div>
  );
}
